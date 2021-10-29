import React from 'react';
import './Buttons.sass';

export const ButtonFill = ({ background, color, content }) => {
    return (
        <>
            <button className={`btn btn-fill btn-fill-${background} btn-text-${color}`}>{content}</button>
        </>
    )
}

export const ButtonBorder = ({ border, color, content }) => {
    return (
        <>
            <button className={`btn btn-border btn-border-${border} btn-text-${color}`}>{content}</button>
        </>
    )
}