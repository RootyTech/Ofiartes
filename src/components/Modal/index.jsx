import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { context } from '../../context';
import { Carousel } from '../Novedades/Carousel';
import { MenuModal } from '../Header/menuModal';
import('./estilos.sass')

const closeByEscKey = (e)=>{
    if(e.key=="Escape"){
        closeModal();
    }
}
const closeByClickOutside = (e)=>{
    if (e.target === document.getElementById('modal') || e.target === document.querySelector('.carousel')) {
        closeModal();
    }
}

export const openModal = () => {
    document.getElementById('modal').classList.add('modalShow');
    document.getElementById('modal').classList.remove('modalHide');
    document.getElementById('modal').children[1].children[0].classList.toggle('modal__bar--animate')
    document.querySelector('html').style.overflow = "hidden";
    document.addEventListener("keyup",closeByEscKey);
    document.getElementById('modal').addEventListener("click",closeByClickOutside);
}

export const closeModal = ()=>{
    document.removeEventListener("keyup", closeByEscKey);
    document.getElementById('modal').classList.remove('modalShow');
    document.getElementById('modal').classList.add('modalHide');
    document.getElementById('modal').children[1].children[0].classList.toggle('modal__bar--animate')
    document.querySelector('html').style.overflow = "auto";
}

export const Modal = ({children}) => {
    const { modal, setModal } = useContext(context);
    
    // El Modal retorna un portal que recibe el HTML a renderizar y dónde ( <div id="modal"></div> )
    return ReactDOM.createPortal( 
    <>
        {
            modal === "header" ?
            <MenuModal/>
            : modal === "novedades" ?
            <Carousel/>
            : <img src={modal.imgurl} alt={modal.alt} />
        }
        <div className="modal--close" onClick= {()=> { closeModal(); }}>
            <div className="modal__bar"></div>
        </div>
    </> 
    , document.getElementById('modal'));
}