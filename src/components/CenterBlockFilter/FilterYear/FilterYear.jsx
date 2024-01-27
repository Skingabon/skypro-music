import React, { useState } from "react";
import "./filterYear.css";
import { Filter } from "../../Filter/Filter";

const yearData = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];

export function FilterYear() {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleActiveFilter = (nameFilter) => {
    if (nameFilter === activeFilter) {
      setActiveFilter(null);
      return;
    }
    setActiveFilter(nameFilter);
  };
  return (
    <div className="filter-container__year">
      <div
        className={`filter__button button-year _btn-text ${
          activeFilter === "year" ? "active" : ""
        }  `}
        onClick={() => handleActiveFilter("year")}
      >
        году выпуска
      </div>
      <Filter
        nameFilter={"year"}
        activeFilter={activeFilter}
        filterData={yearData}
      />
    </div>
  );
}
