import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function User() {

  const [selectedProfile, setSelectedProfile] = useState("");

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
          fontSize: 28,
          fontWeight: "bold",
          color: "#172033",
          textAlign: "center",
        }}
      >
        DEVELOPERS
      </Text>

      <Text
        style={{
          color: "#668074",
          fontSize: 14,
          marginTop: 5,
          marginBottom: 25,
          textAlign: "center",
        }}
      >
        Developer profiles
      </Text>


      {/* ================= TOP ROW ================= */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >

        {/* KENJI */}

        <TouchableOpacity
          onPress={() => {
            setSelectedProfile("Kenji");
          }}
          style={{
            width: "45%",
            backgroundColor:
              selectedProfile === "Kenji"
                ? "#E1F5E8"
                : "#FFFFFF",
            borderRadius: 18,
            padding: 20,
            alignItems: "center",
            borderWidth: 1,
            borderColor:
              selectedProfile === "Kenji"
                ? "#36A85C"
                : "#CDEBD6",
            marginRight: 7,
          }}
        >

          <Image
            source={require("../assets/images/kenj.jpg")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
            resizeMode="cover"
          />

          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 14,
              color: "#172033",
              textAlign: "center",
            }}
          >
            Dyn Kenji Mata
          </Text>

          <Text
            style={{
              color: "#668074",
              fontSize: 12,
              marginTop: 5,
            }}
          >
            Student
          </Text>

          <Text
            style={{
              color: "#21864A",
              fontSize: 11,
              fontWeight: "bold",
              marginTop: 7,
            }}
          >
            BSIT • 4th Year
          </Text>

        </TouchableOpacity>


        {/* MARIA */}

        <TouchableOpacity
          onPress={() => {
            setSelectedProfile("Maria");
          }}
          style={{
            width: "45%",
            backgroundColor:
              selectedProfile === "Maria"
                ? "#E1F5E8"
                : "#FFFFFF",
            borderRadius: 18,
            padding: 20,
            alignItems: "center",
            borderWidth: 1,
            borderColor:
              selectedProfile === "Maria"
                ? "#36A85C"
                : "#CDEBD6",
            marginLeft: 7,
          }}
        >

          <Image
            source={require("../assets/images/manco.jpg")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
            resizeMode="cover"
          />

          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 14,
              color: "#172033",
              textAlign: "center",
            }}
          >
            Gabriel Manco
          </Text>

          <Text
            style={{
              color: "#668074",
              fontSize: 12,
              marginTop: 5,
            }}
          >
            Student
          </Text>

          <Text
            style={{
              color: "#21864A",
              fontSize: 11,
              fontWeight: "bold",
              marginTop: 7,
            }}
          >
            BSED • 4th Year
          </Text>

        </TouchableOpacity>

      </View>


      {/* ================= BOTTOM ROW ================= */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 18,
        }}
      >

        {/* JOHN */}

        <TouchableOpacity
          onPress={() => {
            setSelectedProfile("John");
          }}
          style={{
            width: "45%",
            backgroundColor:
              selectedProfile === "John"
                ? "#E1F5E8"
                : "#FFFFFF",
            borderRadius: 18,
            padding: 20,
            alignItems: "center",
            borderWidth: 1,
            borderColor:
              selectedProfile === "John"
                ? "#36A85C"
                : "#CDEBD6",
            marginRight: 7,
          }}
        >

          <Image
            source={require("../assets/images/zoren.jpg")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
            resizeMode="cover"
          />

          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 14,
              color: "#172033",
              textAlign: "center",
            }}
          >
            Jurengel Lavador
          </Text>

          <Text
            style={{
              color: "#668074",
              fontSize: 12,
              marginTop: 5,
            }}
          >
            Student
          </Text>

          <Text
            style={{
              color: "#21864A",
              fontSize: 11,
              fontWeight: "bold",
              marginTop: 7,
            }}
          >
            BSCS • 4th Year
          </Text>

        </TouchableOpacity>


        {/* ANA */}

        <TouchableOpacity
          onPress={() => {
            setSelectedProfile("Ana");
          }}
          style={{
            width: "45%",
            backgroundColor:
              selectedProfile === "Ana"
                ? "#E1F5E8"
                : "#FFFFFF",
            borderRadius: 18,
            padding: 20,
            alignItems: "center",
            borderWidth: 1,
            borderColor:
              selectedProfile === "Ana"
                ? "#36A85C"
                : "#CDEBD6",
            marginLeft: 7,
          }}
        >

          <Image
            source={require("../assets/images/kitch.jpg")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
            resizeMode="cover"
          />

          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 14,
              color: "#172033",
              textAlign: "center",
            }}
          >
            Kate Franz Barina
          </Text>

          <Text
            style={{
              color: "#668074",
              fontSize: 12,
              marginTop: 5,
            }}
          >
            Student
          </Text>

          <Text
            style={{
              color: "#21864A",
              fontSize: 11,
              fontWeight: "bold",
              marginTop: 7,
            }}
          >
            BSIT • 4th Year
          </Text>

        </TouchableOpacity>

      </View>


      {/* ================= INFORMATION ================= */}

      {selectedProfile === "Kenji" && (
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 18,
            padding: 22,
            marginTop: 22,
            borderWidth: 1,
            borderColor: "#CDEBD6",
          }}
        >

          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "#172033",
              marginBottom: 15,
            }}
          >
            Dyn Kenji Mata
          </Text>

          <Text style={{ fontSize: 14 }}>
            🎓 Student ID: 2024-12345
          </Text>

          <Text
            style={{
              fontSize: 14,
              marginTop: 9,
            }}
          >
            📚 Course: BSIT
          </Text>

          <Text
            style={{
              fontSize: 14,
              marginTop: 9,
            }}
          >
            📖 Year Level: 4th Year
          </Text>

          <Text
            style={{
              fontSize: 14,
              marginTop: 9,
            }}
          >
            🏫 Section: C
          </Text>

          <Text
            style={{
              fontSize: 14,
              marginTop: 9,
            }}
          >
            📧 Email: dynkenji@email.com
          </Text>

        </View>
      )}


      {selectedProfile === "Maria" && (
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 18,
            padding: 22,
            marginTop: 22,
            borderWidth: 1,
            borderColor: "#CDEBD6",
          }}
        >

          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "#172033",
              marginBottom: 15,
            }}
          >
            Gabriel Manco
          </Text>

          <Text style={{ fontSize: 14 }}>
            🎓 Student ID: 2024-12346
          </Text>

          <Text
            style={{
              fontSize: 14,
              marginTop: 9,
            }}
          >
            📚 Course: BSIT
          </Text>

          <Text
            style={{
              fontSize: 14,
              marginTop: 9,
            }}
          >
            📖 Year Level: 4th Year
          </Text>

          <Text
            style={{
              fontSize: 14,
              marginTop: 9,
            }}
          >
            🏫 Section: C
          </Text>

          <Text
            style={{
              fontSize: 14,
              marginTop: 9,
            }}
          >
            📧 Email: gabrielmanco@email.com
          </Text>

        </View>
      )}


      {selectedProfile === "John" && (
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 18,
            padding: 22,
            marginTop: 22,
            borderWidth: 1,
            borderColor: "#CDEBD6",
          }}
        >

          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "#172033",
              marginBottom: 15,
            }}
          >
            Jurengel Lavador
          </Text>

          <Text style={{ fontSize: 14 }}>
            🎓 Student ID: 2024-12347
          </Text>

          <Text
            style={{
              fontSize: 14,
              marginTop: 9,
            }}
          >
            📚 Course: BSIT
          </Text>

          <Text
            style={{
              fontSize: 14,
              marginTop: 9,
            }}
          >
            📖 Year Level: 4th Year
          </Text>

          <Text
            style={{
              fontSize: 14,
              marginTop: 9,
            }}
          >
            🏫 Section: C
          </Text>

          <Text
            style={{
              fontSize: 14,
              marginTop: 9,
            }}
          >
            📧 Email: jurengel@email.com
          </Text>

        </View>
      )}


      {selectedProfile === "Ana" && (
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 18,
            padding: 22,
            marginTop: 22,
            borderWidth: 1,
            borderColor: "#CDEBD6",
          }}
        >

          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "#172033",
              marginBottom: 15,
            }}
          >
            Kate Franz Barina
          </Text>

          <Text style={{ fontSize: 14 }}>
            🎓 Student ID: 2024-12348
          </Text>

          <Text
            style={{
              fontSize: 14,
              marginTop: 9,
            }}
          >
            📚 Course: BSIT
          </Text>

          <Text
            style={{
              fontSize: 14,
              marginTop: 9,
            }}
          >
            📖 Year Level: 4th Year
          </Text>

          <Text
            style={{
              fontSize: 14,
              marginTop: 9,
            }}
          >
            🏫 Section: C
          </Text>

          <Text
            style={{
              fontSize: 14,
              marginTop: 9,
            }}
          >
            📧 Email: katefranz@email.com
          </Text>

        </View>
      )}


      {/* BACK BUTTON */}

      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
        style={{
          backgroundColor: "#36A85C",
          padding: 15,
          borderRadius: 10,
          alignItems: "center",
          marginTop: 22,
          alignSelf: "center",
          width: "65%",
        }}
      >

        <Text
          style={{
            color: "#FFFFFF",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Back to Home
        </Text>

      </TouchableOpacity>

    </View>
  );
}
