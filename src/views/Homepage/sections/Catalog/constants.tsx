import Image from "next/image";
import iconCorporales from "./assets/Corporales.svg";
import iconFaciales from "./assets/Faciales.svg";
import iconNutricion from "./assets/Nutricion.svg";
import iconTerapia from "./assets/Terapia.svg";

export const CATEGORIES = [
  {
    title: "Faciales",
    href: "/servicios?category=faciales",
    backgroundColor: "#571E10",
    icon: <Image src={iconFaciales} alt="Faciales" />,
  },
  {
    title: "Corporales",
    href: "/servicios?category=corporales",
    backgroundColor: "#571E10",
    icon: <Image src={iconCorporales} alt="Corporales" />,
  },
  {
    title: "Nutricion",
    href: "/servicios?category=nutricionales",
    backgroundColor: "#571E10",
    icon: <Image src={iconNutricion} alt="Nutricion" />,
  },
  {
    title: "Terapia",
    href: "/servicios?category=terapia",
    backgroundColor: "#571E10",
    icon: <Image src={iconTerapia} alt="Terapia" />,
  },
];
