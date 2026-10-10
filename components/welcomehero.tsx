import { Image, Text, View } from "react-native";
import { Colors } from "../constants/colors";

type Props = {
  /** Name typed on the welcome screen. The preview card updates live. */
  name: string;
  /** Smaller version used on phones (no preview card). */
  compact?: boolean;
};

export default function WelcomeHero({ name, compact = false }: Props) {
  // Derive display values from the name instead of storing extra state.
  const firstName = name.trim().split(" ")[0];
  // const greeting = firstName ? `Hi, ${firstName}!` : "Hi, there!";
  const initial = firstName ? firstName[0].toUpperCase() : "S";

  // Diameters of the three concentric rings behind the logo.
  const ringSizes = compact ? [170, 280, 390] : [330, 540, 750];

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
      }}
    >
      {/* RINGS (absolute children are centered by the parent) */}
      {ringSizes.map((size) => (
        <View
          key={size}
          style={{
            position: "absolute",
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: 1,
            borderColor: Colors.heroRing,
          }}
        />
      ))}

      {/* DECORATIONS */}
      <Text
        style={{
          position: "absolute",
          top: "22%",
          left: "7%",
          fontSize: compact ? 28 : 42,
          color: Colors.heroAccent,
        }}
      >
        ✦
      </Text>
      <View style={[dot(30), { top: "12%", right: "10%" }]} />
      <View style={[dot(18), { bottom: "26%", left: "12%" }]} />
      <View style={[dot(12), { bottom: "16%", right: "6%" }]} />

      {/* LOGO */}
      <Image
        source={require("../assets/images/logo_v2.png")}
        style={{
          width: compact ? 190 : 320,
          height: compact ? 130 : 220,
        }}
        resizeMode="contain"
      />

      {/* PREVIEW CARD (hidden on phones to save space) */}
      {/* {!compact && (
        <View
          style={{
            width: 320,
            maxWidth: "80%",
            backgroundColor: Colors.white,
            borderRadius: 24,
            padding: 20,
            marginTop: 12,
            shadowColor: "#000",
            shadowOpacity: 0.25,
            shadowRadius: 24,
            shadowOffset: { width: 0, height: 12 },
            elevation: 8,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 52,
                height: 52,
                borderRadius: 26,
                backgroundColor: "#1B7A47",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 14,
              }}
            >
              <Text
                style={{ color: Colors.white, fontSize: 20, fontWeight: "bold" }}
              >
                {initial}
              </Text>
            </View>

            <View style={{ flexShrink: 1 }}>
              <Text
                numberOfLines={1}
                style={{ fontSize: 19, fontWeight: "bold", color: Colors.text }}
              >
                {greeting}
              </Text>
              <Text style={{ fontSize: 12, color: Colors.muted, marginTop: 2 }}>
                Let's get you set up.
              </Text>
            </View> 
          </View>

          {/* Skeleton bars hint at content coming next */}
          {/*<View style={{ marginTop: 16 }}>
            <View style={bar("100%")} />
            <View style={bar("72%")} />
            <View style={bar("46%")} />
          </View> 
        </View>
      )} */}
    </View>
  );
}

// Small helpers for the repeated decoration styles
const dot = (size: number) => ({
  position: "absolute" as const,
  width: size,
  height: size,
  borderRadius: size / 2,
  backgroundColor: Colors.heroAccent,
});

const bar = (width: `${number}%`) => ({
  width,
  height: 9,
  borderRadius: 5,
  backgroundColor: Colors.skeleton,
  marginBottom: 8,
});