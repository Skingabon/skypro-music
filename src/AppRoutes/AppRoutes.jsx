import React, { useState } from "react";
import { Route, Routes } from "react-router";
import { Registration } from "../pages/Registration/Registration";
import { Login } from "../pages/Login/Login";
import { NotFound } from "../pages/NotFound/NotFound";
import { Favorites } from "../pages/Favorites/Favorites";
import { Category } from "../pages/Category/Category"
import { ProtectedRoute } from "./ProtectedRoutes";
import { Main } from "../pages/Main/Main";


export const AppRoutes = () => {

    const [user, setUser] = useState(localStorage.getItem("token"));
    const [currentTrack, setCurrentTrack] = useState(null);

    return (
        <Routes>
            <Route element={<ProtectedRoute isAllowed={user} />}  >
           
                <Route path="/" element={<Main currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}/>} />
                <Route path="/category/:id" element={<Category currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}/>} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<NotFound />} />
            </Route>



            <Route path="/login" element={<Login setUser={setUser}/>} />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
    );
};
