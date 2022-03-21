import React, { useState, useContext } from 'react';
import { context } from '../../context';
import { MediaQueryDesktop, MediaQueryTablet } from '../../lib/mediaQuery';
import { Dot } from './Dot';
import { DotLoader, NewsLoader } from './Skeleton';

export const Carousel = () => {
    {/*Creamos el estado para la variable counter la cual llevará la cuenta del item/miembro del carousel en el que estemos*/}
    const { news } = useContext(context);
    const [counter, setCounter] = useState(0);

    {/*Función encargada de ir hacia adelante y de darle un nuevo valor al contador, si llega a la última posición reinicia el contador en 0*/}
    function goNext() {
        if (counter + 1  === news.length) {
            setCounter(0);
        } else {
            setCounter(counter + 1);
        }
    }
    {/*Función encargada de ir hacia atrás y de darle un nuevo valor al contador, si llega a la primera posición reinicia el contador en la longitud del array members-1*/}
    function goBack() {
        if (counter - 1 < 0) {
            setCounter(news.length-1);
        } else {
            setCounter(counter - 1);
        }
    }   

    return (
        <div className="carousel">

            {/*Renderizado del componente en el índice que se encuentre el contador*/}
            {/*Renderizado del contenedor de que contiene los miembros*/}
            {/*Contenedor de que contiene los miembros. Aquí preguntamos si memberComponents ya tiene elementos, si es así entonces podremos renderizar los elementos dependiendo del tamaño de pantalla en el que nos encontremos*/}

            {console.log(news)}
            { 
                news?.length ?
                <>
                    {/*Botón que dispara la función de goBack()*/}
                    <button className="carousel__button" type="button" onClick={() => goBack()}> {"<"} </button>
                    <div className="carousel__container">
                        {/* <img src={news[counter].fields.image.fields.file.url} alt={`Imagen de la novedad${news[counter].fields.name}`} /> */}
                    </div>
                    {/*Botón que dispara la función de goNext()*/}
                    <button className="carousel__button" type="button" onClick={() => goNext()}> {">"} </button>

                </>            
                : 
                <NewsLoader {...{
                    widthviewbox: 200,
                    heightviewbox: 200,
                    contentwidth: 360,
                    xpositions: ["25%"],
                }} />
            }
            {/*En este punto recorremos de nuevo el array que viene del contexto para poner exactamente esa cantidad de componentes Dots, estos componentes reciben el parámatro active en el cual si coincide el index con el valor del contador actual entonces enviaremos el string "Active" o true*/}
            <div className="dots">
                { 
                    news ? 
                    news.map((newsElement, index) => 
                    <Dot 
                        /*Enviamos como parámetros la función setCounter para modificar el estado del contador en el componente dots en el momento en el que se le de click a alguno de los puntos, además de eso enviamos el index ya que este será el nuevo valor del contador*/
                        setCounter={setCounter} 
                        index={index} 
                        active={ index === counter && "active" } 
                        key={"Dot-"+index} 
                    /> ) 
                    /*En caso de no encotrar ningún elemento aún renderizará lo siguiente*/
                    : MediaQueryDesktop() ?
                    <DotLoader {...{
                        widthviewbox: 200,
                        heightviewbox: 8,
                        radius: 1.7,
                        xpositions: [90, 100, 110]
                    }} />
                    : MediaQueryTablet() ?
                    <DotLoader {...{
                        widthviewbox: 200,
                        heightviewbox: 8,
                        radius: 2.5,
                        xpositions: [85, 100, 115]
                    }} />
                    :
                    <DotLoader {...{
                        widthviewbox: 200,
                        heightviewbox: 8,
                        radius: 4,
                        xpositions: [85, 100, 115]
                    }} />
                }
            </div>
        </div>
        

    );
}