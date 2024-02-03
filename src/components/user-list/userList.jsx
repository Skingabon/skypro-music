// принимаю в данный компонент список пользователей и рендерю некий список
// бегаю по всему массиву польвателей map и генерирую разметку - 
// картинка (аватарка) + имя + фамилия

// подключаю этот компонент к основной странице - Main
import React from "react";
import { Link } from "react-router-dom";



export const UserList = ({ users }) => {
    return (
        <ul className="UserList__list">
            {users.map((user) => (
                <li key={user.id} className="UserList__list-item">
                    <img src={user.avatar} alt={user.firstName} />

                    <Link to={`/profile/${user.id}`} className="UserList__name">
                        {user.firstName} {user.lastName}
                    </Link>
                </li>
            ))}
        </ul>
    )
}