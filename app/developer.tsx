import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import DeveloperCard from "../components/developercard";
import { Colors } from "../constants/colors";
import { developers } from "../constants/developers";

export default function Developer() {
  // STATE: id of the tapped developer (null = nothing selected)
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Look up the full profile from the shared list
  const selected = developers.find((dev) => dev.id === selectedId);

  // Tapping the selected card again closes its details
  const handleSelect = (id: string) => {
    setSelectedId((current) => (current === id ? null : id));
  };

  // Rows shown in the details panel
  const details = selected
    ? [
        {
          icon: "id-card-outline",
          label: "Student ID",
          value: selected.studentId,
        },
        { icon: "school-outline", 
          label: "Course", 
          value: selected.course },
        {
          icon: "calendar-outline",
          label: "Year level",
          value: selected.yearLevel,
        },
        { icon: "people-outline", 
          label: "Section", value: 
          selected.section 
        },
        { icon: "mail-outline", 
          label: "Email", 
          value: selected.email 
        },
      ]
    : [];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: Colors.background }}
      contentContainerStyle={{ padding: 20, paddingBottom: 32 }}
    >
      <View style={{ width: "100%", 
        maxWidth: 720, 
        alignSelf: "center" }}>
          
        {/* TITLE */}
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            color: Colors.text,
            textAlign: "center",
          }}
        >
          Developers
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: Colors.muted,
            textAlign: "center",
            marginTop: 4,
            marginBottom: 20,
          }}
        >
          Meet the team behind SPOTIBAI
        </Text>

        {/* PROFILE GRID */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            rowGap: 14,
          }}
        >
          {developers.map((dev) => (
            <DeveloperCard
              key={dev.id}
              developer={dev}
              selected={dev.id === selectedId}
              onPress={() => handleSelect(dev.id)}
            />
          ))}
        </View>

        {/* DETAILS PANEL */}
        <View
          style={{
            backgroundColor: Colors.white,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: Colors.inputBorder,
            padding: 20,
            marginTop: 18,
          }}
        >
          {selected ? (
            <>
              <Text
                style={{ fontSize: 20, 
                  fontWeight: "bold", 
                  color: Colors.text }}
              >
                {selected.name}
              </Text>

              {details.map((item) => (
                <View
                  key={item.label}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 14,
                  }}
                >
                  <Ionicons
                    name={item.icon as keyof typeof Ionicons.glyphMap}
                    size={20}
                    color={Colors.primary}
                  />
                  <Text
                    style={{
                      color: Colors.muted,
                      fontSize: 13,
                      marginLeft: 10,
                      width: 82,
                    }}
                  >
                    {item.label}
                  </Text>
                  <Text
                    style={{
                      color: Colors.text,
                      fontSize: 14,
                      fontWeight: "600",
                      flexShrink: 1,
                    }}
                  >
                    {item.value}
                  </Text>
                </View>
              ))}
            </>
          ) : (
            // Empty state: tell the user what to do
            <Text
              style={{ color: Colors.muted, 
                fontSize: 14, 
                textAlign: "center" }}
            >
              Tap a developer to see their details.
            </Text>
          )}
        </View>

        {/* BACK BUTTON */}
        <TouchableOpacity
          onPress={() => router.back()}
          accessibilityRole="button"
          style={{
            backgroundColor: Colors.primary,
            height: 52,
            borderRadius: 14,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 18,
          }}
        >
          <Text
            style={{ color: Colors.white, 
              fontWeight: "bold", 
              fontSize: 15 }}
          >
            Back to Home
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
