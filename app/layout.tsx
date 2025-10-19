// app/layout.js (Zaktualizowana wersja)
import './globals.css';
import { Lato, Montserrat } from 'next/font/google'; 
import Header from '../components/Header'; // Importujemy nowy komponent Header
import Footer from '../components/Footer'; // Importujemy nowy komponent Footer

// Definicje czcionek (jak w Kroku 3)
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato', 
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-montserrat', 
});

export const metadata = {
  title: 'Początki z Treningiem Siłowym – Kompletny poradnik',
  description: 'Kompletny poradnik dla początkujących w treningu siłowym – plany treningowe, dieta, kalkulatory BMI i kalorii, suplementy. Zacznij budować formę już dziś!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${lato.variable} ${montserrat.variable}`}>
        <Header /> {/* Nagłówek jest zawsze widoczny */}
        <main style={{ flex: 1 }}>{children}</main> {/* children to treść danej podstrony (np. page.js) */}
        <Footer /> {/* Stopka jest zawsze widoczna */}
        {/* Dodaj tutaj przycisk "Wróć do góry", jeśli chcesz go przenieść globalnie */}
      </body>
    </html>
  );
}