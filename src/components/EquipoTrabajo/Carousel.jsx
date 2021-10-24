import React, { useState, useContext } from 'react';
import { context } from '../../context';
import { Member } from './Member';
import { Dot } from './Dot';

export const Carousel = () => {
    {/*Creamos el estado para la variable counter la cual llevará la cuenta del item/miembro del carousel en el que estemos*/}
    const { members } = useContext(context);
    const [counter, setCounter] = useState(0);
    let memberComponents = [];
    {/*Recorremos a través de un .map() el array members el cual traemos del contexto y con los datos de cada miembro/item creamos un componente Member que será enviado al array de componentes memberComponents*/}
    members ? memberComponents = members.map((member, index) => <Member key={index} photoUrl={member.fields.image.fields.file.url} name={member.fields.name} role={member.fields.role} />): memberComponents=[];
    {/*Función encargada de ir hacia adelante y de darle un nuevo valor al contador, si llega a la última posición reinicia el contador en 0*/}
    function goNext() {
        if (counter+1 === members.length) {
            setCounter(0);
        } else {
            setCounter(counter + 1)
        }
    }
    {/*Función encargada de ir hacia atrás y de darle un nuevo valor al contador, si llega a la primera posición reinicia el contador en la longitud del array members-1*/}
    function goBack() {
        if (counter-1 < 0) {
            setCounter(members.length-1);
        } else {
            setCounter(counter - 1)
        }
    }

    return (
        <div className="carousel">
            {/*Botón que dispara la función de goBack()*/}
            <button className="carousel__button" type="button" onClick={() => goBack()}> {"<"} </button>

            {/*Renderizado del componente en el índice que se encuentre el contador*/}
            { memberComponents ? memberComponents[counter] : <h1>Loading...</h1>}
            {/*En este punto recorremos de nuevo el array que viene del contexto para poner exactamente esa cantidad de componentes Dots, estos componentes reciben el parámatro active en el cual si coincide el index con el valor del contador actual entonces enviaremos el string "Active" o true*/}
            <div className="dots">
                { members ? members.map((member, index) => <Dot active={ index === counter && "active" } key={"Dot-"+index} /> ) : <span>...</span>}
            </div>
            {/*Botón que dispara la función de goNext()*/}
            <button className="carousel__button" type="button" onClick={() => goNext()}> {">"} </button>
        </div>
        

    );
}