import React, { useState } from "react";
import * as S from "./sideBarPlayList.styled";

export function SideBarPlayList() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  return (
    <S.SideBarBlock>
      {isLoading ? (
        <img src="/img/Category.svg" alt="" />
      ) : (
        <>
          <S.SideBarList>
            <S.SideBarItem>
              <S.SideBarLink to="/category/1">
                <S.SideBarImg src="/img/playlist01.png" alt="day's playlist" />
              </S.SideBarLink>
            </S.SideBarItem>
            <S.SideBarItem>
              <S.SideBarLink to="/category/2">
                <S.SideBarImg src="/img/playlist02.png" alt="day's playlist" />
              </S.SideBarLink>
            </S.SideBarItem>
            <S.SideBarItem>
              <S.SideBarLink  to="/category/3">
                <S.SideBarImg src="/img/playlist03.png" alt="day's playlist" />
              </S.SideBarLink>
            </S.SideBarItem>
          </S.SideBarList>
        </>
      )}
    </S.SideBarBlock>
  );
}
