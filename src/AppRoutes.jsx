import React from "react";
import { Route, Routes } from "react-router";
import { Main } from "./pages/Main/Main";
import { Registration } from "./pages/Registration/Registration";
import { Login } from "./pages/Login/Login";
import { NotFound } from "./pages/NotFound/NotFound";
import { Favorites } from "./pages/Favorites/Favorites";
import { Category } from "./pages/Category/Category"


export const AppRoutes = () => {
    return (
       <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/" element={<Category />} />
        <Route path="/" element={<Favorites />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Registration />} />
        <Route path="/" element={<NotFound />} />

       </Routes>
    );
};