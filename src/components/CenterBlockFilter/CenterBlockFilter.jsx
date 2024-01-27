import React from "react";
import "./centerBlockFilter.css";
import { FilterAuthor } from "./FilterAuthor/FilterAuthor";
import { FilterGenre } from "./FilterGenre/FilterGenre";
import { FilterYear } from "./FilterYear/FilterYear";
import * as S from "./centerBlockFilter.styled";

//завершающая часть домашней работы
//pop-up при клике на категории в фильтрах - это самая сложная и самая интресная часть домашки!!!
//так же как и скелетоны используют общие состояния, т.е. при клике на категорию, нужно список другой категории закрывать
//рекомендуется кнопку категории и список категории вытащить в отдельный компонент и внутри него реализовать логику отображения категории и списка
// Кнопка с фильтром показывает цветом активное и неактивное состояние.
//года и жанры захардкодить
//элементы в списке должны юыть интерактивные, но без логики кликабельности
//список треков и список исполнителей хранить в массиве!!! чтобы в списке категорий менялись данные в зависимости от выбранной категории

export function CenterBlockFilter() {
  // const [activeFilter, setActiveFilter] = useState(null);

  // const handleActiveFilter = (nameFilter) => {
  //   if (nameFilter === activeFilter) {
  //     setActiveFilter(null);
  //     return;
  //   }
  //   setActiveFilter(nameFilter);
  // };

  return (
    <S.CenterBlockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <FilterAuthor />

      <FilterYear />

      <FilterGenre />
    </S.CenterBlockFilter>
  );
}
