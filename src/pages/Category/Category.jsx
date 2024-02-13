import React, { useEffect, useState } from "react";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import { SideBar } from "../../components/SideBar/SideBar";
import { PlayerBar } from "../../components/PlayerBar/PlayerBar";
import { useParams } from "react-router-dom";
import { CenterBlock } from "../../components/CenterBlock/CenterBlock";
import { getTracks } from "../../Api/tracks";
import { Container, Footer, MainContainer, Wrapper } from "../../app.styled";

export const Category = () => {
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const [tracks, setTracks] = useState([])
  
    useEffect(() => {
      setIsLoading(true)
      getTracks().then((data) => {
        setTracks(data)
        setIsLoading(false)
      })
    }, []);

    //   //1. При использовании setTimeout внутри useEffect с пустым массивом зависимостей ([]), мы гарантируем, что setTimeout будет запущен только один раз после монтирования компонента. Это предотвращает многократное создание таймеров при обновлении компонента.
  
    // 2. Помещение setTimeout в useEffect также помогает в управлении жизненным циклом таймера. Когда компонент размонтируется, useEffect выполнит очистку (clean-up) и отменит таймер, чтобы избежать утечек памяти.
  
    // 3. Использование setTimeout внутри useEffect делает код более читаемым и предсказуемым, так как это стандартная практика для выполнения побочных эффектов в React.
  
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }, []);
  
    return (
      <>
        <Wrapper>
        <Container>
          <MainContainer>
              <NavMenu />
              <CenterBlock isLoading={isLoading} tracks={tracks} heading={`Category ${params.id}`}/>
              <SideBar />
              </MainContainer>
          <PlayerBar isLoading={isLoading} />
          <Footer />
        </Container>
      </Wrapper>
      </>
    );
}