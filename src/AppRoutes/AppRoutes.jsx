import React from "react";
import { Route, Routes } from "react-router";
import { NotFound } from "../pages/NotFound/NotFound";
import { Favorites } from "../pages/Favorites/Favorites";
import { Category } from "../pages/Category/Category";
import { ProtectedRoute } from "./ProtectedRoutes";
import { Main } from "../pages/Main/Main";
import { AuthPage } from "../pages/Auth/AuthPage";
import { useTrackContext } from "../context/track";

export const AppRoutes = () => {
  
  const {user} = useTrackContext()




  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={user} />}>
        <Route
          path="/"
          element={
            <Main
           
             
            />
          }
        />
        <Route
          path="/category/:id"
          element={
            <Category


            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites

            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="/login" element={<AuthPage isLoginMode={true} />} />
      <Route path="/registration" element={<AuthPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
