import React, { useState } from "react";
import * as S from "./navMenu.styled";

//В домашней работе нужно сделать состояние state для скрытия и отображения бургера
export function NavMenu() {
  const [visibleMenu, setVisibleMenu] = useState(false);
  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImg src="img/logo.png" alt="logo" />
      </S.NavLogo>
      {/* <S.TestNavLogo $width={2000} /> */}
      {/* <S.TestNavLogo $isActive={visibleMenu} /> */}

      <S.NavBurger onClick={() => setVisibleMenu(!visibleMenu)}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>

      {visibleMenu && (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink href="#">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="#">Мой плейлист</S.MenuLink>
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
