import React, { useContext, useEffect, useState } from 'react';
import { MediaQueryTablet, MediaQueryDesktop, MediaQueryDesktopL } from '../../lib/mediaQuery';

import { context } from '../../context';

import { FaRegClock } from 'react-icons/fa';
import {ButtonBorder} from '../commons/Buttons'

//importación de imágenes
import img_EtiquetaEmpresarial from '../../assets/EtiquetaEmpresarial.svg';
import img_EtiquetaFormación from '../../assets/EtiquetaFormación.svg';
import { debug } from 'webpack';

export const TarjetaCursos = () =>{
    import ('./estilos.sass');

    const [widthSize, setWidthSize] = useState("Mobile"); // Estado que se actualiza cuando se cargue la página o cuando se redimensione esta

    const ResizeHeader = () => { // Constante que guarda la función que valida con que media Query se está trabajando
        // MediaQueryDesktopL() -> Verdadero si se pasa de 1600px
        if(MediaQueryDesktopL()){
            setWidthSize("Desktop L"); // Se cambia la variable, para volver a correr el código
            //import('./desktop_L.sass'); // Se importan los estilos correspondientes a Desktop
            //console.log("Estilos aplicados Desktop L");
        // MediaQueryDesktop() -> Verdadero si se pasa de 1024px
        }else if (MediaQueryDesktop()){
            setWidthSize("Desktop"); // Se cambia la variable, para volver a correr el código
            import('./desktop.sass'); // Se importan los estilos correspondientes a Desktop
            console.log("Estilos aplicados Desktop");
        // MediaQueryTablet() -> Verdadero si se pasa de 768px
        } else if (MediaQueryTablet()) {
            setWidthSize("Tablet"); // Se cambia la variable, para volver a correr el código
            import('./tablet.sass'); // Se importan los estilos correspondientes a Tablet
            console.log("Estilos aplicados Tablet");
        } else {
            setWidthSize("Mobile"); // Se cambia la variable, para volver a correr el código
            console.log("Estilos aplicados Mobile");
        }
    };

    useEffect(() => {
        window.addEventListener('resize', ResizeHeader); // REALIZAR LA FUNCIÓN CUANDO LA PÁGINA CAMBIA DE TAMAÑO (EN TIEMPO REAL)
        window.addEventListener('load', ResizeHeader); // REALIZAR LA FUNCIÓN CUANDO LA PÁGINA CARGA POR PRIMERA VEZ
        return () => {
            window.removeEventListener('resize', ResizeHeader); // REMOVER EVENTLISTENER
            window.removeEventListener('load', ResizeHeader); // REMOVER EVENTLISTENER
        }
    }, []);

    const {talleres} = useContext(context); /*asi traigo el objeto contexto*/

    let puntero = 0;
    function colores(index){
        let border= "";
        let color= "";
        let clase = "";
        if(index === 0){
            clase = "blanco"
            border = "black"
            color ="black"
        }
        else if(index === 1){
            clase = "negro" 
            border = "white"
            color ="white"
        }
        else if(index === 2){
            clase = "blanco" 
            border = "black"
            color ="black"
        }
        else{
            index = 0;
            clase = "blanco"
            border = "black"
            color ="black"
        }
        return{
            clase,
            border,
            color
        };
    };
    
    function imagen(tipo){
        let etiqueta = "";
        let alt = "";
        if(tipo == 'Empresarial'){
            etiqueta = img_EtiquetaEmpresarial
            alt = "taller empresarial"
        }
        else{
            etiqueta = img_EtiquetaFormación
            alt = "taller de formación"
        }
        return {
            etiqueta,
            alt
        };   
    }
    return(
        <>
            <h2>Algunos cursos que dictamos</h2> 
            <section className="cards">
                {
                talleres ?
                    talleres.slice(0,3).map((taller,index) => (
                        <div className= {`cards_cursos`} key= {`taller-${index}`}>
                            <div className="padre">
                                <div className="card-top">
                                    <img src={`${taller.fields.image.fields.file.url}`} alt={`${taller.fields.image.fields.description}`} />
                                </div>
                                <div className="card-bottom"></div>
                            </div>
                            <div className={`card-content ${colores(index).clase}`}> 
                                <h3>{taller.fields.title}</h3>
                                <br />
                                <p>{taller.fields.description.substring(0,50) + "..."}</p>
                                <br />
                                <div className="icon__clock">
                                    <i><FaRegClock/></i>
                                    <p>{taller.fields.duration}</p>
                                </div>
                                <img src={`${imagen(`${taller.fields.type}`).etiqueta}`} alt= {`${imagen(`${taller.fields.type}`).alt}`} />
                                <br />
                                <ButtonBorder border= {`${colores(index).border}`} color= {`${colores(index).color}`} content="Saber más"/>
                            </div>
                        </div>
                    ))
                :<h2>Loading...</h2>
                }
            </section>
            <div className="button_final">
                <ButtonBorder border= "black" color= "black" content="Ver todos los talleres"/>
            </div>
        </>
        
    )
}