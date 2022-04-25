import { Link } from "react-router-dom";
import { useState } from "react";
import { Sidenav } from "./Sidenav";
import "./Navbar.scss"
import { ThemeToggle } from "../ThemeToggle";
import { useSelector } from "react-redux";

export function Navbar() {
    const [nav_visibility, setNavVisibility] = useState(false)
    const theme = useSelector((state: any) => state.theme.value.theme)
    
    return (
        <nav className={theme + "--navbar"}>
            {nav_visibility && <Sidenav />}
            <ul>
                <span onClick={() => setNavVisibility(!nav_visibility)}>
                    &#9776;
                </span>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <ThemeToggle />
            </ul>
        </nav>
    )
}