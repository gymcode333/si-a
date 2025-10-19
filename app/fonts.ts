// app/fonts.ts
import { Lato, Montserrat } from "next/font/google";

export const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // określamy wagi
  variable: "--font-lato",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // wagi
  variable: "--font-montserrat",
});