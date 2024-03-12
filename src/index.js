import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TrackProvider } from "./context/track";
import { UserProvider } from "./context/user";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
    <TrackProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TrackProvider>
    </UserProvider>
  </React.StrictMode>
);
