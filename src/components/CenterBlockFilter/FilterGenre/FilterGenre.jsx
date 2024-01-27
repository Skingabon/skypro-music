import React, { useState } from "react";
import "./filterGenre.css";
import { Filter } from "../../Filter/Filter";

export function FilterGenre() {
  const genreData = ["Elektro", "Pop", "Trance", "Folk", "Shanson"];
  const [activeFilter, setActiveFilter] = useState(null);

  const handleActiveFilter = (nameFilter) => {
    if (nameFilter === activeFilter) {
      setActiveFilter(null);
      return;
    }
    setActiveFilter(nameFilter);
  };

  return (
    <div className="filter-container__genre">
      <div
        className={`filter__button button-genre _btn-text ${
          activeFilter === "genre" ? "active" : ""
        }  `}
        onClick={() => handleActiveFilter("genre")}
      >
        жанру
      </div>
      <Filter
        nameFilter={"genre"}
        activeFilter={activeFilter}
        filterData={genreData}
      />
    </div>
  );
}
