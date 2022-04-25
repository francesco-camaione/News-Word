import { useSelector } from "react-redux";
import { Navbar } from "../components/Navbar";

export function About() {
    const theme = useSelector((state: any) => state.theme.value)
    return (
        <div className={theme.theme}>
            <Navbar />
            <section style={{ textAlign: "center", color: "red" }}>
                This is a web app built using <a href="https://newsapi.org/" style={{ color: "red" }}>https://newsapi.org/</a> API, which allows 100 free request per day.
            </section>
        </div>
    )
}