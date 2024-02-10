import "./App.css";
import React, { useEffect, useState } from "react";
import { PlayerBar } from "./components/PlayerBar/PlayerBar";
import { SideBar } from "./components/SideBar/SideBar";
import { NavMenu } from "./components/NavMenu/NavMenu";
import { CenterBlock } from "./components/CenterBlock/CenterBlock";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  //   //1. При использовании setTimeout внутри useEffect с пустым массивом зависимостей ([]), мы гарантируем, что setTimeout будет запущен только один раз после монтирования компонента. Это предотвращает многократное создание таймеров при обновлении компонента.

  // 2. Помещение setTimeout в useEffect также помогает в управлении жизненным циклом таймера. Когда компонент размонтируется, useEffect выполнит очистку (clean-up) и отменит таймер, чтобы избежать утечек памяти.

  // 3. Использование setTimeout внутри useEffect делает код более читаемым и предсказуемым, так как это стандартная практика для выполнения побочных эффектов в React.

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <CenterBlock />
          <SideBar />
        </main>
        <PlayerBar isLoading={isLoading} />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
