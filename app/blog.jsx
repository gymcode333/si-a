// app/blog/page.js
import React from 'react';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <main>
      <section className="section hero-small">
        <div className="lead">
          <h1>Blog - Praktyczne Porady</h1>
          <p>Trening, dieta, suplementacja, motywacja — wszystko, czego potrzebujesz, aby Twoja przygoda z siłownią była skuteczna.</p>
        </div>
      </section>

      <section className="section blog-list">
        <div className="blog-grid wide-grid">
          
          <article className="blog-post card">
            <div className="blog-post-image" style={{backgroundColor: '#e0e7ff', height: '200px', borderRadius: '12px 12px 0 0'}}></div>
            <div className="blog-post-content">
                <h3 className="blog-title">Jak poprawnie wykonać przysiad (Squat)</h3>
                <div className="post-meta">
                    <span>Data: 15.01.2025</span> | <span>Kategoria: Technika</span>
                </div>
                <p className="short-text">Przysiad jest królem ćwiczeń. Upewnij się, że opanowałeś technikę, zanim dodasz duże obciążenie...</p>
                <Link href="#" className="read-more">Czytaj dalej</Link>
            </div>
          </article>

          <article className="blog-post card">
            <div className="blog-post-image" style={{backgroundColor: '#ffe0e7', height: '200px', borderRadius: '12px 12px 0 0'}}></div>
            <div className="blog-post-content">
                <h3 className="blog-title">5 błędów początkujących na siłowni</h3>
                <div className="post-meta">
                    <span>Data: 22.01.2025</span> | <span>Kategoria: Motywacja</span>
                </div>
                <p className="short-text">Unikaj tych popularnych pułapek, które spowalniają Twój progres i mogą prowadzić do kontuzji. Skup się na fundamentach...</p>
                <Link href="#" className="read-more">Czytaj dalej</Link>
            </div>
          </article>
          
          <article className="blog-post card">
            <div className="blog-post-image" style={{backgroundColor: '#efffe0', height: '200px', borderRadius: '12px 12px 0 0'}}></div>
            <div className="blog-post-content">
                <h3 className="blog-title">Rola białka w diecie siłowej</h3>
                <div className="post-meta">
                    <span>Data: 01.02.2025</span> | <span>Kategoria: Dieta</span>
                </div>
                <p className="short-text">Dlaczego białko jest najważniejszym makroskładnikiem dla osoby trenującej? Ile go jeść i z jakich źródeł...</p>
                <Link href="#" className="read-more">Czytaj dalej</Link>
            </div>
          </article>

        </div>
      </section>
    </main>
  );
}