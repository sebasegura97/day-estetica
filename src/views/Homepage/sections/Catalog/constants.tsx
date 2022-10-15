import Image from "next/image";
import iconCorporales from "./assets/Corporales.svg";
import iconFaciales from "./assets/Faciales.svg";
import iconNutricion from "./assets/Nutricion.svg";
import iconTerapia from "./assets/Terapia.svg";

export const CATEGORIES = [
  {
    title: "Faciales",
    slug: "/servicios/faciales",
    backgroundColor: "#571E10",
    icon: <Image src={iconFaciales} alt="Faciales" />,
  },
  {
    title: "Corporales",
    slug: "/servicios/corporales",
    backgroundColor: "#571E10",
    icon: <Image src={iconCorporales} alt="Corporales" />,
  },
  {
    title: "Nutricion",
    slug: "/servicios/nutricionales",
    backgroundColor: "#571E10",
    icon: <Image src={iconNutricion} alt="Nutricion" />,
  },
  {
    title: "Terapia",
    slug: "/servicios/terapia",
    backgroundColor: "#571E10",
    icon: <Image src={iconTerapia} alt="Terapia" />,
  },
];
