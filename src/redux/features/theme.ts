import { createSlice } from "@reduxjs/toolkit";

// check user browser-theme and load website with that theme 
const browser_theme: boolean = window.matchMedia("(prefers-color-scheme: dark)").matches
const initialState: any = localStorage.getItem("theme") !== null ? localStorage.getItem("theme") : JSON.stringify({ theme: browser_theme ? "dark" : "light" })
console.log(initialState)

export const theme = createSlice({
    name: "theme",
    initialState: { value: JSON.parse(initialState) },
    reducers: {
        setTheme: (state, action) => {
            const theme: object = { theme: action.payload }
            localStorage.setItem("theme", JSON.stringify(theme))
            state.value = theme
        },
    }
})

export const { setTheme } = theme.actions
export default theme.reducer