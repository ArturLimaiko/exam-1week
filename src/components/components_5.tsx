import React from 'react';


type PropsType = {
    city: string        // 'minsk'
    country: string     // 'belarus'
    coords?: string     // '53.917501,27.604851'
}


// Компонент Wrapper1 не принимает пропсы, но внутри него определен объект A, который содержит значения для city, country и coords.
// Компонент Wrapper1 отображает компонент PropsComponent1, передавая ему значения city и country из объекта A.
export const Wrapper1 = () => {
    const A = {
        city: 'minsk',
        country: 'belarus',
        coords: '53.917501,27.604851'
    }

    return <PropsComponent1 city={A.city} country={A.country}/>
}


//Компонент PropsComponent1 принимает пропсы city, country и coords типа PropsType.
// Внутри компонента они отображаются в виде текста, который содержит значения этих пропсов.
export const PropsComponent1: React.FC<PropsType> = (props) => {
    return <div>
        City: {props.city},
        Country: {props.country},
        coords: {props.coords}
    </div>
}


//Компонент Components5 отображает компонент Wrapper1.
export const Components5 = () => {
    return <div>
        <Wrapper1/>
    </div>
}

// Что МИНИМАЛЬНО ДОСТАТОЧНО нужно дописать в строке 8 (cтрока с ошибкой), чтобы не было ошибки
