import React from "react";
import { Container } from "./notFound.styled";
import { Button } from "../../app.styled";

export const NotFound = () => {
    return (
        <div className="wrapper">
            <Container className="container">
                <h1>NotFound </h1>
                <use xlinkHref="img/icon/sprite.svg#icon-pause-white"></use>

                <Button>Главная</Button>
            </Container>
        </div>
    )
}