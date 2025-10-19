// app/plany/fbw/page.js
import React from 'react';
import Link from 'next/link';

export default function FbwPage() {
  return (
    <main className="plan-detail-page">
      <section className="section hero-small">
        <div className="lead">
          <Link href="/plany" className="btn-back">← Wróć do wszystkich planów</Link>
          <h1>Plan Treningowy FBW (Full Body Workout)</h1>
          <p className="subtitle">Idealny dla **początkujących** – trenujesz całe ciało 3 razy w tygodniu (np. Poniedziałek, Środa, Piątek).</p>
        </div>
      </section>

      <section className="section plan-content">
        
        <div className="plan-schedule">
          <h2>Harmonogram Treningów (Split A, B, C)</h2>
          <p>Wykonuj trening A, B i C w kolejności, z dniem wolnym pomiędzy nimi.</p>

          <article className="training-day card">
            <h3>Dzień A</h3>
            <ol className="exercise-list">
              <li>Wyciskanie sztangi na płaskiej</li>
              <li>Suwnica</li>
              <li>Wiosłowanie</li>
              <li>Francuskie wyciskanie</li>
              <li>Wznosy na tył barków</li>
            </ol>
          </article>
          
          <article className="training-day card">
            <h3>Dzień B</h3>
            <ol className="exercise-list">
              <li>Wyciskanie żołnierskie hantlami siedząc</li>
              <li>Martwy ciąg</li>
              <li>Podciąganie podchwytem</li>
              <li>Wznosy na bok barków</li>
              <li>Młotki biceps</li>
            </ol>
          </article>

          <article className="training-day card">
            <h3>Dzień C</h3>
            <ol className="exercise-list">
              <li>Wyciskanie hantli na skosie</li>
              <li>Przysiady</li>
              <li>Butterfly (rozpiętki na maszynie)</li>
              <li>Wiosłowanie szeroko</li>
              <li>Biceps na ławie</li>
              <li>Triceps wyciąg</li>
            </ol>
          </article>
        </div>

        <div className="section">
            <h2>Objętość tygodniowa (Serie robocze)</h2>
            <p>Minimalna sugerowana ilość serii roboczych:</p>
            <ul className="stats-list">
                <li>Nogi: **8** serii</li>
                <li>Klata: **12** serii</li>
                <li>Plecy: **12** serii</li>
                <li>Barki: **12** serii</li>
                <li>Biceps: **4** serie</li>
                <li>Triceps: **4** serie</li>
                <li>Brzuch: **Kółko** (w domu)</li>
            </ul>
        </div>
        
        <div className="section tips">
            <h3>Ważne porady</h3>
            <ul>
                <li>Używaj **progresji ciężaru** co tydzień.</li>
                <li>Wykonuj **4 serie** każdego ćwiczenia w zakresie **8-12 powtórzeń**.</li>
                <li>Zacznij od lekkiego ciężaru, aby opanować **technikę**.</li>
            </ul>
        </div>

        <div style={{textAlign: 'center', marginTop: '40px'}}>
            <Link href="/plany" className="btn btn-primary">Wybierz inny plan</Link>
        </div>

      </section>
    </main>
  );
}