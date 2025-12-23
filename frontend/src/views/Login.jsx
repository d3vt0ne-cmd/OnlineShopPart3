import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProviders';
import axiosClient from '../axios-client';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const { setUser, setToken } = useStateContext();
    const navigate = useNavigate();
    const [errors, setErrors] = useState(null);

    const onSubmit = (ev) => {
        ev.preventDefault();
        setErrors(null);

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        axiosClient.post('/login', payload)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
                navigate('/user/info');
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    if (response.data.errors) {
                        setErrors(response.data.errors);
                    } else {
                        setErrors({ email: [response.data.message] });
                    }
                }
            });
    };

    return (
        <div className="auth-form">
            <h2>Вход</h2>

            {errors && (
                <div className="errors-alert">
                    {Object.keys(errors).map(key => (
                        <p key={key}>{errors[key][0]}</p>
                    ))}
                </div>
            )}

            <form onSubmit={onSubmit}>
                <input ref={emailRef} type="email" placeholder="Email" required />
                <input ref={passwordRef} type="password" placeholder="Пароль" required />
                <button type="submit">Войти</button>
            </form>

            <p>Нет аккаунта? <Link to="/auth/signup">Зарегистрироваться</Link></p>
        </div>
    );
}