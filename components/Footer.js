// components/Footer.js
import Link from 'next/link'; // Używamy Link, jeśli linki w stopce mają prowadzić do stron wewnętrznych

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-col">
          <strong>Początki z Treningiem Siłowym</strong>
          <p>Porady treningowe i plany dla początkujących.</p>
          <div style={{marginTop:'10px'}}>
            <a href="https://facebook.com" style={{marginRight:'6px'}}>Facebook</a>
            <a href="https://instagram.com" style={{marginRight:'6px'}}>Instagram</a>
            <a href="https://youtube.com">YouTube</a>
          </div>
        </div>

        <div className="footer-col">
          <div style={{fontWeight:700}}>Ważne linki</div>
          <ul>
            <li><Link href="/">Strona główna</Link></li>
            <li><Link href="/plany">Plany treningowe</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/kalkulatory">Kalkulatory</Link></li>
            <li><Link href="#">Polityka prywatności</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <div style={{fontWeight:700}}>Kontakt</div>
          <div className="small">kontakt@silny-start.pl<br/>+48 123 456 789</div>
        </div>
      </div>
      <div style={{maxWidth:'var(--max-width)',margin:'18px auto 0',padding:'0 16px',textAlign:'center'}}>
        <small>© 2025 Początki z Treningiem Siłowym. Wszelkie prawa zastrzeżone.</small>
      </div>
    </footer>
  );
}