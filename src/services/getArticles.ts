import { nanoid } from 'nanoid';
import { ArticleModel } from './../models/article';
import { fetchArticles } from "../api/articles";
import articles from "../data/articles.json"

export function getArticles() {
    fetchArticles()
        .then(() => {
            const storage: any = localStorage.getItem("articles")
            const data = storage.length > 1 ? JSON.parse(storage) : articles
            const article_list: ArticleModel[] = data.articles.map((article: ArticleModel) => {
                return {
                    id: nanoid(),
                    source: article.source,
                    author: article.author,
                    title: article.title,
                    description: article.description,
                    url: article.url,
                    urlToImage: article.urlToImage,
                    publishedAt: article.publishedAt,
                    content: article.content,
                    userFav: false,
                }
            })
            localStorage.setItem("articles", JSON.stringify({ articles: article_list }))
        })
        .catch((error) => alert(error))
    return localStorage.getItem("articles")
}
