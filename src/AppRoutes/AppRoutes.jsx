import React, { useState } from "react";
import { Route, Routes } from "react-router";
import { Main } from "../pages/Main/Main";
import { Registration } from "../pages/Registration/Registration";
import { Login } from "../pages/Login/Login";
import { NotFound } from "../pages/NotFound/NotFound";
import { Favorites } from "../pages/Favorites/Favorites";
import { Category } from "../pages/Category/Category"
import { ProtectedRoute } from "./ProtectedRoutes";


export const AppRoutes = () => {

    const [user, setUser] = useState(localStorage.getItem("token"));

    return (
        <Routes>
            <Route element={<ProtectedRoute isAllowed={user} />}  >
           
                <Route path="/" element={<Main />} />
                <Route path="/category/:id" element={<Category />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<NotFound />} />
            </Route>



            <Route path="/login" element={<Login setUser={setUser}/>} />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
    );
};

// Сделать динамические страницы (использовать useParams) 