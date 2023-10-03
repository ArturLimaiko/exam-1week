import React from 'react';


type NewsType = {
    title: string
    author: string
}

type ArticleType = {
    title: string
    date: string
    text: string
}

type PagePropsType = {
    pageData: {
        news: NewsType[]
        mainArticle: ArticleType
    }
}


export const Page: React.FC<PagePropsType> = (props) => {
    return <div>
        <article>
            <h1>Название: {props.pageData.mainArticle.title}</h1>
            <div>{props.pageData.mainArticle.date}</div>
            <div>{props.pageData.mainArticle.text}</div>
        </article>
        <aside>Articles:
            <ul>
                {props.pageData.news.map(news => <li>{news.title}, {news.author}</li>)}
            </ul>
        </aside>
    </div>
}


export const Components3 = () => {
    const pageData = {
        news: [
            {title: "Новость 1", author: 'Гена Криворуков'},
            {title: "Новость 2", author: 'Алла Томаровна'},
            {title: "Новость 3", author: 'Алексей Сапожник'},
            {title: "Новость 4", author: 'Галя Нананьева'},
        ],
        mainArticle: {
            title: "Главная статья",
            date: "21.12.2033",
            text: "Текс главной статьи вот тут должен быть"
        }
    }
    return <div>
        <Page pageData={pageData}/>
    </div>
};