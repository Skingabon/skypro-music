import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../app.styled";
import { Container } from "../NotFound/notFound.styled";

export const Login = ({ setUser }) => {
    const navigate = useNavigate()
    const loginUser = () => {
        localStorage.setItem("token", "tim")
        setUser("tim")
        navigate("/")
    };
    const regUser = () => {
        navigate("/Registration")
    };

    return (
        <div className="wrapper">
        <Container className="container">
            <h1>Login</h1>
            <Button onClick={loginUser}>Login</Button>
            <Button onClick={regUser}>Registration</Button>
            </Container>
        </div>
    )
}