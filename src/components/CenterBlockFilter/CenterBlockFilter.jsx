import React, { useState } from "react";
import "./centerBlockFilter.css";

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

const yearData = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];

const genreData = ["Elektro", "Pop", "Trance", "Folk", "Shanson"];

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
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>

      <div className="filter-container__author">
        <div
          className="filter__button button-author _btn-text"
          onClick={() => handleActiveFilter("author")}
        >
          исполнителю
        </div>

        {activeFilter === "author" && (
          <ul className="filter-list__author">
            {authorData.map((elem, index) => (
              <li key={index} className="filter-list__item">
                {elem}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="filter-container__year">
        <div
          className="filter__button button-year _btn-text"
          onClick={() => handleActiveFilter("year")}
        >
          году выпуска
        </div>
        {activeFilter === "year" && (
          <ul className="filter-list__year">
            {yearData.map((elem, index) => (
              <li key={index} className="filter-list__item">
                {elem}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="filter-container__genre">
        <div
          className="filter__button button-genre _btn-text"
          onClick={() => handleActiveFilter("genre")}
        >
          жанру
        </div>
        {activeFilter === "genre" && (
          <ul className="filter-list__genre">
            {genreData.map((elem, index) => (
              <li key={index} className="filter-list__item">
                {elem}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
