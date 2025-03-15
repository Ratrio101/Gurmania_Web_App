import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ token, children, isAdminRoute = false }) => {
    // Если токен отсутствует, перенаправляем на страницу входа
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // Декодируем токен, чтобы получить информацию о пользователе
    let userRole = 'user'; // По умолчанию роль 'user'
    try {
        const decodedToken = jwtDecode(token);
        userRole = decodedToken.role; // Предполагаем, что роль хранится в токене
    } catch (error) {
        console.error('Ошибка декодирования токена:', error);
        return <Navigate to="/login" replace />;
    }

    // Если это маршрут для админки, проверяем роль
    if (isAdminRoute && userRole !== 'admin') {
        console.log('КЫШ ОТСЮДА!!!');
        return <Navigate to="/" replace />; // Перенаправляем на главную страницу
    }

    // Если все проверки пройдены, отображаем дочерние элементы
    return children;
};

export default ProtectedRoute;