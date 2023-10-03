import React from 'react';



//Что нужно написать вместо ххх, что бы код работал?

type UserPropsType = {
    name: string
    description: string
}
export const User: React.FC<UserPropsType> = (props) => {
    return <div>
        <h1>Name: {props.name}</h1>
        <div>Description: {props.description}</div>
    </div>
}


export const Components9 = () => {
    return (
        <div>
           <User name={'Title'} description={'This is some title'}/>
        </div>
    );
};