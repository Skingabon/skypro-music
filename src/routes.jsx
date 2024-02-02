import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main/Main.jsx";
import { About } from "./pages/About/About.jsx";



export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
};