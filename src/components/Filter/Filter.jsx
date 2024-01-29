import React from "react";
import "./filter.css";
import * as S from "./filter.styled";

export function Filter({ nameFilter, activeFilter, filterData }) {
  return (
    <>
      {activeFilter === nameFilter && (
        <ul className={`filter-list__${nameFilter}  filter-list`}>
          {filterData.map((elem, index) => (
            <S.FilterListItem key={index}>{elem}</S.FilterListItem>
          ))}
        </ul>
      )}
    </>
  );
}

//<></> - Реакт фрагмент
