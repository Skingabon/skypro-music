import React from "react";
import { Filter } from "../../Filter/Filter";
import * as S from "./filterPopup.styled"

export function FilterPopup({ handleActiveFilter, activeFilter, dataFilter, nameFilter, nameBtn }) {


  return (
    <S.FilterContainer>
      <S.FilterButton
        className={`_btn-text`}
        onClick={() => handleActiveFilter(nameFilter)}
        $active={activeFilter === nameFilter}
      >
        {nameBtn}
      </S.FilterButton>

      <Filter
        nameFilter={nameFilter}
        activeFilter={activeFilter}
        filterData={dataFilter}
      />
    </S.FilterContainer>
  );
}
