import React, { useState } from 'react';

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="logo">FIT-car</h1>
          <button
            className="btn-primary"
            onClick={() => setIsModalOpen(true)}
          >
            Связаться с нами
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h2>Автозапчасти для любых автомобилей</h2>
          <p>Оригинальные и аналоговые запчасти с гарантией качества</p>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <div className="container">
          <h3>Категории товаров</h3>

          <div className="category-cards">
            <div className="category-card">Двигатель</div>
            <div className="category-card">Подвеска</div>
            <div className="category-card">Тормозная система</div>
            <div className="category-card">Электрика</div>
            <div className="category-card">Фильтры и масла</div>
            <div className="category-card">Кузовные детали</div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="advantages">
        <div className="container">
          <h3>Почему FIT-car</h3>

          <div className="adv-cards">
            <div className="adv-card">
              <h4>Широкий ассортимент</h4>
              <p>Запчасти для легковых и коммерческих автомобилей</p>
            </div>

            <div className="adv-card">
              <h4>Гарантия качества</h4>
              <p>Только проверенные поставщики и бренды</p>
            </div>

            <div className="adv-card">
              <h4>Быстрая доставка</h4>
              <p>Оперативно доставляем заказы по городу и регионам</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <div className="container">
          <h3>О компании</h3>
          <p>
            FIT-car — магазин автозапчастей, ориентированный на надёжность,
            доступные цены и качественный сервис. Мы помогаем подобрать
            оптимальные детали для вашего автомобиля.
          </p>
        </div>
      </section>

      {/* Contacts */}
      <section className="contacts">
        <div className="container">
          <h3>Контакты</h3>
          <p>Телефон: +7 (900) 105-47-64</p>
          <p>Email: info@fit-car.ru</p>
          <p>Адрес: г. Казань, ул. Борисовская, 47</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 FIT-car. Магазин автозапчастей</p>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="close-btn"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </span>

            <h3>Связаться с нами</h3>
            <input type="text" placeholder="Ваше имя" />
            <input type="tel" placeholder="Телефон" />
            <textarea placeholder="Комментарий"></textarea>
            <button className="btn-primary">Отправить</button>
          </div>
        </div>
      )}
    </>
  );
};
