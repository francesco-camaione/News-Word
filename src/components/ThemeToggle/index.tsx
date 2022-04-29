import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setTheme } from "../../redux/features/theme"
import "./ThemeToggle.css"

export function ThemeToggle() {
    const dispatch = useDispatch()
    const theme = useSelector((state: any) => state.theme.value.theme)
    const theme_emoji = theme === "dark" ? <> &#127770; </> : <> &#127774; </>

    return (<p onClick={() => dispatch(setTheme(theme === "dark" ? "light" : "dark"))} className="theme--icon">{theme_emoji}</p>)
}