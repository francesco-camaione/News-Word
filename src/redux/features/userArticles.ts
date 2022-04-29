import { ArticleModel } from './../../models/article';
import { createSlice } from "@reduxjs/toolkit";
import articles_data from "../../data/articles.json"

function getData() {
    // getArticles, then
    const response = JSON.stringify(articles_data)
    localStorage.setItem("articles", response)
    return response
}

const initialState = localStorage.getItem("articles") === null ? getData() : localStorage.getItem("articles")

export const userArticles = createSlice({
    name: "articles",
    initialState: { value: initialState },
    reducers: {
        searchArticles: (state) => {
            // logic to get data from api
            state.value = getData()
        },
        setFavourite: (state, action) => {
            const articles: string | null = localStorage.getItem("articles")
            const json_articles = articles !== null && JSON.parse(articles).articles
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