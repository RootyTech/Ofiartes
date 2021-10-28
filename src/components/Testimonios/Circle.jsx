import React from 'react';

export const Circle = ({active}) => {

    import(/* webpackChunkName: 'circle' */'./circle.sass');

    return (
        <div className={["circulo", active && "activo"].join(" ")}></div>
    );
};