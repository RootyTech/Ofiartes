import React, { useContext, useEffect, useState } from 'react';
import { MediaQueryTablet, MediaQueryDesktop} from '../../lib/mediaQuery';
import { LoaderTalleres } from './skeleton';

import { FaSearch } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import { context } from '../../context'; 
import {ButtonBorder} from '../commons/Buttons'

//importación de imágenes
import img_Etiqueta_E from '../../assets/Etiqueta_E.svg';
import img_Etiqueta_F from '../../assets/Etiqueta_F.svg';
import img_Etiqueta_Roja from '../../assets/Etiqueta_empresarial_roja.svg';
import img_Etiqueta_Azul from '../../assets/Etiqueta_formación_azul.svg';

export const Talleres = () => {

    import('./estilos.sass');

    const {talleres} = useContext(context); /*asi traigo el objeto contexto*/
    const [Talleres,setTalleres] = useState([]); //contiene todos los datos de talleres

    useEffect(()=>{if(talleres) {setTalleres([...talleres])}
    },[talleres])//pregunto si hay talleres y al estado le mando el vector de talleres que quiero que muestre

    /*useEffect(()=>{
        setTimeout(()=>{
        },3000)
    },[]);*/
    
    let et = "";
    let puntero = 0;
    function colores(){
        let clase = "";
        if(puntero === 0){
            clase = "verde"
        }
        else if(puntero === 1){
            clase = "azul" 
        }
        else if(puntero === 2){
            clase = "rojo" 
        }
        else if(puntero === 3){
            clase = "amarillo" 
        }
        else{
            puntero = 0;
            clase = "verde"
        }
        puntero++;
        return clase;
    }
    function imagen(tipo){
        let etiqueta = "";
        let alt = "";
        if(tipo == 'empresarial'){
            etiqueta = img_Etiqueta_E
            alt = "taller empresarial"
        }
        else{
            etiqueta = img_Etiqueta_F
            alt = "taller de usuarios de la corporación"
        }
        return {
            etiqueta,
            alt
        };   
    };
    function imagenDos(tipo){
        let etiqueta = "";
        let alt = "";
        if(tipo == 'empresarial'){
            etiqueta = img_Etiqueta_Roja
            alt = "taller empresarial"
        }
        else{
            etiqueta = img_Etiqueta_Azul
            alt = "taller de usuarios de la corporación"
        }
        return {
            etiqueta,
            alt
        };   
    };
    let $colorClase = "";
    const handlerClick = (evento, img)=>{
        const $summary = evento.target.children[0];
        const $summary_child = evento.target.children[0].children[0]; //img background
        const $padre_child = evento.target.parentElement.children[1]; //img redonda
        const $padre = evento.target.parentElement; //div
        
            if(evento.target.open){
                $colorClase = $padre.classList[1];
                $summary.style.setProperty("background-image", `linear-gradient(rgba(54, 120, 153, 0.39),rgba(54, 120, 153, 0.39)), url(${img})`);
                $padre_child.style.setProperty("display","none");
                $summary_child.style.setProperty("display","block");
                $padre.classList.remove($colorClase);
            }else{
                $summary.style.setProperty("background-image", "none");
                $padre_child.style.setProperty("display","block");
                $summary_child.style.setProperty("display","none");
                $padre.classList.add($colorClase);
            }
    };
    const handlerChange = (event) =>{
        //console.log(event.target.value);
        let talleresMatch = talleres.filter((taller) => taller.fields.title.toLowerCase().includes(event.target.value.toLowerCase()))
        setTalleres(talleresMatch)
    }

    return (
        <>
        <div className="search">
            <input type="text" className="search__input" placeholder="Buscar un curso" onChange={(e) => handlerChange(e)}/>
            <button><FaSearch/></button>
        </div>
        <div className="labels">
            <div className="labels__etiquetas">
                <img src= {img_Etiqueta_E} alt="etiqueta empresarial" />
                <p>Talleres empresariales</p>
            </div>
            <div className="labels__etiquetas">
                <img src= {img_Etiqueta_F} alt="etiqueta usuarios" />
                <p>Talleres para Usuarios</p>
            </div>
        </div>
        <section className="details__talleres">
            { 
                talleres ?
                Talleres.map((talleres,index) => (
                    <div className= {`cards__taller ${colores()}`}  key= {`taller-${index}`}>
                        <details className="card" onToggle={(evento)=> handlerClick(evento,talleres.fields.image.fields.file.url)}>
                            <summary>
                                {talleres.fields.title}
                                <img src={`${imagenDos(`${talleres.metadata.tags[0].sys.id}`).etiqueta}`} alt= {`${imagenDos(`${talleres.metadata.tags[0].sys.id}`).alt}`} style={{display:"none"}}/>
                            </summary>
                            <p className="description">{talleres.fields.description}</p>
                            <div className="icon__clock">
                                <i><FaRegClock/></i>
                                <p className="duration">{talleres.fields.duration}</p>
                            </div>
                            <div className="content_button">
                                <ButtonBorder border="black" color="black"content="Saber más"/>
                            </div>
                        </details>
                        <img src={`${imagen(`${talleres.metadata.tags[0].sys.id}`).etiqueta}`} alt= {`${imagen(`${talleres.metadata.tags[0].sys.id}`).alt}`} />
                    </div>
                )) 
                : MediaQueryDesktop() ?
                    <LoaderTalleres {...{
                        width: 1024,
                        height: 600,
                        values: {
                            width:725,
                            height:30,
                            xposition:300,
                            yposition: 20,
                        },
                    }} />
                : MediaQueryTablet() ?
                    <LoaderTalleres {...{
                        width: 758,
                        height: 600,
                        values: {
                            width:610,
                            height:30,
                            xposition:85,
                            yposition: 20,
                        },
                    }} />
                :
                    <LoaderTalleres {...{
                        width: 320,
                        height: 600,
                        values: {
                            width:280,
                            height:30,
                            xposition: 20,
                            yposition: 20,
                        },
                    }} />                   
            }
        </section>
        </>
    )
}

/**
 * <summary style={{ backgroundImage: "url('https://img.freepik.com/vector-gratis/fondo-invierno-hojas-pinceles-color-pastel_220290-42.jpg?size=626&ext=jpg')" }} >
 *  ....
 * </summary>
 * 
 * La propiedad "open" se le agrega al <details>
 */