import React from "react";
import { SideBarPlayList } from "../SideBarPlayList/SideBarPlayList";
import * as S from "./sideBar.styled";
import { useUserContext } from "../../context/user";
import { Link } from "react-router-dom";

export function SideBar() {
const {user, resetUser} = useUserContext();


  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{user.username}</S.SidebarPersonalName>
        <S.SidebarIcon onClick={resetUser}>
          <Link to="/login">
          <svg alt="logout">
            <use xlinkHref="/img/icon/sprite.svg#logout"></use>
          </svg>
          </Link>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <SideBarPlayList />
    </S.MainSidebar>
  );
}
