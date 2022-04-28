import { useSelector } from "react-redux"
import { ArticleModel } from "../../models/article"
import { FavArticle } from "./FavArticle"
import { nanoid } from "nanoid"
import "./Sidenav.scss"


export function Sidenav() {
    const favArticles: ArticleModel[] = useSelector((state: any) => JSON.parse(state.userArticles.value).articles)
    const theme = useSelector((state: any) => state.theme.value)


    const favArticlesElement = favArticles.map((article: ArticleModel) => {
        return article.userFav &&
            <FavArticle
                key={nanoid()}
                title={article.title}
                url={article.url}
                userFav={article.userFav}
            />
    })

    return (
        // create a state list of favourite articles to display here in a carousel way and manage his state using redux/toolkit
        <>
            <div className={theme.theme + "--sidenav"}>
                <div className="sidenav--title">
                    <h2>Favourite Articles</h2>
                    <p>The list of your preferred articles</p>
                </div>
                {favArticlesElement}
            </div>
            <hr></hr>
        </>
    )
}