import { ArticleModel } from './../../models/article';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getArticles } from '../../services/getArticles';

// create a logic to add to state the user favourite articles
const initialState = localStorage.getItem("articles") !== undefined ? localStorage.getItem("articles") : getArticles()

export const userArticles = createSlice({
    name: "articles",
    initialState: { value: initialState },
    reducers: {
        // payload would act as keyword for the new search-articles and passed to the getArticles()
        searchArticles: (state, _payload: PayloadAction) => {
            state.value = getArticles()
        },

        setFavourite: (state, action) => {
            const articles: any = localStorage.getItem("articles")
            const json_articles = JSON.parse(articles).articles
            const article_list = json_articles.map((article: ArticleModel) => {
                if (action.payload.title === article.title) {
                    article.userFav ? article.userFav = false : article.userFav = true
                }
                return article
            })
            const data = JSON.stringify({ articles: article_list })
            localStorage.setItem("articles", data)
            state.value = data
        },
    }
})

export const { setFavourite, searchArticles } = userArticles.actions
export default userArticles.reducer
