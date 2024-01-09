import React from "react";
import "./centerBlockFilter.css";

//завершающая часть домашней работы
//pop-up при клике на категории в фильтрах - это самая сложная и самая интресная часть домашки!!!
//так же как и скелетоны используют общие состояния, т.е. при клике на категорию, нужно список другой категории закрывать
//рекомендуется кнопку категории и список категории вытащить в отдельный компонент и внутри него реализовать логику отображения категории и списка
// Кнопка с фильтром показывает цветом активное и неактивное состояние.
//года и жанры захардкодить
//элементы в списке должны юыть интерактивные, но без логики кликабельности
//список треков и список исполнителей хранить в массиве!!! чтобы в списке категорий менялись данные в зависимости от выбранной категории


export function CenterBlockFilter() {
    return (
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <div className="filter__button button-author _btn-text">
                исполнителю
            </div>
            <div className="filter__button button-year _btn-text">
                году выпуска
            </div>
            <div className="filter__button button-genre _btn-text">жанру</div>
        </div>
    )
}