import { router } from "expo-router";
import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Welcome() {

  const [name, setName] = useState("");

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#EAF6EF",
        padding: 20,
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
            marginTop: 7,
          }}
        >
          Enter your name to get started
        </Text>

      </View>


      {/* NAME TEXT BOX */}

      <TextInput
        placeholder="Enter your name"
        placeholderTextColor="#8993A4"
        value={name}
        onChangeText={setName}
        style={{
          backgroundColor: "#FFFFFF",
          borderWidth: 1,
          borderColor: "#CDEBD6",
          borderRadius: 12,
          padding: 14,
          marginTop: 20,
          fontSize: 14,
          color: "#172033",
        }}
      />


      {/* START EXPLORING */}

      <TouchableOpacity
        onPress={() => {
          if (name.trim() !== "") {
            router.push({
              pathname: "/dashboard",
              params: {
                name: name,
              },
            });
          }
        }}
        style={{
          backgroundColor:
            name.trim() !== ""
              ? "#36A85C"
              : "#A8CDB4",
          padding: 15,
          borderRadius: 12,
          alignItems: "center",
          marginTop: 15,
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


      <Text
        style={{
          textAlign: "center",
          color: "#668074",
          fontSize: 11,
          marginTop: 8,
        }}
      >
        No account required!
      </Text>


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
            color: "#668074",
            fontSize: 10,
          }}
        >
          Created for students
        </Text>

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
  );
}