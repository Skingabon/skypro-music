import React, { useState } from "react";
import { FilterPopup } from "./FilterPopup/FilterPopup";

import * as S from "./centerBlockFilter.styled";

const authorData = [
  "Nero",
  "Dynoro",
  "Ali Bakgor",
  "Стоункат",
  "Calvin Harris",
  "Tom Boxer",
  "Jaded",
  "Blue Foundation",
];

const genreData = ["Elektro", "Pop", "Trance", "Folk", "Shanson"];

const yearData = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];



export function CenterBlockFilter() {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleActiveFilter = (nameFilter) => {
    if (nameFilter === activeFilter) {
      setActiveFilter(null);
      return;
    }
    setActiveFilter(nameFilter);
  };

  return (
    <S.CenterBlockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <FilterPopup
        nameBtn={"исполнителю"}
        nameFilter={"author"}
        dataFilter={authorData}
        handleActiveFilter={handleActiveFilter}
        activeFilter={activeFilter}
      />

      <FilterPopup
        nameBtn={"жанру"}
        nameFilter={"genre"}
        dataFilter={genreData}
        handleActiveFilter={handleActiveFilter}
        activeFilter={activeFilter}
      />

      <FilterPopup
        nameBtn={"году выпуска"}
        nameFilter={"year"}
        dataFilter={yearData}
        handleActiveFilter={handleActiveFilter}
        activeFilter={activeFilter}
      />
    </S.CenterBlockFilter>
  );
}
