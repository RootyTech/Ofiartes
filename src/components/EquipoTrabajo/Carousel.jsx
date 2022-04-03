import React, { useState, useContext } from 'react';
import { context } from '../../context';
import { Member } from './Member';
import { Dot } from './Dot';
import { MemberLoader, DotLoader } from './Skeleton';
import { MediaQueryMobile365, MediaQueryTablet } from '../../lib/mediaQuery';

export const Carousel = () => {
    {/*Creamos el estado para la variable counter la cual llevará la cuenta del item/miembro del carousel en el que estemos*/}
    const { members } = useContext(context);
    const [counter, setCounter] = useState(0);
    let memberComponents = [];
    {/*Recorremos a través de un .map() el array members el cual traemos del contexto y con los datos de cada miembro/item creamos un componente Member que será enviado al array de componentes memberComponents*/}
    members ? memberComponents = members.map((member, index) => <Member key={index} photoUrl={member.fields.image.fields?.file.url} name={member.fields.name} role={member.fields.role} />): memberComponents=[];
    debugger
    {/*Función encargada de ir hacia adelante y de darle un nuevo valor al contador, si llega a la última posición reinicia el contador en 0*/}
    function goNext() {
        if (counter + 1  === members.length) {
            setCounter(0);
        } else {
            setCounter(counter + 1);
        }
    }
    {/*Función encargada de ir hacia atrás y de darle un nuevo valor al contador, si llega a la primera posición reinicia el contador en la longitud del array members-1*/}
    function goBack() {
        if (counter - 1 < 0) {
            setCounter(members.length-1);
        } else {
            setCounter(counter - 1);
        }
    }
    

    return (
        <div className="carousel">
            

            {/*Renderizado del componente en el índice que se encuentre el contador*/}
            {/*Renderizado del contenedor de que contiene los miembros*/}
            {/*Contenedor de que contiene los miembros. Aquí preguntamos si memberComponents ya tiene elementos, si es así entonces podremos renderizar los elementos dependiendo del tamaño de pantalla en el que nos encontremos*/}

            {
                
                memberComponents.length != 0 ?
                <>
                    {/*Botón que dispara la función de goBack()*/}
                    <button className="carousel__button" type="button" onClick={() => goBack()}> {"<"} </button>
                    <div className="carousel__container">
                        
                        {     
                        MediaQueryTablet() ?
                        <>
                            {memberComponents[counter]}
                            {/*Volvemos a preguntar si el siguiente elemento del contador (counter +1) es igual a la longitud de la lista, si es así entonces renderzamos en ese punto el primer item de la lista (posición 0), sino entonces el siguiente*/
                            memberComponents[counter+1 === memberComponents.length ? 0 : counter+1]}
                            {/*En este punto la lógica cambia debido a que preguntamos por el segundo siguiente (counter +2), si ese segundo siguiente + 2 tiene exactamente la longitud de la lista entonces renderizaremos en este punto el primero de la lista (posición 0), en caso de que ese segundo siguiente + 2 se pase de la longitud de la lista entonces renderizamos el segundo de la lista (posición 1), si no se cumple ninguna de estas condiciones entonces renderizamos ese segundo siguiente (counter + 2)  */
                            memberComponents[counter+2 > memberComponents.length ? 1 : counter+2 === memberComponents.length ? 0 : counter+2]}
                        </> :
                        MediaQueryMobile365() ?
                        <> 
                            {memberComponents[counter]}
                            {/*En la siguiente línea preguntamos si el siguiente item tendrá la longitud de memberComponents, en caso de ser el último item de la lista, entonces habrá que renderizar el primer elemento de la lista (posición 0), si no es así entonces renderizamos el siguiente (counter + 1)*/}
                            {memberComponents[counter+1 === memberComponents.length ? 0 : counter+1]}
                        </>:
                        window.matchMedia("(min-width: 0px)").matches ?
                        <>
                            {memberComponents[counter]}
                        </>:
                        null
                        }
                    </div>
                    {/*Botón que dispara la función de goNext()*/}
                    <button className="carousel__button" type="button" onClick={() => goNext()}> {">"} </button>
                </>
                :
                <div className="carousel__container">
                    {
                        MediaQueryTablet() ?
                        <>  
                            <MemberLoader {...{
                            widthviewbox: 200,
                            heightviewbox: 150,
                            contentwidth: 360,
                            xpositions: [50, 75, 100],
                            }} />
                            <MemberLoader {...{
                            widthviewbox: 200,
                            heightviewbox: 150,
                            contentwidth: 360,
                            xpositions: [50, 75, 100],
                            }} />
                            <MemberLoader {...{
                            widthviewbox: 200,
                            heightviewbox: 150,
                            contentwidth: 360,
                            xpositions: [50, 75, 100],
                            }} />
                        </>
                        : MediaQueryMobile365() ?
                        <>
                            <MemberLoader {...{
                            widthviewbox: 200,
                            heightviewbox: 150,
                            contentwidth: 360,
                            xpositions: [50, 75, 100],
                            }} />
                            <MemberLoader {...{
                            widthviewbox: 200,
                            heightviewbox: 150,
                            contentwidth: 360,
                            xpositions: [50, 75, 100],
                            }} />
                        </>    
                        :
                        <MemberLoader {...{
                            widthviewbox: 200,
                            heightviewbox: 150,
                            contentwidth: 360,
                            xpositions: [50, 75, 100],
                        }} />
                    }
                </div>
            }
            {/*En este punto recorremos de nuevo el array que viene del contexto para poner exactamente esa cantidad de componentes Dots, estos componentes reciben el parámatro active en el cual si coincide el index con el valor del contador actual entonces enviaremos el string "Active" o true*/}
            <div className="dots">
                { members ? members.map((member, index) => 
                <Dot 
                /*Enviamos como parámetros la función setCounter para modificar el estado del contador en el componente dots en el momento en el que se le de click a alguno de los puntos, además de eso enviamos el index ya que este será el nuevo valor del contador*/
                setCounter={setCounter} 
                index={index} 
                active={ index === counter && "active" } 
                key={"Dot-"+index} /> ) 
                /*En caso de no encotrar ningún elemento aún renderizará lo siguiente*/
                : MediaQueryTablet() ?
                <DotLoader {...{
                    widthviewbox: 200,
                    heightviewbox: 8,
                    radius: 1.7,
                    xpositions: [90, 100, 110]
                }} /> 
                : MediaQueryMobile365() ?
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