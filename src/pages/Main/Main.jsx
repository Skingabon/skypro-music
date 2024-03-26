import React from "react";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import { CenterBlock } from "../../components/CenterBlock/CenterBlock";
import { SideBar } from "../../components/SideBar/SideBar";
import { PlayerBar } from "../../components/PlayerBar/PlayerBar";
import { Container, Footer, MainContainer, Wrapper } from "../../app.styled";
import { useSelector } from "react-redux";
import { useGetTracksQuery } from "../../Api/tracksApi";




export const Main = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(null);
  // const [tracks, setTracks] = useState([])
  const { currentTrack } = useSelector((state) => state.tracks)
  const { data: tracks, error, isLoading, } = useGetTracksQuery()
  


  // useEffect(() => {
  //   setIsLoading(true)
  //   getTracks().then((data) => {
  //     return data.json()

  //   }).catch(error => {
  //     setIsError(error);
  //   }).then(data => {
  //     setTracks(data)
  //     setIsLoading(false)
  //   })
  // }, []);



  return (
    <>
      {/* <GlobalStyle/> */}
      <Wrapper>
        <Container>
          <MainContainer>
            <NavMenu />
            <CenterBlock isError={error} isLoading={isLoading} tracks={tracks} heading={"Треки"} />
            <SideBar />
          </MainContainer>
          {currentTrack && <PlayerBar isLoading={isLoading} currentTrack={currentTrack} tracks={tracks} />}
          <Footer />
        </Container>
      </Wrapper>
    </>
  );
};