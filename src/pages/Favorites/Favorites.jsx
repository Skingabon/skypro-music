import React from "react";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import { SideBar } from "../../components/SideBar/SideBar";
import { PlayerBar } from "../../components/PlayerBar/PlayerBar";
import { CenterBlock } from "../../components/CenterBlock/CenterBlock";
import { Container, Footer, MainContainer, Wrapper } from "../../app.styled";
import { useSelector } from "react-redux";
import { useGetFavoriteTracksQuery } from "../../Api/tracksApi";

export const Favorites = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [tracks, setTracks] = useState([]);
  // const [isError, setIsError] = useState(null);
  const { currentTrack } = useSelector((state) => state.tracks)
  const { data: tracks, error, isLoading, } = useGetFavoriteTracksQuery()

  // useEffect(() => {
  //   setIsLoading(true);
  //   getTracks()
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .catch((error) => {
  //       setIsError(error);
  //     })
  //     .then((data) => {
  //       setTracks(data);
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    <>
      {/* <GlobalStyle/> */}
      <Wrapper>
        <Container>
          <MainContainer>
            <NavMenu />
            <CenterBlock
              isError={error}
              tracks={tracks}
             
              isLoading={isLoading}
              heading={"Мои треки"}
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
