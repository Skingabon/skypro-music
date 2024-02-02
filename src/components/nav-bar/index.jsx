import React from "react";
import {  NavLink } from "react-router-dom";
import cn from "classnames";

export const NavBar = () => {
    const activeClassName = "underline";
    return (
        <nav>
            <ul>
                <li>
                    {/* NavLink для того чтобы подсветить что мы находимся например на главной странице
             Для этого мы воспользуемся пропом className, что бы вытащить свойство isActive. 
             
             Свойство isActive будет возвращаться в компонент в виде true или false в зависимости от того 
             активно свойство isActive или нет. Т.е. система реакт будет в компоненте закикдывать нам это
             свойство и на основании этого свойства мы можем добавить какойто класс. В данном случае
             я буду добавлять underline клас в случае если ссылка активна. cn - это библиотека, которая 
             позволяет очень удобно компоновать класс. Т.е. я на ссылке комбинирую 2 класса - 1. передаю
             стандартный 2. Передаю underline в случае, если isActive=true
             */}
                    <NavLink to="/"
                        className={({ isActive }) =>
                            cn("App-link", {
                                [activeClassName]: isActive
                            })
                        }
                    >
                        Home
                    </NavLink>
                </li>
                {/* <li>
                    <Link className="App-link" to="/About">
                        About
                    </Link>
                </li> */}
                <li>
                    <NavLink to="/about"
                        className={({ isActive }) =>
                            cn("App-link", {
                                [activeClassName]: isActive,
                            })
                        }
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};