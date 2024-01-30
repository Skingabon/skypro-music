import React from "react";
import * as S from "./filter.styled";

export function Filter({ nameFilter, activeFilter, filterData }) {
  return (
    <>
      {activeFilter === nameFilter && (
        <S.FilterList>
          {filterData.map((elem, index) => (
            <S.FilterListItem key={index}>{elem}</S.FilterListItem>
          ))}
        </S.FilterList>
      )}
    </>
  );
}
