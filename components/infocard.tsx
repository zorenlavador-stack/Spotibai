import { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/colors";

type Props = {
  icon?: string; // emoji shown in a round badge
  title: string;
  subtitle?: string;
  meta?: string; // small extra line (teacher, due date, time)
  right?: ReactNode; // optional element on the right (e.g. a check mark)
  done?: boolean; // dims the card and strikes through the title
  onPress?: () => void; // makes the card tappable
};

export default function InfoCard({
  icon,
  title,
  subtitle,
  meta,
  right,
  done = false,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={!onPress}
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.white,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: Colors.inputBorder,
        padding: 14,
        marginBottom: 10,
        opacity: done ? 0.6 : 1,
      }}
    >
      {icon ? (
        <View
          style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            backgroundColor: Colors.background,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 12,
          }}
        >
          <Text style={{ fontSize: 22 }}>{icon}</Text>
        </View>
      ) : null}

      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: Colors.text,
            textDecorationLine: done ? "line-through" : "none",
          }}
        >
          {title}
        </Text>

        {subtitle ? (
          <Text style={{ fontSize: 13, color: Colors.muted, marginTop: 2 }}>
            {subtitle}
          </Text>
        ) : null}

        {meta ? (
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: Colors.pillText,
              marginTop: 4,
            }}
          >
            {meta}
          </Text>
        ) : null}
      </View>

      {right}
    </TouchableOpacity>
  );
}
