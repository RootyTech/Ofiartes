import React, { useContext } from 'react';
import { context } from '../../context';
import { FaRegClock } from 'react-icons/fa';
import './estilos.sass';
import {ButtonBorder} from '../commons/Buttons'

//importación de imágenes
import img_EtiquetaEmpresarial from '../../assets/EtiquetaEmpresarial.svg';
import img_EtiquetaFormación from '../../assets/EtiquetaFormación.svg';
import { debug } from 'webpack';

export const TarjetaCursos = () =>{
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
        <section className="cards">
            <h2>Algunos cursos que dictamos</h2> 
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
        
    )
}