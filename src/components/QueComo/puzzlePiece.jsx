import * as React from 'react';

export const PuzzlePiece = (props) => {
    return (
        <figure className={props.figureClass}>
            <img src={props.src} alt={props.alt} className={props.imgClass}/>
        </figure>
    )
}