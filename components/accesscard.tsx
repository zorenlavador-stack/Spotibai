import { Href, router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/colors";
import { QuickAccessItem } from "../constants/data";

// One dashboard shortcut: background photo, dark overlay, emoji, title, subtitle.
export default function QuickAccessCard({ item }: { item: QuickAccessItem }) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => router.push(item.href as Href)}
      accessibilityRole="button"
      accessibilityLabel={item.title}
      style={{
        height: 110,
        borderRadius: 16,
        overflow: "hidden",
        marginBottom: 12,
        borderWidth: 2,
        borderColor: Colors.inputBorder,
      }}
    >
      <Image
        source={item.image}
        style={{ width: "100%", height: "100%", position: "absolute" }}
        resizeMode="cover"
      />

      <View
        style={{
          flex: 1,
          padding: 16,
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.25)",
        }}
      >
        <Text style={{ fontSize: 26 }}>{item.icon}</Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            color: Colors.white,
            marginTop: 4,
          }}
        >
          {item.title}
        </Text>
        <Text style={{ fontSize: 12, color: Colors.white, marginTop: 2 }}>
          {item.subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
