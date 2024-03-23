import React, { useState } from "react";
import * as S from "./navMenu.styled";
import { useUserContext } from "../../context/user.jsx";
// import { useDispatch } from "react-redux";
// import { clearCurrentTrack } from "../../redux/trackSlice.js";


export function NavMenu() {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const { resetUser } = useUserContext();

  // const dispatch = useDispatch();

  function logout() {
    // dispatch(clearCurrentTrack())
    window.location.pathname =  "/login"
    resetUser()

  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImg src="/img/logo.png" alt="logo" />
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
              <S.MenuLink $active={window.location.pathname === "/favorites"} to="/Favorites">
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
