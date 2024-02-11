import React from "react";
import { Container } from "./notFound.styled";
import { Button } from "../../app.styled";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate()
    const regUser = () => {
        navigate("/Registration")
    };
    const loginUser = () => {
        navigate("/")
    };
    return (
        <div className="wrapper">
            <Container className="container">
                <h1>NotFound </h1>
                <use xlinkHref="img/icon/sprite.svg#icon-pause-white"></use>

                <Button onClick={loginUser} >Главная</Button>
                <Button onClick={regUser}>Регистрация</Button>
            </Container>
        </div>
    )
}