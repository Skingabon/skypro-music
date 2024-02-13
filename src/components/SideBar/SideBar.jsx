import React from "react";
import { SideBarPlayList } from "../SideBarPlayList/SideBarPlayList";
import * as S from "./sideBar.styled";

export function SideBar() {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="/img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <SideBarPlayList />
    </S.MainSidebar>
  );
}
