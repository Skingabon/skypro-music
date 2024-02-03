import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { About } from "./pages/About/About";
import { NotFound } from "./pages/not-found/not-found";
import { Profile } from "./pages/profile/profile";



export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="*" element={<NotFound/>} />

        </Routes>
    );
};