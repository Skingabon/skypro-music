import React, { useState } from "react";
import * as S from "./navMenu.styled";



export function NavMenu() {
  const [visibleMenu, setVisibleMenu] = useState(false);

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImg src="img/logo.png" alt="logo" />
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
              <S.MenuLink $active={window.location.pathname === "/"} to="/">
                Главная

              </S.MenuLink>
            </S.MenuItem>

            <S.MenuItem>
              <S.MenuLink $active={window.location.pathname === "/favorites"} to="/favorites">
                Мои треки
              </S.MenuLink>
            </S.MenuItem>


            <S.MenuItem>
              <S.MenuLink href="../signin.html">Войти</S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  );
}
