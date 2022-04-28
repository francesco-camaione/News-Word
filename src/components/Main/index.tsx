import "./Main.scss"
import { nanoid } from "nanoid"
import { useRef } from "react"
import { Article } from "./Article"
import { ArticleModel } from "../../models/article"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { searchArticles } from "../../redux/features/userArticles"

export function Main() {
    const articles: ArticleModel[] = useSelector((state: any) => JSON.parse(state.userArticles.value).articles)
    const theme = useSelector((state: any) => state.theme.value)
    const keywords = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()
    // get data if keywords.length > 1 and store them in loadArticles state
    function getData(keywords: any) {
        keywords.length > 2 && dispatch(searchArticles())
    }

    const articlesElements: JSX.Element[] = articles.map((article: ArticleModel) => {
        return (
            <Article
                key={nanoid()}
                title={article.title}
                source_name={article.source.name}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}
                publishedAt={article.publishedAt}
                userFav={article.userFav}
            />
        )
    })

    return (
        <main className={theme.theme + "--main"}>
            <header className="header">
                <h1 className="title1">News-Word</h1>
                <p>Search newspaper's articles by keywords</p>
                <form className="form">
                    <input type="text" ref={keywords} aria-label="enter keywords"></input>
                    <button onClick={() => (getData(keywords.current?.value ))}><p>Search</p></button>
                </form>
            </header>
            <section className={theme.theme + "--articles"}>{articlesElements}</section>
        </main>
    )
}
