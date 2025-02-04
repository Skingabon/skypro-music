import React, { useState } from "react";
import * as S from "./navMenu.styled";
import { useUserContext } from "../../context/user.jsx";
import { useLocation } from "react-router-dom";



export function NavMenu() {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const { resetUser } = useUserContext();
  const { pathname } = useLocation();

  console.log(pathname);
  function logout() {

    window.location.pathname = "/login"
    resetUser()

  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImg src="/img/Tim.jpg" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={() => setVisibleMenu(!visibleMenu)}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {visibleMenu && (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink $active={pathname === "/"} to="/">
                Главная

              </S.MenuLink>
            </S.MenuItem>

            <S.MenuItem>
              <S.MenuLink $active={pathname === "/favorites"} to="/favorites">
                Мои треки
              </S.MenuLink>
            </S.MenuItem>


            <S.MenuItem onClick={logout}>
              <S.MenuLink to="/login">
                Выйти</S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  );
}
