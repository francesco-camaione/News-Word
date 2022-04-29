import { configureStore } from "@reduxjs/toolkit";
import userArticlesReducer from "../features/userArticles";
import themeReducer from "../features/theme"

export const store = configureStore({
    reducer: {
        userArticles: userArticlesReducer,
        theme: themeReducer,
    }
})