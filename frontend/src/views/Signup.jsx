import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProviders';
import axiosClient from '../axios-client';

export default function Signup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const { setUser, setToken } = useStateContext();
    const navigate = useNavigate();
    const [errors, setErrors] = useState(null);

    const onSubmit = (ev) => {
        ev.preventDefault();
        setErrors(null);

        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmRef.current.value,
        };

        axiosClient.post('/signup', payload)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
                navigate('/user/info'); // или '/' — куда хочешь после регистрации
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            });
    };

    return (
        <div className="auth-form">
            <h2>Регистрация</h2>

            {errors && (
                <div className="errors-alert">
                    {Object.keys(errors).map(key => (
                        <p key={key}>{errors[key][0]}</p>
                    ))}
                </div>
            )}

            <form onSubmit={onSubmit}>
                <input ref={nameRef} type="text" placeholder="Имя" required />
                <input ref={emailRef} type="email" placeholder="Email" required />
                <input ref={passwordRef} type="password" placeholder="Пароль" required />
                <input ref={passwordConfirmRef} type="password" placeholder="Подтвердите пароль" required />
                <button type="submit">Зарегистрироваться</button>
            </form>

            <p>Уже есть аккаунт? <Link to="/auth/login">Войти</Link></p>
        </div>
    );
}