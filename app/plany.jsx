// app/plany/page.js
import React from 'react';
import Link from 'next/link';

export default function PlanyPage() {
  return (
    <main>
      <section className="section hero-small">
        <div className="lead">
          <h2>Wybierz Swój Plan Treningowy</h2>
          <p>Oto gotowe do użycia plany, które pomogą Ci osiągnąć Twoje cele. Kliknij, aby zobaczyć szczegóły, progresję i porady dotyczące każdego z nich.</p>
        </div>
      </section>

      <section className="section plans-section">
        <h2 className="section-title">Dostępne Plany</h2>
        
        <div className="card-grid">
          {/* Karta 1: FBW */}
          <article className="plan-card">
            <h3>FBW (Full Body Workout)</h3>
            <p>Idealny dla **początkujących**, którzy chcą trenować 3 razy w tygodniu.</p>
            <ul className="plan-details">
              <li>**Poziom:** Początkujący</li>
              <li>**Częstotliwość:** 3 dni w tygodniu</li>
            </ul>
            <Link href="/plany/fbw" className="btn btn-secondary">Zobacz szczegółowy plan</Link>
          </article>

          {/* Karta 2: PPL */}
          <article className="plan-card">
            <h3>PPL (Push Pull Legs)</h3>
            <p>Dla **średnio zaawansowanych**. Umożliwia większą objętość, gdy masz czas trenować 4-6 razy w tygodniu.</p>
            <ul className="plan-details">
              <li>**Poziom:** Średnio zaawansowany</li>
              <li>**Częstotliwość:** 4-6 dni w tygodniu</li>
            </ul>
            <Link href="/plany/ppl" className="btn btn-secondary">Zobacz szczegółowy plan</Link>
          </article>

          {/* Karta 3: SPLIT */}
          <article className="plan-card">
            <h3>SPLIT</h3>
            <p>Dla **zaawansowanych**, którzy chcą skupić się na konkretnych partiach mięśniowych.</p>
            <ul className="plan-details">
              <li>**Poziom:** Zaawansowany</li>
              <li>**Częstotliwość:** 3-5 dni w tygodniu</li>
            </ul>
            <Link href="/plany/split" className="btn btn-secondary">Zobacz szczegółowy plan</Link>
          </article>
        </div>
      </section>
    </main>
  );
}