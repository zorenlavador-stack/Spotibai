import { router, useLocalSearchParams } from "expo-router";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {

  const { name } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#E4F5EA",
        padding: 18,
      }}
    >

      {/* GREETING */}

      <View
        style={{
          backgroundColor: "#F4FBF6",
          padding: 15,
          borderRadius: 14,
          borderWidth: 1,
          borderColor: "#CDEBD6",
        }}
      >

        <Text
          style={{
            fontSize: 23,
            fontWeight: "bold",
            color: "#172033",
          }}
        >
          Hello, {name || "Student"}! 👋
        </Text>

        <Text
          style={{
            color: "#668074",
            fontSize: 12,
            marginTop: 4,
          }}
        >
          Keep going! Your goals are within reach.
        </Text>

      </View>


      {/* PROGRESS CARD */}

      <View
        style={{
          backgroundColor: "#CFEED9",
          marginTop: 15,
          padding: 15,
          borderRadius: 14,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#B8E2C6",
        }}
      >

        <View>

          <Text
            style={{
              color: "#207A43",
              fontWeight: "bold",
              fontSize: 14,
            }}
          >
            Small steps
          </Text>

          <Text
            style={{
              color: "#207A43",
              fontWeight: "bold",
              fontSize: 14,
            }}
          >
            make big progress.
          </Text>

          <Text
            style={{
              color: "#5D806B",
              fontSize: 10,
              marginTop: 5,
            }}
          >
            Keep learning every day!
          </Text>

        </View>

      </View>


      {/* QUICK ACCESS */}

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 10,
        }}
      >

        <View
          style={{
            width: 5,
            height: 20,
            backgroundColor: "#36A85C",
            borderRadius: 5,
            marginRight: 8,
          }}
        />

        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#172033",
          }}
        >
          Quick Access
        </Text>

      </View>


      {/* SUBJECTS */}

      <TouchableOpacity
        onPress={() => {
          router.push("/subjects");
        }}
        style={{
          height: 105,
          borderRadius: 14,
          overflow: "hidden",
          marginBottom: 10,
          borderWidth: 2,
          borderColor: "#C5E8D0",
        }}
      >

        <Image
          source={require("../assets/images/sub.jpg")}
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
            padding: 14,
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.20)",
          }}
        >

          <Text
            style={{
              fontSize: 25,
            }}
          >
            📖
          </Text>

          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#FFFFFF",
              marginTop: 5,
            }}
          >
            My Subjects
          </Text>

          <Text
            style={{
              fontSize: 10,
              color: "#FFFFFF",
              marginTop: 2,
            }}
          >
            View your subjects
          </Text>

        </View>

      </TouchableOpacity>


      {/* ASSIGNMENTS */}

      <TouchableOpacity
        onPress={() => {
          router.push("/assignments");
        }}
        style={{
          height: 105,
          borderRadius: 14,
          overflow: "hidden",
          marginBottom: 10,
          borderWidth: 2,
          borderColor: "#C5E8D0",
        }}
      >

        <Image
          source={require("../assets/images/ass.jpg")}
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
            padding: 14,
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.20)",
          }}
        >

          <Text
            style={{
              fontSize: 25,
            }}
          >
            📋
          </Text>

          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#FFFFFF",
              marginTop: 5,
            }}
          >
            Assignments
          </Text>

          <Text
            style={{
              fontSize: 10,
              color: "#FFFFFF",
              marginTop: 2,
            }}
          >
            Check your tasks
          </Text>

        </View>

      </TouchableOpacity>


      {/* SCHEDULE */}

      <TouchableOpacity
        onPress={() => {
          router.push("/schedule");
        }}
        style={{
          height: 105,
          borderRadius: 14,
          overflow: "hidden",
          marginBottom: 10,
          borderWidth: 2,
          borderColor: "#C5E8D0",
        }}
      >

        <Image
          source={require("../assets/images/sched.jpg")}
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
            padding: 14,
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.20)",
          }}
        >

          <Text
            style={{
              fontSize: 25,
            }}
          >
            📅
          </Text>

          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#FFFFFF",
              marginTop: 5,
            }}
          >
            Schedule
          </Text>

          <Text
            style={{
              fontSize: 10,
              color: "#FFFFFF",
              marginTop: 2,
            }}
          >
            See your class schedule
          </Text>

        </View>

      </TouchableOpacity>


      {/* DEVELOPERS */}

      <TouchableOpacity
        onPress={() => {
          router.push("/user");
        }}
        style={{
          height: 105,
          borderRadius: 14,
          overflow: "hidden",
          borderWidth: 2,
          borderColor: "#C5E8D0",
        }}
      >

        <Image
          source={require("../assets/images/devbg.jpg")}
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
            padding: 14,
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.20)",
          }}
        >

          <Text
            style={{
              fontSize: 25,
            }}
          >
            👤
          </Text>

          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#FFFFFF",
              marginTop: 5,
            }}
          >
            Developers
          </Text>

          <Text
            style={{
              fontSize: 10,
              color: "#FFFFFF",
              marginTop: 2,
            }}
          >
            Developer Profiles
          </Text>

        </View>

      </TouchableOpacity>

    </View>
  );
}