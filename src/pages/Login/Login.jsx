import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({ setUser }) => {
    const navigate = useNavigate()
    const loginUser = () => {
        localStorage.setItem("token", "tim")
        setUser("tim")
        navigate("/")
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={loginUser}>Login</button>
        </div>
    )
}