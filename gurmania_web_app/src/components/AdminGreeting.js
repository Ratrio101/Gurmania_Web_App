import React from 'react';
import './AdminGreeting.css'; // Стили для анимации

const AdminGreeting = () => {
    return (
        <div className="admin-greeting">
            <h1 className="greeting-text">Добро пожаловать, Администратор!</h1>
            <p className="subtext">Ваше могущество не знает границ!</p>
            <div className="warcraft-logo"></div>
        </div>
    );
};

export default AdminGreeting;