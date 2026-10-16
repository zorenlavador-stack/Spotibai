import InfoCard from "../components/infocard";
import Screen from "../components/screen";
import { subjects } from "../constants/data";

export default function Subjects() {
  return (
    <Screen title="My Subjects" subtitle="Your current subjects">
      {subjects.map((subject) => (
        <InfoCard
          key={subject.id}
          icon={subject.icon}
          title={subject.code}
          subtitle={subject.title}
          meta={`Teacher: ${subject.teacher}`}
        />
      ))}
    </Screen>
  );
}
