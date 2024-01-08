import React from "react";
import "./sideBar.css";
import { SideBarPlayList } from "../SideBarPlayList/SideBarPlayList";


export function SideBar() {
    return (

<div className="main__sidebar sidebar">
            <div className="sidebar__personal">
              <p className="sidebar__personal-name">Sergey.Ivanov</p>
              <div className="sidebar__icon">
                <svg alt="logout">
                  <use xlinkHref="img/icon/sprite.svg#logout"></use>
                </svg>
              </div>
            </div>
            <SideBarPlayList />
          </div>
    );
}