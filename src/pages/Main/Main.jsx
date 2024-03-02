import React, { useEffect, useState } from "react";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import { CenterBlock } from "../../components/CenterBlock/CenterBlock";
import { SideBar } from "../../components/SideBar/SideBar";
import { PlayerBar } from "../../components/PlayerBar/PlayerBar";
import { getTracks } from "../../Api/tracks";
import { Container, Footer, MainContainer, Wrapper } from "../../app.styled";
import { useTrackContext } from "../../context/track";



export const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [tracks, setTracks] = useState([])
const {currentTrack} = useTrackContext()

  useEffect(() => {
    setIsLoading(true)
    getTracks().then((data) => {
      return data.json()

    }).catch(error => {
      setIsError(error);
    }).then(data => {
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
            <CenterBlock isError={isError} isLoading={isLoading} tracks={tracks} heading={"Треки"} />
            <SideBar />
          </MainContainer>
          {currentTrack && <PlayerBar isLoading={isLoading} currentTrack={currentTrack} />}
          <Footer />
        </Container>
      </Wrapper>
    </>
  );
};