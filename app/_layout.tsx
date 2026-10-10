import * as React from "react";
import { Stack } from "expo-router";
import { Image, View } from "react-native";

export default function Layout() {
  return React.createElement(Stack, {
    screenOptions: {
      headerShown: false,
      header: () =>
        React.createElement(
          View,
          {
            style: {
              height: 200,
              backgroundColor: "#F6F8FB",
              paddingHorizontal: 12,
              paddingTop: 10,
              paddingBottom: 10,
            },
          },
          React.createElement(
            View,
            {
              style: {
                flex: 1,
                borderRadius: 20,
                overflow: "hidden",
                borderWidth: 2,
                borderColor: "#1877ED",
                backgroundColor: "#FFFFFF",
                position: "relative",
              },
            },
            React.createElement(Image, {
              source: require("../assets/images/greenbg.jpg"),
              style: {
                width: "100%",
                height: "100%",
                position: "absolute",
              },
              resizeMode: "cover",
            }),
            React.createElement(
              View,
              {
                style: {
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
              React.createElement(Image, {
                source: require("../assets/images/logo.png"),
                style: {
                  width: 250,
                  height: 250,
                },
                resizeMode: "contain",
              })
            )
          )
        ),
    },
  });
}