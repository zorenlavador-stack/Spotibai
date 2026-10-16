import { Stack } from "expo-router";
import { Image, View } from "react-native";
import { Colors } from "../constants/colors";

// Logo banner shown only on the dashboard
function DashboardHeader() {
  return (
    <View
      style={{
        height: 200,
        backgroundColor: Colors.background,
        paddingHorizontal: 12,
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          borderRadius: 20,
          overflow: "hidden",
          borderWidth: 2,
          borderColor: "#87f1a2fe",
          backgroundColor: Colors.white,
        }}
      >
        <Image
          source={require("../assets/images/bg_v2.png")}
          style={{ width: "100%", height: "100%", position: "absolute" }}
          resizeMode="cover"
        />

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("../assets/images/logo_v2.png")}
            style={{ width: 250, height: 250 }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}

export default function Layout() {
  return (
    <Stack
      // Default for every screen: simple header with only a back arrow
      // (each screen already shows its own title)
      screenOptions={{
        headerTitle: "",
        headerShadowVisible: false,
        headerTintColor: Colors.text,
        headerStyle: { backgroundColor: Colors.background },
        contentStyle: { backgroundColor: Colors.background },
      }}
    >
      {/* Welcome page: no header */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* Dashboard: logo banner header */}
      <Stack.Screen
        name="dashboard"
        options={{ headerShown: true, header: () => <DashboardHeader /> }}
      />
    </Stack>
  );
}
