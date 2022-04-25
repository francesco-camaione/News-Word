import React from "react";
import { createRoot } from "react-dom/client"
import "./assets/scss/index.scss"
import { HomePage } from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root")!)

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Routes>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
)
