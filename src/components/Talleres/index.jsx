import React, { useContext, useLayoutEffect} from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import { context } from '../../context';
import './estilos.sass';
import {ButtonBorder} from '../commons/Buttons'

//importación de imágenes
import img_Etiqueta_E from '../../assets/Etiqueta_E.svg';
import img_Etiqueta_F from '../../assets/Etiqueta_F.svg';
import img_Etiqueta_Roja from '../../assets/Etiqueta_empresarial_roja.svg';
import img_Etiqueta_Azul from '../../assets/Etiqueta_formación_azul.svg';

export const Talleres = () => {
    const {talleres} = useContext(context); /*asi traigo el objeto contexto*/
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
        if(tipo == 'Empresarial'){
            etiqueta = img_Etiqueta_E
            alt = "taller empresarial"
        }
        else{
            etiqueta = img_Etiqueta_F
            alt = "taller de formación"
        }
        return {
            etiqueta,
            alt
        };   
    };
    function imagenDos(tipo){
        let etiqueta = "";
        let alt = "";
        if(tipo == 'Empresarial'){
            etiqueta = img_Etiqueta_Roja
            alt = "taller empresarial"
        }
        else{
            etiqueta = img_Etiqueta_Azul
            alt = "taller de formación"
        }
        return {
            etiqueta,
            alt
        };   
    };
    let $colorClase = "";
    const handlerClick = (evento, img)=>{
        const $summary = evento.target.parentElement;
        const $summary_child = evento.target.parentElement.children[1]; 
        const $padre_child = evento.target.parentElement.parentElement.parentElement.children
        const $padre = evento.target.parentElement.parentElement.parentElement
        if(evento.target.nodeName === "P"){
            if(!evento.target.parentElement.parentElement.open){
                $colorClase = $padre.classList[1];
                $summary.style.setProperty("background-image", `linear-gradient(rgba(54, 120, 153, 0.39),rgba(54, 120, 153, 0.39)), url(${img})`);
                $padre_child[1].style.setProperty("display","none");
                $summary_child.style.setProperty("display","block");
                $padre.classList.remove($colorClase);
            }else{
                $summary.style.setProperty("background-image", "none");
                $padre_child[1].style.setProperty("display","block");
                $summary_child.style.setProperty("display","none");
                $padre.classList.add($colorClase);
            }
        }
    };
    return (
        <>
        <div className="search">
            <input type="text" className="search__input" placeholder="Buscar un curso" />
            <button><FaSearch/></button>
        </div>
        <div className="labels">
            <div className="labels__etiquetas">
                <img src= {img_Etiqueta_E} alt="etiqueta empresarial" />
                <p>Talleres empresariales</p>
            </div>
            <div className="labels__etiquetas">
                <img src= {img_Etiqueta_F} alt="etiqueta empresarial" />
                <p>Talleres de Formación</p>
            </div>
        </div>
        {console.log(talleres)}
        <section className="details__talleres">
            {
                talleres ?
                talleres.map((talleres,index) => (
                    <div className= {`cards__taller ${colores()}`}  key= {`taller-${index}`}>
                        <details className="card">
                            <summary>
                                <p className="evento" onClick={(evento)=> handlerClick(evento,talleres.fields.image.fields.file.url)}>{talleres.fields.title}</p>
                                <img src={`${imagenDos(`${talleres.fields.type}`).etiqueta}`} alt= {`${imagenDos(`${talleres.fields.type}`).alt}`} style={{display:"none"}}/>
                            </summary>
                            <p>{talleres.fields.description}</p>
                            <div className="icon__clock">
                                <i><FaRegClock/></i>
                                <p>{talleres.fields.duration}</p>
                            </div>
                            <div className="content_button">
                                <ButtonBorder border="black" color="black"content="Saber más"/>
                            </div>
                        </details>
                        <img src={`${imagen(`${talleres.fields.type}`).etiqueta}`} alt= {`${imagen(`${talleres.fields.type}`).alt}`} />
                    </div>
                ))
                :<h2>Loading...</h2>
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