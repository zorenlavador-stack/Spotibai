import { ImageSourcePropType } from "react-native";

// ---------- SUBJECTS ----------
export type Subject = {
  id: string;
  icon: string;
  code: string;
  title: string;
  teacher: string;
};

export const subjects: Subject[] = [
  {
    id: "itm112",
    icon: "📚",
    code: "ITM112 LEC/LAB",
    title: "Information Assurance & Security 2",
    teacher: "Mr. John Kevin Enriquez",
  },
  {
    id: "itm110",
    icon: "💻",
    code: "ITM110 LEC/LAB",
    title: "System Administration and Maintenance",
    teacher: "Mr. Christorey Lato",
  },
  {
    id: "itm100",
    icon: "💻",
    code: "ITM100",
    title: "Capstone Project 1 / IT Project 1",
    teacher: "Mr. Jomar Lavador",
  },
  {
    id: "hum102",
    icon: "🧠",
    code: "Humanities 102",
    title: "Logic",
    teacher: "Ms. Cathlyn Perez",
  },
  {
    id: "soc104",
    icon: "🏛️",
    code: "Soc. Sci. 104",
    title: "Politics & Governance",
    teacher: "Mr. Thadeus Cuizon",
  },
  {
    id: "free104",
    icon: "💻",
    code: "FreeElec. 104 LEC/LAB",
    title: "Integrative Programming & Technologies 2",
    teacher: "Mr. Herold Omecillo",
  },
];

// ---------- ASSIGNMENTS ----------
export type Assignment = {
  id: string;
  icon: string;
  title: string;
  subject: string;
  due: string;
};

export const assignments: Assignment[] = [
  {
    id: "a1",
    icon: "📄",
    title: "Research Paper",
    subject: "English",
    due: "September 28, 2025",
  },
  {
    id: "a2",
    icon: "💻",
    title: "Programming Activity",
    subject: "Programming",
    due: "September 30, 2025",
  },
  {
    id: "a3",
    icon: "📝",
    title: "English Essay",
    subject: "English",
    due: "October 2, 2025",
  },
];

// ---------- SCHEDULE ----------
export type ClassSession = {
  id: string;
  day: string;
  time: string;
  code: string;
  title: string;
};

export const schedule: ClassSession[] = [
  {
    id: "mon",
    day: "Monday",
    time: "8:00 AM",
    code: "ITM112 LEC/LAB",
    title: "Information Assurance & Security 2",
  },
  {
    id: "tue",
    day: "Tuesday",
    time: "9:00 AM",
    code: "ITM110 LEC/LAB",
    title: "System Administration and Maintenance",
  },
  {
    id: "wed",
    day: "Wednesday",
    time: "10:00 AM",
    code: "ITM100",
    title: "Capstone Project 1 / IT Project 1",
  },
  {
    id: "thu",
    day: "Thursday",
    time: "1:00 PM",
    code: "Humanities 102",
    title: "Logic",
  },
  {
    id: "fri",
    day: "Friday",
    time: "1:00 PM",
    code: "Soc. Sci. 104",
    title: "Politics & Governance (w/ Phil. Cons.)",
  },
  {
    id: "sat",
    day: "Saturday",
    time: "1:00 PM",
    code: "FreeElec. 104 LEC/LAB",
    title: "Integrative Programming & Technologies 2",
  },
];

// ---------- DASHBOARD QUICK ACCESS ----------
export type QuickAccessItem = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  href: string;
  image: ImageSourcePropType;
};

export const quickAccess: QuickAccessItem[] = [
  {
    id: "subjects",
    icon: "📖",
    title: "My Subjects",
    subtitle: "View your subjects",
    href: "/subjects",
    image: require("../assets/images/sub.jpg"),
  },
  {
    id: "assignments",
    icon: "📋",
    title: "Assignments",
    subtitle: "Check your tasks",
    href: "/assignments",
    image: require("../assets/images/ass.jpg"),
  },
  {
    id: "schedule",
    icon: "📅",
    title: "Schedule",
    subtitle: "See your class schedule",
    href: "/schedule",
    image: require("../assets/images/sched.jpg"),
  },
  {
    id: "developer",
    icon: "👤",
    title: "Developers",
    subtitle: "Developer profiles",
    href: "/developer",
    image: require("../assets/images/devbg.jpg"),
  },
];
