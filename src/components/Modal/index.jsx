import React from 'react';
import ReactDOM from 'react-dom';
import('./estilos.sass')

export const openModal = () => {
    document.getElementById('modal').classList.add('modalShow');
    document.getElementById('modal').classList.remove('modalHide');
    
}
export const Modal = ({children}) => {
    const closeModal = ()=>{
        document.getElementById('modal').classList.remove('modalShow');
        document.getElementById('modal').classList.add('modalHide');
    }
    // El Modal retorna un portal que recibe el HTML a renderizar y dónde ( <div id="modal"></div> )
    return ReactDOM.createPortal( 
    <>
        <button className="closeButton" onClick={()=>{closeModal()}} type="button">X</button>
        {children}
    </> 
    , document.getElementById('modal'));
}
