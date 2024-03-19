import React, { useEffect, useState } from "react";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import { SideBar } from "../../components/SideBar/SideBar";
import { PlayerBar } from "../../components/PlayerBar/PlayerBar";
import { useParams } from "react-router-dom";
import { CenterBlock } from "../../components/CenterBlock/CenterBlock";
import { getTracks } from "../../Api/tracks";
import { Container, Footer, MainContainer, Wrapper } from "../../app.styled";
import { useTrackContext } from "../../context/track";

export const Category = () => {
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const [tracks, setTracks] = useState([]);
  const [isError, setIsError] = useState(null);
  const {currentTrack} = useTrackContext();

  useEffect(() => {
    setIsLoading(true);
    getTracks()
      .then((data) => {
        return data.json();
      })
      .catch((error) => {
        setIsError(error);
      })
      .then((data) => {
        setTracks(data);
        setIsLoading(false);
      });
  }, []);

  
  return (
    <>
      <Wrapper>
        <Container>
          <MainContainer>
            <NavMenu />
            <CenterBlock
              isError={isError}
              tracks={tracks}

              isLoading={isLoading}
              heading={`Category ${params.id}`}
            />

            <SideBar />
          </MainContainer>
          {currentTrack && (
            <PlayerBar isLoading={isLoading} currentTrack={currentTrack} />
          )}
          <Footer />
        </Container>
      </Wrapper>
    </>
  );
};
