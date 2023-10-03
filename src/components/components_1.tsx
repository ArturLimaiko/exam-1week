import React from 'react';


//Компонент Son принимает пропс name и отображает текст "I am son. My name is {props.name}".
const Son = (props: any) => {
    return <div>
        I am son. My name is {props.name}
    </div>
}


//Компонент Father принимает пропсы fatherName  и sonName. Он отображает текст "I am father. My name is {props.fatherName}" и компонент Son,
// передавая ему значение sonName в качестве пропса.
const Father = (props: any) => {
    return <div>
        I am father. My name is {props.fatherName}
        <Son name={props.sonName} />
    </div>
}

//Компонент Granny принимает пропсы fatherName и sonName. Он отображает текст "I am granny. My name is {props.grannyName}" и компонент Father,
// передавая ему значения fatherName и sonName в качестве пропсов.

const Granny = (props: any) => {
    return <div>
        I am granny. My name is {props.grannyName}
        <Father fatherName={props.fatherName} sonName={props.sonName} />
    </div>
}

//Компонент Grandpa принимает пропсы grandpaName, fatherName, sonName и grannyName. Он отображает текст "I am grandpa. My name is {props.grandpaName}" и компонент Granny
//, передавая ему значения fatherName, sonName и grannyName в качестве пропсов.
const Grandpa = (props: any) => {
    return <div>
        I im grandpa.My name is {props.grandpaName}
        <Granny fatherName={props.fatherName} sonName={props.sonName} grannyName={props.grannyName}/>
    </div>
}

//Компонент Components1 отображает компонент Grandpa, передавая ему значения для всех пропсов.
export const Components1 = (props: any) => {
    return (
        <div>
            <Grandpa grandpaName={'Дедуля'} fatherName={'Батя'} sonName={'Сын'} grannyName={'Бабуля'}/>
        </div>
    );
};
//Это происходит потому, что компонент Grandpa отображает компонент Granny, который отображает компонент Father, который отображает компонент Son.
// Каждый компонент передает свои пропсы дочернему компоненту, который использует их для отображения соответствующего текста.