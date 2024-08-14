
import { useNavigate } from 'react-router-dom';
import {useState} from "react";

export function Register() {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currency, setCurrency] = useState('');
    const navigate = useNavigate();


    const handleRegister = async () => {
        const response = await fetch('/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login, email, password, currency }),
        });

        if (response.ok) {
            console.log('User registered successfully');
            navigate('/auth');  // Перенаправление на страницу входа
        } else {
            console.error('Registration failed');
            // Здесь можно добавить отображение ошибки
        }
    };

    return (
        <div className="container">
            <h2>Регистрация</h2>
            <input
                type="text"
                placeholder="Логин"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="text"
                placeholder="Валюта"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
            />
            <button className={"button"} onClick={handleRegister}>Зарегистрироваться</button>
        </div>
    );
}