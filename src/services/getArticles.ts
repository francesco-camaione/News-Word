import { nanoid } from 'nanoid';
import { ArticleModel } from './../models/article';
import { fetchArticles } from "../api/articles";
import articles from "../data/articles.json"

export async function getArticles() {
    const response = await fetchArticles()
        .then(() => {
            const storage = localStorage.getItem("articles")
            const data = storage === null ? articles : JSON.parse(storage)
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
    return await response
}
