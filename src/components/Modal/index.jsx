import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import('./estilos.sass')

export const openModal = () => {
    document.getElementById('modal').classList.add('modalShow');
    document.getElementById('modal').classList.remove('modalHide');
    document.getElementById('modal').children[1].children[0].classList.toggle('modal__bar--animate')
}

export const Modal = ({children}) => {
    
    const closeModal = ()=>{
        document.getElementById('modal').classList.remove('modalShow');
        document.getElementById('modal').classList.add('modalHide');
        
        document.getElementById('modal').children[1].children[0].classList.toggle('modal__bar--animate')
    }
    
    // El Modal retorna un portal que recibe el HTML a renderizar y dónde ( <div id="modal"></div> )
    return ReactDOM.createPortal( 
    <>
        {children}
        <div className="modal--close" onClick= {()=> { closeModal(); }}>
            <div className="modal__bar"></div>
        </div>
    </> 
    , document.getElementById('modal'));
}