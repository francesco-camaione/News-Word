import { useDispatch } from "react-redux"
import "./Article.scss"
import { setFavourite } from "../../redux/features/userArticles"

interface Props {
    title: string,
    source_name: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    userFav: boolean,
}

export function Article(props: Props) {
    const dispatch = useDispatch()
    const full_date = new Date(props.publishedAt)
    const date = full_date.getDay() + "-" + full_date.getMonth() + "-" + full_date.getFullYear()
    const heart_img = props.userFav ? <>&#128420;</> : <>&#129293;</>

    return (
        <article className="article--container">
            <img src={props.urlToImage} className="image" loading="lazy" alt="" />
            <h2 className="title">{props.title}</h2>
            <h4 className="source">{props.source_name}</h4>
            <p className="description">{props.description}</p>
            <div className="article_footer">
                <p className="publishedAt">Published on: {date}</p>
                <button onClick={() => dispatch(setFavourite(props))} className="fav--button">{heart_img}</button>
                <a href={props.url}><button className="link_button">Visit</button></a>
            </div>
        </article>
    )
}