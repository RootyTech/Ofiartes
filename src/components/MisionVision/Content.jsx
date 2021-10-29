import React from 'react';
import { ProgressPlugin } from 'webpack';
import './estilos_Content.sass';

export const Content = (props) =>{
    return(
        <div className= {`bloque ${props.color}`} >
            {props.children[0]}
            <div className="texto">
                {props.children[1]}
                <br />
                {props.children[2]}
            </div>
        </div>
    );
}