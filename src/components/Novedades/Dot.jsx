import React from 'react';

export const Dot = ({active, index, setCounter}) => (
    /*Es aquí donde asignamos el evento de click el cual cambia el estado de la variable contador y la clase que establece si será un punto activo o no*/
    <span onClick={()=>{setCounter(index)}} className={["dot", active && "active"].join(" ")}></span>
)