import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Welcome() {
  const [name, setName] = useState("");

  const isNameValid = name.trim() !== "";

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#EAF6EF",
          paddingHorizontal: 24,
          paddingTop: 60,
          paddingBottom: 20,
        }}
      >
        {/* WELCOME */}
        <View
          style={{
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "#172033",
              textAlign: "center",
            }}
          >
            👋 Welcome to SPOTIBAI
          </Text>

          <Text
            style={{
              fontSize: 13,
              color: "#668074",
              textAlign: "center",
              marginTop: 8,
            }}
          >
            Enter your name to get started
          </Text>
        </View>

        {/* FORM */}
        <View
          style={{
            width: "100%",
            maxWidth: 500,
            alignSelf: "center",
            marginTop: 25,
          }}
        >
          {/* NAME TEXT BOX */}
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor="#8993A4"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            returnKeyType="done"
            style={{
              width: "100%",
              height: 52,
              backgroundColor: "#FFFFFF",
              borderWidth: 1,
              borderColor: "#CDEBD6",
              borderRadius: 12,
              paddingHorizontal: 15,
              fontSize: 14,
              color: "#172033",
            }}
          />

          {/* START EXPLORING */}
          <TouchableOpacity
            activeOpacity={0.8}
            disabled={!isNameValid}
            onPress={() => {
              if (isNameValid) {
                router.push({
                  pathname: "/dashboard",
                  params: {
                    name: name.trim(),
                  },
                });
              }
            }}
            style={{
              width: "100%",
              height: 52,
              backgroundColor: isNameValid ? "#36A85C" : "#A8CDB4",
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 14,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              🚀 Start Exploring
            </Text>
          </TouchableOpacity>

          {/* NO ACCOUNT */}
          <Text
            style={{
              textAlign: "center",
              color: "#668074",
              fontSize: 11,
              marginTop: 9,
            }}
          >
            No account required!
          </Text>
        </View>

        {/* FOOTER */}
        <View
          style={{
            marginTop: "auto",
            alignItems: "center",
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              color: "#36A85C",
              fontSize: 11,
              fontWeight: "bold",
              marginTop: 3,
            }}
          >
            SPOTIBAI • Student Companion
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
