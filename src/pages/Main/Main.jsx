import React, { useEffect, useState } from "react";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import { CenterBlock } from "../../components/CenterBlock/CenterBlock";
import { SideBar } from "../../components/SideBar/SideBar";
import { PlayerBar } from "../../components/PlayerBar/PlayerBar";
import { getTracks } from "../../Api/tracks";
import { Container, Footer, MainContainer, Wrapper } from "../../app.styled";



export const Main = ( {currentTrack, setCurrentTrack} ) => {
  const [isLoading, setIsLoading] = useState(true);

  //   //1. При использовании setTimeout внутри useEffect с пустым массивом зависимостей ([]), мы гарантируем, что setTimeout будет запущен только один раз после монтирования компонента. Это предотвращает многократное создание таймеров при обновлении компонента.

  // 2. Помещение setTimeout в useEffect также помогает в управлении жизненным циклом таймера. Когда компонент размонтируется, useEffect выполнит очистку (clean-up) и отменит таймер, чтобы избежать утечек памяти.

  // 3. Использование setTimeout внутри useEffect делает код более читаемым и предсказуемым, так как это стандартная практика для выполнения побочных эффектов в React.
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    setIsLoading(true)
    getTracks().then((data) => {
      setTracks(data)
      setIsLoading(false)
    })
  }, []);

  console.log(currentTrack);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);
  // }, []);

  return (
    <>
      {/* <GlobalStyle/> */}
      <Wrapper>
        <Container>
          <MainContainer>
            <NavMenu />
            <CenterBlock setCurrentTrack={setCurrentTrack} isLoading={isLoading} tracks={tracks} heading={"Треки"}  />
            <SideBar />
          </MainContainer>
          {currentTrack && <PlayerBar isLoading={isLoading} currentTrack={currentTrack} />}
          <Footer />
        </Container>
      </Wrapper>
    </>
  );
};