import React from "react";
import "./filterPopup.css";
import { Filter } from "../../Filter/Filter";

export function FilterPopup({ handleActiveFilter, activeFilter, dataFilter, nameFilter, nameBtn }) {


  return (
    <div className={`filter-container`}>
      <div
        className={`filter__button button-${nameFilter} _btn-text ${
          activeFilter === nameFilter ? "active" : ""
        }  `}
        onClick={() => handleActiveFilter(nameFilter)}
      >
        {nameBtn}
      </div>

      <Filter
        nameFilter={nameFilter}
        activeFilter={activeFilter}
        filterData={dataFilter}
      />
    </div>
  );
}
