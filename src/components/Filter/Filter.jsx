import React from "react";
import "./filter.css"

export function Filter({nameFilter, activeFilter, filterData}) {
    return (<>
    {activeFilter === nameFilter && (
            <ul className={`filter-list__${nameFilter}  filter-list`}>
              {filterData.map((elem, index) => (
                <li key={index} className="filter-list__item">
                  {elem}
                </li>
              ))}
            </ul>
          )} 
    </>
        
    )
}


//<></> - Реакт фрагмент