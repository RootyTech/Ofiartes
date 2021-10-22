import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';

export const Footer = () => {

    import('./estilos.sass');
    
    return (
        <footer className="footer">
            <h2>CONTACTO</h2>
            <div className="footer__info">
                <p><span>Dirección:</span> calle 49 # 39-16</p>
                <p><span>Correo:</span> corporacionofiartes@gmail.com</p>
                <p><span>Nit:</span> 901284540-2</p>
                <p><span>Teléfono</span> 3147477226</p>
            </div>
            <h2>Redes Sociales</h2>
            <div className="footer__redes">
                <FaFacebookSquare className="footer__redes--facebook"/>
                <FaWhatsappSquare className="footer__redes--whatsapp"/>
                <FaInstagramSquare
                className="footer__redes--instagram"/>
            </div>
        </footer>
    )
}