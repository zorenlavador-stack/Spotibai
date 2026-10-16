import { ImageSourcePropType } from "react-native";

// Shape of one developer profile.
export type Developer = {
  id: string;
  name: string;
  course: string;
  yearLevel: string;
  studentId: string;
  section: string;
  email: string;
  photo: ImageSourcePropType;
};

// All developer info here. To add or edit a member and change this list only.
export const developers: Developer[] = [
  {
    id: "kenji",
    name: "Dyn Kenji Mata",
    course: "BSIT",
    yearLevel: "4th Year",
    studentId: "2026-12345",
    section: "C",
    email: "dynkenji@email.com",
    photo: require("../assets/images/kenj.jpg"),
  },
  {
    id: "gabriel",
    name: "Gabriel Manco",
    course: "BSIT",
    yearLevel: "4th Year",
    studentId: "2026-12346",
    section: "C",
    email: "gabrielmanco@email.com",
    photo: require("../assets/images/manco.jpg"),
  },
  {
    id: "jurengel",
    name: "Jurengel Lavador",
    course: "BSIT",
    yearLevel: "4th Year",
    studentId: "2026-12347",
    section: "C",
    email: "jurengel@email.com",
    photo: require("../assets/images/zoren.jpg"),
  },
  {
    id: "kate",
    name: "Kate Franz Barina",
    course: "BSIT",
    yearLevel: "4th Year",
    studentId: "2026-12348",
    section: "C",
    email: "katefranz@email.com",
    photo: require("../assets/images/kitch.jpg"),
  },
];
