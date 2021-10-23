import React from 'react';

export const Circle = ({active, index, state}) => {

    import('./circle.sass');

    return (
        <div onClick={() => state(index)} className={["circulo", active && "activo"].join(" ")}></div>
    );
};