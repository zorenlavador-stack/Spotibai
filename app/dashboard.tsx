import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";

import AccessCard from "../components/accesscard";
import Clock from "../components/clock";
import { Colors } from "../constants/colors";
import { quickAccess } from "../constants/data";

export default function Dashboard() {
  // ROUTE PARAM: the name typed on the welcome screen (may be missing)
  const { name } = useLocalSearchParams<{ name?: string }>();
  const displayName = name || "Student";

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: Colors.background }}
      contentContainerStyle={{ padding: 18, paddingBottom: 32 }}
    >
      <View style={{ width: "100%", 
        maxWidth: 720, 
        alignSelf: "center" }}
      >
        {/* GREETING */}
        <View
          style={{
            backgroundColor: Colors.white,
            padding: 16,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: Colors.inputBorder,
          }}
        >
          <Text
            style={{ fontSize: 24, 
              fontWeight: "bold", 
              color: Colors.text }}
          >
            Hello, {displayName}! 👋
          </Text>
          <Text style={{ fontSize: 13, 
            color: Colors.muted, 
            marginTop: 4 }}
          >
            Keep going! Your goals are within reach.
          </Text>
          <Clock />
        </View>

        {/* MOTIVATION CARD */}
        <View
          style={{
            backgroundColor: Colors.pillBackground,
            marginTop: 14,
            padding: 16,
            borderRadius: 16,
          }}
        >
          <Text
            style={{ fontSize: 15, 
              fontWeight: "bold", 
              color: Colors.pillText }}
          >
            Small steps make big progress.
          </Text>
          <Text style={{ fontSize: 12,
             color: Colors.muted,
              marginTop: 4 }}
          >
            Keep learning every day!
          </Text>
        </View>

        {/* QUICK ACCESS */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 22,
            marginBottom: 12,
          }}
        >
          <View
            style={{
              width: 5,
              height: 20,
              backgroundColor: Colors.primary,
              borderRadius: 5,
              marginRight: 8,
            }}
          />
          <Text
            style={{ fontSize: 17, 
              fontWeight: "bold", 
              color: Colors.text }}
          >
            Quick Access
          </Text>
        </View>

        {quickAccess.map((item) => (
          <AccessCard key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );
}
