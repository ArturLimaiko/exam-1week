import React from 'react';

// Что нужно написать вместо xxx и yyy?
// Ответ дайте через пробел, например: blabla onClick(props)

type PagePropsType = {
    age: number
    name: string
    avatarUrl?: string
}

type UserPropsType = {
    a: number
    n: string
}

export const Page: React.FC<PagePropsType> = (props) => {
    return <User a={props.age} n={props.name} />
}


export const User: React.FC<UserPropsType> = (props) => {
    return <div>name: {props.n}, age: {props.a}</div>
}


export const Components10 = () => {
    return (
        <div>
            <User a={13231} n={'Some name'}/>
        </div>
    );
};
