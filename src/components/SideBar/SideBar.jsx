import React from "react";
import { SideBarPlayList } from "../SideBarPlayList/SideBarPlayList";
import * as S from "./sideBar.styled";
import { useTrackContext } from "../../context/track";

export function SideBar() {
const {user} = useTrackContext();

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{user.username}</S.SidebarPersonalName>
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
