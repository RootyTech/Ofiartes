import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { context } from '../../context';
import { Carousel } from '../Novedades/Carousel';
import('./estilos.sass')

export const openModal = () => {
    document.getElementById('modal').classList.add('modalShow');
    document.getElementById('modal').classList.remove('modalHide');
    document.getElementById('modal').children[1].children[0].classList.toggle('modal__bar--animate')
}

export const Modal = ({children}) => {
    const { modal, setModal } = useContext(context);
    const closeModal = ()=>{
        document.getElementById('modal').classList.remove('modalShow');
        document.getElementById('modal').classList.add('modalHide');
        
        document.getElementById('modal').children[1].children[0].classList.toggle('modal__bar--animate')
    }
    
    // El Modal retorna un portal que recibe el HTML a renderizar y dónde ( <div id="modal"></div> )
    return ReactDOM.createPortal( 
    <>
        {
            modal === "header" ? 
            <section className="modal">
                <div className="modal__container">
                    <nav>
                        <ul>
                            <li>
                                <div></div>
                                <Link to="#">Inicio</Link>
                            </li>
                            <li>
                                <div></div>
                                <Link to="#">Talleres</Link>
                            </li>
                            <li>
                                <div></div>
                                <Link to="#">Quienes Somos</Link>
                            </li>
                            <li>
                                <div></div>
                                <Link to="#">Contacto</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            : modal === "novedades" ?
            <Carousel/>
            : <img src={modal} alt="imagen :D" />
        }
        <div className="modal--close" onClick= {()=> { closeModal(); }}>
            <div className="modal__bar"></div>
        </div>
    </> 
    , document.getElementById('modal'));
}