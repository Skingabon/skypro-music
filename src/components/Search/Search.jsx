import React from "react";
import "./search.css";
import * as S from "./search.stylerd";

export function Search() {
  return (
    <S.CenterBlockSearch>
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchText type="search" placeholder="Поиск" name="search" />
    </S.CenterBlockSearch>
  );
}
