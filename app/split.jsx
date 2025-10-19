// app/plany/split/page.js
import React from 'react';
import Link from 'next/link';

export default function SplitPage() {
  return (
    <main className="plan-detail-page">
      <section className="section hero-small">
        <div className="lead">
          <Link href="/plany" className="btn-back">← Wróć do wszystkich planów</Link>
          <h1>Plan Treningowy SPLIT</h1>
          <p className="subtitle">Dla **zaawansowanych** – skupienie na jednej lub dwóch partiach mięśniowych na sesję. Wymaga dobrej znajomości techniki.</p>
        </div>
      </section>

      <section className="section plan-content">
        <h2>Przykładowy podział 5-dniowy</h2>
        <p>Każda sesja poświęcona jednej lub dwóm partiom mięśniowym.</p>

        <table>
          <tbody>
            <tr><th>Dzień</th><th>Partie</th><th>Ćwiczenia</th></tr>
            <tr><td>Poniedziałek</td><td>Klatka + Triceps</td><td>Wyciskanie sztangi, Rozpiętki, Pompki na poręczach, Wyciskanie francuskie</td></tr>
            <tr><td>Wtorek</td><td>Plecy + Biceps</td><td>Podciąganie, Wiosłowanie sztangą, Martwy ciąg, Uginanie ramion</td></tr>
            <tr><td>Środa</td><td>Przerwa / cardio</td><td>—</td></tr>
            <tr><td>Czwartek</td><td>Nogi</td><td>Przysiad, Wykroki, Hip Thrust, Wspięcia na palce</td></tr>
            <tr><td>Piątek</td><td>Barki + Brzuch</td><td>OHP, Unoszenie hantli bokiem, Face Pulls, Plank, Unoszenie nóg</td></tr>
          </tbody>
        </table>
        
        <div className="section tips">
            <h3>Zalety i Wady</h3>
            <ul>
                <li>**Zaleta:** Duża objętość dla każdej partii raz w tygodniu (dla zaawansowanych).</li>
                <li>**Wada:** Mniejsza częstotliwość (dla początkujących lepszy jest FBW).</li>
            </ul>
        </div>

        <div style={{textAlign: 'center', marginTop: '40px'}}>
            <Link href="/plany" className="btn btn-primary">Wybierz inny plan</Link>
        </div>
      </section>
    </main>
  );
}