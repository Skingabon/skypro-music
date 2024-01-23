import React, { useState } from "react";
import "./navMenu.css";


//В домашней работе нужно сделать состояние state для скрытия и отображения бургера
export function NavMenu() {
    const [visibleMenu, setVisibleMenu ] = useState(false)
    return (
        <nav className="main__nav nav">
            <div className="nav__logo logo">
                <img className="logo__image" src="img/logo.png" alt="logo" />
            </div>
            <div className="nav__burger burger" onClick={() => setVisibleMenu(!visibleMenu)}> 
                <span className="burger__line"></span>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
            </div>
            {visibleMenu && (
            <div className="nav__menu menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <a href="#" className="menu__link">
                            Главное
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="#" className="menu__link">
                            Мой плейлист
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="../signin.html" className="menu__link">
                            Войти
                        </a>
                    </li>
                </ul>
            </div>
            )}

        </nav>
    );
}