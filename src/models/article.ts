interface Source{
    id: unknown,
    name: string,
}

export interface ArticleModel {
    id: number,
    source: Source, 
    author: unknown,
    title: string,
    description: string,
    url: string ,
    urlToImage: string,
    publishedAt: string,
    content: string,
    userFav: boolean,
}