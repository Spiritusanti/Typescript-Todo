import React from 'react';

interface ButtonProps {
    text: string;
}


const Button: React.FunctionComponent<ButtonProps> = (props) => {
    return (
        <button>{props.text}</button>
    )
}


export default Button;