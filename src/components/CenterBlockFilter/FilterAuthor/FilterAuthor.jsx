import React, { useState } from "react";
import "./filterAuthor.css";
import { Filter } from "../../Filter/Filter";

export function FilterAuthor() {
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

  const [activeFilter, setActiveFilter] = useState(null);

  const handleActiveFilter = (nameFilter) => {
    if (nameFilter === activeFilter) {
      setActiveFilter(null);
      return;
    }
    setActiveFilter(nameFilter);
  };
  return (
    <div className="filter-container__author">
      <div
        className={`filter__button button-author _btn-text ${
          activeFilter === "author" ? "active" : ""
        }  `}
        onClick={() => handleActiveFilter("author")}
      >
        исполнителю
      </div>

      <Filter
        nameFilter={"author"}
        activeFilter={activeFilter}
        filterData={authorData}
      />
    </div>
  );
}
