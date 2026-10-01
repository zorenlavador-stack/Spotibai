import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,

        header: () => (
          <View
            style={{
              height: 90,
              backgroundColor: "#142B4A",
              paddingTop: 25,
              paddingHorizontal: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  color: "white",
                  fontSize: 17,
                  fontWeight: "bold",
                }}
              >
                🎓 SPOTIBAI
              </Text>

              <Text
                style={{
                  color: "#CBD5E1",
                  fontSize: 11,
                  marginTop: 3,
                }}
              >
                Learn • Track • Achieve
              </Text>
            </View>

            <Text
              style={{
                color: "white",
                fontSize: 20,
              }}
            >
              🔔
            </Text>
          </View>
        ),
      }}
    />
  );
}