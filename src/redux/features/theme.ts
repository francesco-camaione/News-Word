import { createSlice } from "@reduxjs/toolkit";

const initialState: any = localStorage.getItem("theme") !== null ? localStorage.getItem("theme") : JSON.stringify({ theme: "dark" })

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