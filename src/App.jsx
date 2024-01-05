import "./App.css";
import React from "react";
import { PlayerBar } from "./components/PlayerBar/PlayerBar";
import { SideBar } from "./components/SideBar/SideBar";
import { NavMenu } from "./components/NavMenu/NavMenu";
import { CenterBlock } from "./components/CenterBlock/CenterBlock";



function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <CenterBlock />
          <SideBar />
        </main>
        <PlayerBar />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
