import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminUsers = ({ token }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:7777/admin/users', {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => setUsers(response.data))
        .catch(error => console.error('Ошибка:', error));
    }, [token]);

    return (
        <div>
            <h1>Пользователи</h1>
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.username} - {user.role}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminUsers;