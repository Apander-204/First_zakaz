import React, { useEffect } from 'react';
import './index.css';

function App() {
  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    const sections = document.querySelectorAll(".hidden-section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="App">
      <header className="hero">
        <div className="hero-content">
          <h1>Боты, которые оживают в диалоге</h1>
          <p>Искусственный интеллект, который адаптируется, учится и взаимодействует с вами, как настоящий собеседник.</p>
        </div>
      </header>

      <div className="buttons">
        <button onClick={() => scrollToSection('about')}>Узнать больше</button>
        <button onClick={() => scrollToSection('price')}>Прайс</button>
        <button className="yellow-outline" onClick={() => window.location.href='https://t.me/BeregFirst'}>Сделать заказ</button>
        <button className="red-outline" onClick={() => window.location.href='https://t.me/TechinalSupp0rt'}>Тех. поддержка</button>
      </div>

      <section id="about" className="hidden-section">
        <h2>Что умеют наши боты?</h2>
        <div className="features-grid">
          <div className="feature-card">🤖 Отвечать на вопросы</div>
          <div className="feature-card">📝 Генерировать тексты</div>
          <div className="feature-card">💾 Запоминать информацию</div>
          <div className="feature-card">🎨 Создавать изображения</div>
          <div className="feature-card">🎮 Играть в текстовые RPG</div>
        </div>
      </section>

      <section id="price" className="hidden price-section">
        <h2>💰 Тарифы</h2>
          <div className="price-card">
            <h3>Базовый бот</h3>
            <p>от 100 до 300 рублей</p>
          </div>
          <div className="price-card">
            <h3>Бот со средним функционалом</h3>
            <p>от 300 до 500 рублей</p>
          </div>
          <div className="price-card">
            <h3>Бот со сложным функционалом</h3>
            <p>от 500 до ∞</p>
          </div>
          <div className="price-card">
            <h3>Поддержка бота</h3>
            <p>50 рублей в месяц</p>
          </div>
      </section>

    </div>
  );
}

export default App;
