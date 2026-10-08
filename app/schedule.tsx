import { router } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

export default function Schedule() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#EAF6EF",
        padding: 20,
      }}
    >

      {/* TITLE */}

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#172033",
        }}
      >
        Schedule
      </Text>

      <Text
        style={{
          color: "#668074",
          fontSize: 12,
          marginTop: 5,
          marginBottom: 18,
        }}
      >
        Your class schedule
      </Text>


      {/* MONDAY */}

      <View
        style={{
          padding: 12,
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#CDEBD6",
          marginBottom: 8,
        }}
      >

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 13,
            color: "#0c0e0d",
          }}
        >
          Monday
        </Text>

        <Text
          style={{
            color: "#555",
            fontSize: 10,
            marginTop: 5,
          }}
        >
          8:00 AM - ITM112 LEC/LAB – Information Assurance & Security 2
        </Text>

      </View>


      {/* TUESDAY */}

      <View
        style={{
          padding: 12,
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#CDEBD6",
          marginBottom: 8,
        }}
      >

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 13,
            color: "#0c0e0d",
          }}
        >
          Tuesday
        </Text>

        <Text
          style={{
            color: "#555",
            fontSize: 10,
            marginTop: 5,
          }}
        >
          9:00 AM - ITM110 LEC/LAB – System Administration and Maintenance
        </Text>

      </View>


      {/* WEDNESDAY */}

      <View
        style={{
          padding: 12,
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#CDEBD6",
          marginBottom: 8,
        }}
      >

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 13,
            color: "#0c0e0d",
          }}
        >
          Wednesday
        </Text>

        <Text
          style={{
            color: "#555",
            fontSize: 10,
            marginTop: 5,
          }}
        >
          10:00 AM - ITM100 – Capstone Project 1 / IT Project 1
        </Text>

      </View>


      {/* THURSDAY - LOGIC */}

      <View
        style={{
          padding: 12,
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#CDEBD6",
          marginBottom: 8,
        }}
      >

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 13,
            color: "#0c0e0d",
          }}
        >
          Thursday
        </Text>

        <Text
          style={{
            color: "#555",
            fontSize: 10,
            marginTop: 5,
          }}
        >
          1:00 PM - Humanities 102 – Logic
        </Text>

      </View>


      {/* THURSDAY - POLITICS */}

      <View
        style={{
          padding: 12,
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#CDEBD6",
          marginBottom: 8,
        }}
      >

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 13,
            color: "#0c0e0d",
          }}
        >
          Friday
        </Text>

        <Text
          style={{
            color: "#555",
            fontSize: 10,
            marginTop: 5,
          }}
        >
          1:00 PM - Soc. Sci. 104 – Politics & Governance (w/ Phil. Cons.)
        </Text>

      </View>


      {/* THURSDAY - PROGRAMMING */}

      <View
        style={{
          padding: 12,
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#CDEBD6",
          marginBottom: 15,
        }}
      >

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 13,
            color: "#0c0e0d",
          }}
        >
          Saturday
        </Text>

        <Text
          style={{
            color: "#555",
            fontSize: 10,
            marginTop: 5,
          }}
        >
          1:00 PM - FreeElec. 104 LEC/LAB – Integrative Programming & Technologies 2
        </Text>

      </View>


      {/* BACK BUTTON */}

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