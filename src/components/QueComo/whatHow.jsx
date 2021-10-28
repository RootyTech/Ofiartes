import React from 'react';

/** COMPONENTE SVG */
import { PuzzlePiece } from './puzzlePiece';

export const WhatHow = (props) => {
    return (
        <div className={props.clase}>
            <PuzzlePiece ancho="24px" alto="24px" clase={props.clase2}/>
            <h3>{props.subtitle}</h3>
            <p>{props.text}</p>
        </div>
    )
}