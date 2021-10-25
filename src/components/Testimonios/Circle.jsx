import React from 'react';

export const Circle = ({active}) => {

    import('./circle.sass');

    return (
        <div className={["circulo", active && "activo"].join(" ")}></div>
    );
};