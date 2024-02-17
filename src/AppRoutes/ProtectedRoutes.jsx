import React from "react";
import { Navigate, Outlet } from "react-router-dom";


export const ProtectedRoute = ({ redirectPath = "/login", isAllowed }) => {
    console.log(Boolean(isAllowed));
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace={true} />;
    }
    return <Outlet />; //!!!!!!!!!!!!!!!!!!!!!!!
};