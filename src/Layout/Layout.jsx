import React from "react";
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { Container, Footer, MainContainer, Wrapper } from "../app.styled";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { SideBar } from "../components/SideBar/SideBar";
import { PlayerBar } from "../components/PlayerBar/PlayerBar";

export const Layout = () => {
    const { currentTrack } = useSelector((state) => state.tracks)

    return (
        <>
            <Wrapper>
                <Container>
                    <MainContainer>
                        <NavMenu />
                        <Outlet />
                        <SideBar />
                    </MainContainer>
                    {currentTrack && <PlayerBar currentTrack={currentTrack}/>}
                    <Footer />
                </Container>
            </Wrapper>
        </>
    )
}