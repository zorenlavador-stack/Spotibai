import { router } from "expo-router";
import { ReactNode } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/colors";

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

// Wraps a basic list screen: scrolls, centers content, shows a title and a back button.
export default function Screen({ title, subtitle, children }: Props) {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: Colors.background }}
      contentContainerStyle={{ padding: 20, paddingBottom: 32 }}
    >
      <View style={{ width: "100%", maxWidth: 720, alignSelf: "center" }}>
        <Text style={{ fontSize: 26, fontWeight: "bold", color: Colors.text }}>
          {title}
        </Text>

        {subtitle ? (
          <Text style={{ fontSize: 14, color: Colors.muted, marginTop: 4 }}>
            {subtitle}
          </Text>
        ) : null}

        <View style={{ marginTop: 18 }}>{children}</View>

        <TouchableOpacity
          onPress={() => router.back()}
          accessibilityRole="button"
          style={{
            backgroundColor: Colors.primary,
            height: 52,
            borderRadius: 14,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 8,
          }}
        >
          <Text style={{ color: Colors.white, 
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
