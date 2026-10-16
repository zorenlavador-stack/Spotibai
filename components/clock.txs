import { useEffect, useState } from "react";
import { Text } from "react-native";
import { Colors } from "../constants/colors";

// Shows the current date and time and updates every second.
export default function Clock() {
  // STATE: the current date/time. Changing it re-renders the text.
  const [now, setNow] = useState(new Date());

  // SIDE EFFECT: start a timer after the first render.
  // [] = run once, when the component first appears on screen.
  useEffect(() => {
    const timerId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    // CLEANUP: stop the timer when the component is removed,
    // so it doesn't keep running in the background.
    return () => clearInterval(timerId);
  }, []);

  const date = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const time = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <Text
      style={{
        fontSize: 13,
        color: Colors.pillText,
        fontWeight: "600",
        marginTop: 8,
      }}
    >
      {date} • {time}
    </Text>
  );
}
