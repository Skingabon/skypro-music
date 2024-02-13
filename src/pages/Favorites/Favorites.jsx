import React, { useEffect, useState } from "react";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import { SideBar } from "../../components/SideBar/SideBar";
import { PlayerBar } from "../../components/PlayerBar/PlayerBar";
import { getTracks } from "../../Api/tracks";
import { CenterBlock } from "../../components/CenterBlock/CenterBlock";
import { Container, Footer, MainContainer, Wrapper } from "../../app.styled";


export const Favorites = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    setIsLoading(true)
    getTracks().then((data) => {
      setTracks(data)
      setIsLoading(false)
    })
  }, []);

  return (
    <>
      {/* <GlobalStyle/> */}
      <Wrapper>
        <Container>
          <MainContainer>
            <NavMenu />
            <CenterBlock isLoading={isLoading} tracks={tracks} heading={"Мои треки"}/>
            <SideBar />
            </MainContainer>
          <PlayerBar isLoading={isLoading} />
          <Footer />
        </Container>
      </Wrapper>
    </>
  );
}