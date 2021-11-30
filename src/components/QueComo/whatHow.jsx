import React from 'react';

/** COMPONENTE SVG */
import { PuzzlePiece } from './puzzlePiece';

export const WhatHow = (props) => {
    return (
        <div className={props.clase}>
            <div className="aboutUs__puzzle">
                <div className={props.clase4}></div>
                <PuzzlePiece figureClass={props.clase3} imgClass={props.clase2} src={props.src} alt={props.alt}/>
                <div className={props.clase5}></div>
            </div>
            <div className="aboutUs__text">
                <h3>{props.subtitle}</h3>
                <p>{props.text}</p>
                {props.children}
            </div>
        </div>
    )
}