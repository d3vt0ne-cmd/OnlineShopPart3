import { useEffect, useState } from "react";
import axiosClient from "../axios-client";

export default function CoffeeMenu() {
    const [coffee, setCoffee] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosClient.get('/coffee')
            .then(({ data }) => {
                setCoffee(data.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="container" style={{textAlign: 'center', padding: '4rem'}}>Загрузка меню... ☕</div>;
    }

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center', margin: '3rem 0', fontSize: '3rem' }}>Меню Кофе ☕</h1>

            <div className="features">
                {coffee.map(item => (
                    <div 
                        key={item.name} 
                        className="feature-card"
                        style={{ 
                            opacity: item.available ? 1 : 0.6,
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Фото кофе */}
                        <img 
                            src={getCoffeeImage(item.name)} 
                            alt={item.name}
                            style={{
                                width: '100%',
                                height: '250px',
                                objectFit: 'cover',
                                borderRadius: '20px 20px 0 0'
                            }}
                        />

                        <div style={{ padding: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{item.name}</h3>
                            <p style={{ marginBottom: '1rem', color: '#666' }}>{item.description}</p>
                            <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#8d6e63' }}>
                                Цена: {item.price} руб.
                            </p>
                            <p style={{ marginTop: '0.5rem' }}>
                                Размер: {item.size.name} ({item.size.ml} мл)
                            </p>

                            {!item.available && (
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    background: 'rgba(255,255,255,0.9)',
                                    padding: '20px 40px',
                                    borderRadius: '15px',
                                    fontSize: '2rem',
                                    fontWeight: 'bold',
                                    color: '#c62828',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                                }}>
                                    Нет в наличии
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Функция для выбора фото по названию кофе
function getCoffeeImage(name) {
    const images = {
        'Espresso': 'https://img.freepik.com/free-photo/closeup-classic-fresh-espresso-served-dark-surface_1220-5375.jpg?w=740',
        'Latte': 'https://media.istockphoto.com/id/1045880988/photo/coffee-art-in-cup-closeup-of-hands-making-latte-art.jpg?s=612x612&w=0&k=20&c=dsQM2jUw-oz8CtaZYPiC0dL9uoOIH5Z86iH-UlTxYs0=',
        'Cappuccino': 'https://thumbs.dreamstime.com/b/top-view-cappuccino-coffee-latte-art-top-white-paper-mug-high-quality-foam-white-background-best-commercial-178362792.jpg'
    };
    return images[name] || 'https://via.placeholder.com/400x250?text=No+Image';
}