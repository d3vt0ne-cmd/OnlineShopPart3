import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProviders';
import axiosClient from '../axios-client';

export default function Navbar() {
    const { token, setUser, setToken } = useStateContext();
    const navigate = useNavigate();

    const onLogout = (ev) => {
        ev.preventDefault();
        axiosClient.post('/logout')
            .then(() => {
                setUser({});
                setToken(null);
                navigate('/auth/login');
            });
    };

    return (
        <nav className="navbar">
            <div className="logo">
                ☕ Coffee Shop
            </div>

            <div className="nav-links">
                <Link to="/">Главная</Link>
                <Link to="/menu/coffee">Меню</Link>
                {token ? (
                    <>
                        <Link to="/user/info">Профиль</Link>
                        <button onClick={onLogout}>Выход</button>
                    </>
                ) : (
                    <>
                        <Link to="/auth/login">Вход</Link>
                        <Link to="/auth/signup">Регистрация</Link>
                        
                    </>
                )}
            </div>
        </nav>
    );
}