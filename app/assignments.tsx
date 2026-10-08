import { router } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

export default function Assignments() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#EAF6EF",
        padding: 20,
      }}
    >

     

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#172033",
        }}
      >
        Assignments
      </Text>

      <Text
        style={{
          color: "#668074",
          fontSize: 12,
          marginTop: 5,
          marginBottom: 18,
        }}
      >
        Check your assignments
      </Text>


     

      <View
        style={{
          backgroundColor: "#FFFFFF",
          padding: 12,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#CDEBD6",
          marginBottom: 8,
          flexDirection: "row",
          alignItems: "center",
        }}
      >

        <Text style={{ fontSize: 24 }}>
          📄
        </Text>

        <View
          style={{
            flex: 1,
            marginLeft: 10,
          }}
        >

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 12,
              color: "#172033",
            }}
          >
            Research Paper
          </Text>

          <Text
            style={{
              color: "#555",
              fontSize: 10,
              marginTop: 2,
            }}
          >
            English
          </Text>

          <Text
            style={{
              color: "#668074",
              fontSize: 9,
              marginTop: 3,
            }}
          >
            📅 Due: September 28, 2025
          </Text>

        </View>

      </View>




      <View
        style={{
          backgroundColor: "#FFFFFF",
          padding: 12,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#CDEBD6",
          marginBottom: 8,
          flexDirection: "row",
          alignItems: "center",
        }}
      >

        <Text style={{ fontSize: 24 }}>
          💻
        </Text>

        <View
          style={{
            flex: 1,
            marginLeft: 10,
          }}
        >

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 12,
              color: "#172033",
            }}
          >
            Programming Activity
          </Text>

          <Text
            style={{
              color: "#555",
              fontSize: 10,
              marginTop: 2,
            }}
          >
            Programming
          </Text>

          <Text
            style={{
              color: "#668074",
              fontSize: 9,
              marginTop: 3,
            }}
          >
            📅 Due: September 30, 2025
          </Text>

        </View>

      </View>


  

      <View
        style={{
          backgroundColor: "#FFFFFF",
          padding: 12,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#CDEBD6",
          marginBottom: 15,
          flexDirection: "row",
          alignItems: "center",
        }}
      >

        <Text style={{ fontSize: 24 }}>
          📝
        </Text>

        <View
          style={{
            flex: 1,
            marginLeft: 10,
          }}
        >

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 12,
              color: "#172033",
            }}
          >
            English Essay
          </Text>

          <Text
            style={{
              color: "#555",
              fontSize: 10,
              marginTop: 2,
            }}
          >
            English
          </Text>

          <Text
            style={{
              color: "#668074",
              fontSize: 9,
              marginTop: 3,
            }}
          >
            📅 Due: October 2, 2025
          </Text>

        </View>

      </View>


      {/* BACK */}

      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
        style={{
          backgroundColor: "#36A85C",
          padding: 12,
          borderRadius: 9,
          alignItems: "center",
        }}
      >

        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Back to Home
        </Text>

      </TouchableOpacity>

    </View>
  );
}