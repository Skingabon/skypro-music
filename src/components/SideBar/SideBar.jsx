import React from "react";
import { SideBarPlayList } from "../SideBarPlayList/SideBarPlayList";
import * as S from "./sideBar.styled";
import { useUserContext } from "../../context/user";


export function SideBar() {
const {user, resetUser} = useUserContext();


  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{user.email}</S.SidebarPersonalName>
        <S.SidebarIcon onClick={resetUser}>
          <a href="/login">
          <svg alt="logout">
            <use xlinkHref="/img/icon/sprite.svg#logout"></use>
          </svg>
          </a>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <SideBarPlayList />
    </S.MainSidebar>
  );
}
