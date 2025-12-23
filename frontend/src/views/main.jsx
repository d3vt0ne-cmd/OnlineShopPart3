import React from 'react';

export default function Main() {
    return (
        <>
            <section className="hero">
                <h1>Добро пожаловать в Coffee Shop!</h1>
                <p>Лучший свежий кофе в городе с быстрой доставкой на дом</p>
            </section>

            <div className="container">
                <div className="features">
                    <div className="feature-card">
                        <h3>Свежеобжаренный кофе</h3>
                        <p>Только лучшие зерна премиум-класса</p>
                    </div>
                    <div className="feature-card">
                        <h3>Молниеносная доставка</h3>
                        <p>Горячий кофе у вас дома за 30 минут</p>
                    </div>
                    <div className="feature-card">
                        <h3>Лояльные цены</h3>
                        <p>Качество по доступной цене каждый день</p>
                    </div>
                    <div className="feature-card">
                        <h3>Бонусная система</h3>
                        <p>Копите баллы — пейте кофе бесплатно</p>
                    </div>
                </div>
            </div>
        </>
    );
}