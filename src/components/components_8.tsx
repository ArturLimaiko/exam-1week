import React from 'react';


 const CrazyButton = (props: any) => {

    const style = {
        color: props.fontColor,
        backgroundColor: props.bgColor
    }

    return <button style={style}>
        {props.title }
    </button>
}

export const Components8 = () => {
    return (
        <div>
            <CrazyButton/>
        </div>
    );
};

