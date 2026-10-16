import { Image, Text, View } from "react-native";
import { Colors } from "../constants/colors";

type Props = {
  name: string;
  compact?: boolean;
};

export default function WelcomeHero({
  name,
  compact = false,
}: Props) {
  const firstName = name.trim().split(" ")[0];
  const initial = firstName
    ? firstName[0].toUpperCase()
    : "S";

  return (
    <View
      style={{
        flex: compact ? undefined : 1,
        height: compact ? 230 : undefined,
        backgroundColor: Colors.hero,
        borderRadius: compact ? 28 : 32,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* BACKGROUND IMAGE */}
      <Image
        source={require("../assets/images/bg_v2.png")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        resizeMode="cover"
        accessibilityLabel="SPOTIBAI decorative background"
      />

      {/* CENTER LOGO */}
      <Image
        source={require("../assets/images/logo_v2.png")}
        style={{
          width: compact ? 150 : 320,
          height: compact ? 130 : 220,
        }}
        resizeMode="contain"
        accessibilityLabel="SPOTIBAI logo"
      />
    </View>
  );
}
