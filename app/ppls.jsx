// app/plany/ppl/page.js
import React from 'react';
import Link from 'next/link';

export default function PplPage() {
  return (
    <main className="plan-detail-page">
      <section className="section hero-small">
        <div className="lead">
          <Link href="/plany" className="btn-back">← Wróć do wszystkich planów</Link>
          <h1>Plan Treningowy PPL (Push Pull Legs)</h1>
          <p className="subtitle">Dla **średnio zaawansowanych**. Trenuj 4-6 razy w tygodniu, aby zwiększyć objętość i intensywność.</p>
        </div>
      </section>

      <section className="section plan-content">
        <h2>Harmonogram Treningów</h2>
        <p>Przykładowy tydzień (możliwość trenowania 4, 5 lub 6 razy):</p>

        <table>
          <tbody>
            <tr><th>Dzień</th><th>Trening</th><th>Opis</th></tr>
            <tr><td>Poniedziałek</td><td>PUSH (Pchanie)</td><td>Klatka piersiowa, barki (przód), triceps</td></tr>
            <tr><td>Wtorek</td><td>PULL (Ciągnięcie)</td><td>Plecy, barki (tył), biceps</td></tr>
            <tr><td>Środa</td><td>LEGS (Nogi)</td><td>Całe nogi, łydki, brzuch</td></tr>
            <tr><td>Czwartek</td><td>Przerwa / Cardio</td><td>—</td></tr>
            <tr><td>Piątek</td><td>PUSH (Pchanie)</td><td>Klatka piersiowa, barki (przód), triceps (inne ćwiczenia)</td></tr>
            <tr><td>Sobota</td><td>PULL (Ciągnięcie)</td><td>Plecy, barki (tył), biceps (inne ćwiczenia)</td></tr>
            <tr><td>Niedziela</td><td>Przerwa</td><td>—</td></tr>
          </tbody>
        </table>

        <div className="section tips">
          <h2>Przykładowe Ćwiczenia</h2>
          <div className="card-grid">
            <article className="card">
              <h3>PUSH (Pchanie)</h3>
              <ul>
                <li>Wyciskanie sztangi na płaskiej</li>
                <li>Wyciskanie hantli na skosie</li>
                <li>Wyciskanie żołnierskie (barki)</li>
                <li>Wyciskanie francuskie (triceps)</li>
              </ul>
            </article>
            <article className="card">
              <h3>PULL (Ciągnięcie)</h3>
              <ul>
                <li>Podciąganie / Lat Pulldown</li>
                <li>Wiosłowanie sztangą</li>
                <li>Face Pulls (tył barków)</li>
                <li>Uginanie ramion ze sztangą (biceps)</li>
              </ul>
            </article>
            <article className="card">
              <h3>LEGS (Nogi)</h3>
              <ul>
                <li>Przysiady</li>
                <li>Martwy ciąg (wersja rumuńska)</li>
                <li>Wykroki</li>
                <li>Wspięcia na palce</li>
              </ul>
            </article>
          </div>
        </div>

        <div style={{textAlign: 'center', marginTop: '40px'}}>
            <Link href="/plany" className="btn btn-primary">Wybierz inny plan</Link>
        </div>

      </section>
    </main>
  );
}