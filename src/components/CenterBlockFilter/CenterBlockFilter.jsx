import React, { useState } from "react";
import "./centerBlockFilter.css";
import { FilterPopup } from "./FilterPopup/FilterPopup";

import * as S from "./centerBlockFilter.styled";

//завершающая часть домашней работы
//pop-up при клике на категории в фильтрах - это самая сложная и самая интресная часть домашки!!!
//так же как и скелетоны используют общие состояния, т.е. при клике на категорию, нужно список другой категории закрывать
//рекомендуется кнопку категории и список категории вытащить в отдельный компонент и внутри него реализовать логику отображения категории и списка
// Кнопка с фильтром показывает цветом активное и неактивное состояние.
//года и жанры захардкодить
//элементы в списке должны юыть интерактивные, но без логики кликабельности
//список треков и список исполнителей хранить в массиве!!! чтобы в списке категорий менялись данные в зависимости от выбранной категории
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
