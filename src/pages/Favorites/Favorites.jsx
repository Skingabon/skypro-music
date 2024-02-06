import React, { useEffect, useState } from "react";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import { SideBar } from "../../components/SideBar/SideBar";
import { PlayerBar } from "../../components/PlayerBar/PlayerBar";


export const Favorites = () => {
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }, []);
  
    return (
      <>
        {/* <GlobalStyle/> */}
        <div className="wrapper">
          <div className="container">
            <main className="main">
              <NavMenu />
              {/* <CenterBlock /> */}
              <h1>Favorites</h1>
              <SideBar />
            </main>
            <PlayerBar isLoading={isLoading} />
            <footer className="footer"></footer>
          </div>
        </div>
      </>
    );
}