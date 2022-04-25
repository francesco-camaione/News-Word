import { Navbar } from "../components/Navbar"
import { Main } from "../components/Main"
import { Footer } from "../components/Footer"
import { useSelector } from "react-redux"

export function HomePage() {
    const theme = useSelector((state: any) => state.theme.value)
    return (
        <div className={theme.theme}>
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}