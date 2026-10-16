import InfoCard from "../components/infocard";
import Screen from "../components/screen";
import { schedule } from "../constants/data";

export default function Schedule() {
  return (
    <Screen title="Schedule" subtitle="Your class schedule">
      {schedule.map((session) => (
        <InfoCard
          key={session.id}
          title={session.day}
          subtitle={session.title}
          meta={`${session.time} • ${session.code}`}
        />
      ))}
    </Screen>
  );
}
