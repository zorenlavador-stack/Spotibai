import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import InfoCard from "../components/infocard";
import Screen from "../components/screen";
import { Colors } from "../constants/colors";
import { assignments } from "../constants/data";

export default function Assignments() {
  // STATE: ids of the assignments the student marked as done
  const [doneIds, setDoneIds] = useState<string[]>([]);

  // EVENT: tapping a card adds or removes its id from the list
  const toggleDone = (id: string) => {
    setDoneIds((current) =>
      current.includes(id)
        ? current.filter((doneId) => doneId !== id)
        : [...current, id]
    );
  };

  return (
    <Screen
      title="Assignments"
      subtitle={`${doneIds.length} of ${assignments.length} done • tap to mark as done`}
    >
      {assignments.map((item) => {
        const isDone = doneIds.includes(item.id);

        return (
          <InfoCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            subtitle={item.subject}
            meta={`Due: ${item.due}`}
            done={isDone}
            onPress={() => toggleDone(item.id)}
            right={
              <Ionicons
                name={isDone ? "checkmark-circle" : "ellipse-outline"}
                size={26}
                color={isDone ? Colors.primary : Colors.inputBorder}
              />
            }
          />
        );
      })}
    </Screen>
  );
}
