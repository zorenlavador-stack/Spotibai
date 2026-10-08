import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function Subjects() {
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
        My Subjects
      </Text>

      <Text
        style={{
          color: "#668074",
          fontSize: 12,
          marginTop: 5,
          marginBottom: 18,
        }}
      >
        Your current subjects
      </Text>


      {/* ITM112 */}

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
        <Text style={{ fontSize: 24 }}>📚</Text>

        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 12 }}>
            ITM112 LEC/LAB
          </Text>

          <Text style={{ fontSize: 10, color: "#555" }}>
            Information Assurance & Security 2
          </Text>

          <Text style={{ fontSize: 9, color: "#668074", marginTop: 3 }}>
            Teacher: Mrs. Santos
          </Text>
        </View>

        <Text style={{ fontSize: 20, color: "#36A85C" }}>›</Text>
      </View>


      {/* ITM110 */}

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
        <Text style={{ fontSize: 24 }}>💻</Text>

        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 12 }}>
            ITM110 LEC/LAB
          </Text>

          <Text style={{ fontSize: 10, color: "#555" }}>
            System Administration and Maintenance
          </Text>

          <Text style={{ fontSize: 9, color: "#668074", marginTop: 3 }}>
            Teacher: Mr. Reyes
          </Text>
        </View>

        <Text style={{ fontSize: 20, color: "#36A85C" }}>›</Text>
      </View>


      {/* ITM100 */}

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
        <Text style={{ fontSize: 24 }}>🎓</Text>

        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 12 }}>
            ITM100
          </Text>

          <Text style={{ fontSize: 10, color: "#555" }}>
            Capstone Project 1 / IT Project 1
          </Text>

          <Text style={{ fontSize: 9, color: "#668074", marginTop: 3 }}>
            Teacher: Ms. Garcia
          </Text>
        </View>

        <Text style={{ fontSize: 20, color: "#36A85C" }}>›</Text>
      </View>


      {/* HUMANITIES */}

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
        <Text style={{ fontSize: 24 }}>🧠</Text>

        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 12 }}>
            Humanities 102
          </Text>

          <Text style={{ fontSize: 10, color: "#555" }}>
            Logic
          </Text>

          <Text style={{ fontSize: 9, color: "#668074", marginTop: 3 }}>
            Teacher: Mr. Dela Cruz
          </Text>
        </View>

        <Text style={{ fontSize: 20, color: "#36A85C" }}>›</Text>
      </View>


      {/* POLITICS */}

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
        <Text style={{ fontSize: 24 }}>🏛️</Text>

        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 12 }}>
            Soc. Sci. 104
          </Text>

          <Text style={{ fontSize: 10, color: "#555" }}>
            Politics & Governance
          </Text>

          <Text style={{ fontSize: 9, color: "#668074", marginTop: 3 }}>
            Teacher: Mr. Dela Cruz
          </Text>
        </View>

        <Text style={{ fontSize: 20, color: "#36A85C" }}>›</Text>
      </View>


      {/* FREE ELECTIVE */}

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
        <Text style={{ fontSize: 24 }}>💻</Text>

        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 12 }}>
            FreeElec. 104 LEC/LAB
          </Text>

          <Text style={{ fontSize: 10, color: "#555" }}>
            Integrative Programming & Technologies 2
          </Text>

          <Text style={{ fontSize: 9, color: "#668074", marginTop: 3 }}>
            Teacher: Mr. Dela Cruz
          </Text>
        </View>

        <Text style={{ fontSize: 20, color: "#36A85C" }}>›</Text>
      </View>


      {/* BACK */}

      <TouchableOpacity
        onPress={() => router.back()}
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