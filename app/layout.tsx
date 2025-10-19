// app/layout.tsx
import { ReactNode } from "react";
import "./globals.css"; // globalne style
import { lato, montserrat } from "./fonts"; // dostosuj ścieżkę jeśli trzeba

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pl">
      <body className={`${lato.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}