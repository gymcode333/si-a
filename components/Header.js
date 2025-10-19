// components/Header.js (Uproszczony i czystszy)
// ... (cała logika useDarkMode)

export default function Header() {
  // ... (useMenuOpen i useDarkMode)

  return (
    <header role="banner" className="fixed-header"> {/* Dodajemy klasę dla lepszego stylizowania */}
      <div className="topbar">
        {/* LOGO I MARKA */}
        {/* ... */}
        
        {/* MENU TOGGLE */}
        {/* ... */}

        {/* NAWIGACJA */}
        {/* ... */}
        
        {/* PRZEŁĄCZNIK TRYBU CIEMNEGO */}
        {/* ... */}
      </div>
      {/* !!! WAŻNE: Sekcja HERO została stąd usunięta !!! 
        Teraz będzie tylko na stronie głównej.
      */}
    </header>
  );
}