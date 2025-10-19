// app/page.js
'use client'; 

import React, { useState } from 'react';
import Link from 'next/link';

// === KOMPONENT KALKULATORA BMI ===
function BMICalculator() {
  const [waga, setWaga] = useState('');
  const [wzrost, setWzrost] = useState('');
  const [bmi, setBmi] = useState(null);
  const [kategoria, setKategoria] = useState('');

  const obliczBMI = () => {
    const w = parseFloat(waga);
    const h = parseFloat(wzrost) / 100; // Konwersja cm na metry

    if (w > 0 && h > 0) {
      const wynik = w / (h * h);
      setBmi(wynik.toFixed(2));
      
      let kat = '';
      if (wynik < 18.5) kat = 'Niedowaga';
      else if (wynik < 24.9) kat = 'Waga prawidłowa';
      else if (wynik < 29.9) kat = 'Nadwaga';
      else kat = 'Otyłość';
      
      setKategoria(kat);
    } else {
      setBmi(null);
      setKategoria('Wprowadź poprawne dane.');
    }
  };

  return (
    <div className="section calc-section">
      <h2 className="section-title">Kalkulator BMI</h2>
      <p>Wskaźnik Masy Ciała (BMI) jest narzędziem pomagającym ocenić, czy Twoja waga jest w normie.</p>
      
      <div className="card calc-card">
        <div className="input-group">
          <label htmlFor="waga">Waga (kg)</label>
          <input 
            type="number" 
            id="waga" 
            placeholder="Np. 75" 
            value={waga} 
            onChange={(e) => setWaga(e.target.value)}
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="wzrost">Wzrost (cm)</label>
          <input 
            type="number" 
            id="wzrost" 
            placeholder="Np. 180" 
            value={wzrost} 
            onChange={(e) => setWzrost(e.target.value)}
          />
        </div>
        
        <button className="btn btn-primary" onClick={obliczBMI}>Oblicz BMI</button>
        
        {bmi && (
          <div id="wynik" className="result-box">
            <p>Twoje BMI wynosi: <strong>{bmi}</strong></p>
            <p>Kategoria: <strong>{kategoria}</strong></p>
          </div>
        )}
      </div>
    </div>
  );
}
// === KONIEC KOMPONENTU KALKULATORA ===


export default function HomePage() {
  return (
    <main>
      {/* 1. SEKCJA GŁÓWNA (PORADNIK) */}
      <section className="section article-summary">
        <div className="article-body">
          <h2 className="section-title">Co znajdziesz w poradniku?</h2>
          <p>Trening siłowy jest jednym z najlepszych sposobów na poprawę zdrowia, siły i sylwetki. Jako początkujący, możesz czuć się przytłoczony — ale nie martw się. Ten poradnik został stworzony, aby poprowadzić Cię od pierwszego kroku na siłowni do osiągnięcia stabilnych wyników.</p>
          <p><strong>Zacznij od wyboru swojego planu treningowego!</strong></p>
        </div>
        <div className="article-image" role="img" aria-label="Sylwetka mężczyzny trenującego siłowo"></div>
      </section>

      {/* 2. SEKCJA PLANÓW TRENINGOWYCH */}
      <section className="section plans-section">
        <h2 className="section-title">Gotowe Plany Treningowe</h2>
        <p className="section-subtitle">Wybierz plan dopasowany do Twojego poziomu i czasu, jaki możesz poświęcić na trening.</p>

        <div className="card-grid">
          {/* Karta 1: FBW */}
          <article className="plan-card">
            <h3>FBW (Full Body Workout)</h3>
            <p>Idealny dla **początkujących**, którzy chcą trenować 3 razy w tygodniu. Objętość jest rozłożona równomiernie na całe ciało.</p>
            <ul className="plan-details">
              <li>**Poziom:** Początkujący</li>
              <li>**Częstotliwość:** 3 dni w tygodniu</li>
            </ul>
            <Link href="/plany/fbw" className="btn btn-secondary">Zobacz plan FBW</Link>
          </article>

          {/* Karta 2: PPL */}
          <article className="plan-card">
            <h3>PPL (Push Pull Legs)</h3>
            <p>Dla **średnio zaawansowanych**. Umożliwia większą objętość, gdy masz czas trenować 4-6 razy w tygodniu.</p>
            <ul className="plan-details">
              <li>**Poziom:** Średnio zaawansowany</li>
              <li>**Częstotliwość:** 4-6 dni w tygodniu</li>
            </ul>
            <Link href="/plany/ppl" className="btn btn-secondary">Zobacz plan PPL</Link>
          </article>

          {/* Karta 3: SPLIT */}
          <article className="plan-card">
            <h3>SPLIT</h3>
            <p>Dla **zaawansowanych**, którzy chcą skupić się na konkretnych partiach mięśniowych.</p>
            <ul className="plan-details">
              <li>**Poziom:** Zaawansowany</li>
              <li>**Częstotliwość:** 3-5 dni w tygodniu</li>
            </ul>
            <Link href="/plany/split" className="btn btn-secondary">Zobacz plan Split</Link>
          </article>
        </div>
        
        <div style={{textAlign: 'center', marginTop: '30px'}}>
          <Link href="/plany" className="btn btn-primary">Wszystkie plany i porady</Link>
        </div>
      </section>

      {/* 3. KALKULATOR BMI */}
      <BMICalculator /> 

      {/* 4. SEKCJA BLOGA */}
      <section className="section blog-section">
        <h2 className="section-title">Najnowsze artykuły z Bloga</h2>
        <p className="section-subtitle">Praktyczne porady dotyczące diety, techniki i motywacji.</p>
        
        <div className="blog-grid">
          <article className="blog-post card">
            <h3 className="blog-title">Jak poprawnie wykonać przysiad (Squat)</h3>
            <p className="short-text">Przysiad jest królem ćwiczeń. Upewnij się, że opanowałeś technikę, zanim dodasz duże obciążenie...</p>
            <Link href="/blog" className="read-more">Czytaj dalej</Link>
          </article>
          
          <article className="blog-post card">
            <h3 className="blog-title">5 błędów początkujących na siłowni</h3>
            <p className="short-text">Unikaj tych popularnych pułapek, które spowalniają Twój progres i mogą prowadzić do kontuzji...</p>
            <Link href="/blog" className="read-more">Czytaj dalej</Link>
          </article>
        </div>

        <div style={{textAlign: 'center', marginTop: '30px'}}>
          <Link href="/blog" className="btn btn-primary">Przejdź do bloga</Link>
        </div>
      </section>

      <button 
        className="btn btn-ghost scroll-top" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
      >
        ↑ Wróć do góry
      </button>
    </main>
  );
}