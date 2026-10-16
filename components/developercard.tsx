import { Image, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/colors";
import { Developer } from "../constants/developers";

type Props = {
  developer: Developer;
  selected: boolean;
  onPress: () => void;
};

// One tappable profile card. Highlights itself when selected.
export default function DeveloperCard({ developer, selected, onPress }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected }}
      accessibilityLabel={`${developer.name}, ${developer.course}`}
      style={{
        width: "48%",
        backgroundColor: selected ? Colors.pillBackground : Colors.white,
        borderRadius: 18,
        borderWidth: selected ? 2 : 1,
        borderColor: selected ? Colors.primary : Colors.inputBorder,
        paddingVertical: 18,
        paddingHorizontal: 10,
        alignItems: "center",
      }}
    >
      <Image
        source={developer.photo}
        style={{ width: 84, height: 84, borderRadius: 42 }}
        resizeMode="cover"
      />

      <Text
        numberOfLines={2}
        style={{
          fontSize: 15,
          fontWeight: "bold",
          color: Colors.text,
          textAlign: "center",
          marginTop: 12,
        }}
      >
        {developer.name}
      </Text>

      <View
        style={{
          backgroundColor: selected ? Colors.white : Colors.background,
          borderRadius: 999,
          paddingHorizontal: 10,
          paddingVertical: 4,
          marginTop: 8,
        }}
      >
        <Text
          style={{ fontSize: 11, fontWeight: "bold", color: Colors.pillText }}
        >
          {developer.course} • {developer.yearLevel}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
