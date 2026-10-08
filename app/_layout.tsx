import { Stack } from "expo-router";
import { Image, View } from "react-native";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,

        header: () => (
          <View 
            style={{
              height: 200,
              backgroundColor: "#F6F8FB",
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
                borderColor: "#1877ED",
                backgroundColor: "#FFFFFF",
                position: "relative",
              }}
            >
             
              <Image
                source={require("../assets/images/greenbg.jpg")}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                }}
                resizeMode="cover"
              />

             
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/images/logo.png")}
                  style={{
                    width: 250,
                    height: 250,
                  }}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        ),
      }}
    />
  );
}