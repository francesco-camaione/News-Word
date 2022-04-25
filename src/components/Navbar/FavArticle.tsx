import { useDispatch } from "react-redux"
import { setFavourite } from "../../redux/features/userArticles"
import "./FavArticle.scss"

interface Props {
    title: string,
    url: string,
    userFav: boolean,
}

export function FavArticle(props: Props) {
    const dispatch = useDispatch()
    const heart_img = props.userFav ? <>&#128420;</> : <>&#129293;</>

    return (
        <div className="fav-article--container">
            <h4>{props.title}</h4>
            <div className="article--actions">
                <a href={props.url}>&#128270;</a>
                <p onClick={() => dispatch(setFavourite(props))} className="fav--button">{heart_img}</p>
            </div>
        </div>
    )
} 
