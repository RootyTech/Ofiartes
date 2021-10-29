import React from 'react';
import ReactDOM from 'react-dom';

export const Modal = ({children}) => {
    // El Modal retorna un portal que recibe el HTML a renderizar y dónde ( <div id="modal"></div> )
    return ReactDOM.createPortal( children , document.getElementById('modal') );
}