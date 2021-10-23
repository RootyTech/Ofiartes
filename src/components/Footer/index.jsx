import React from 'react';
import { FaFacebookF, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import { MediaQueryTablet } from '../../lib/mediaQuery';

export const Footer = () => {

    import('./estilos.sass');
    MediaQueryTablet() && import('./desktop.sass');
    
    return (
        <footer className="footer">
            <h2>CONTACTO</h2>
            <div className="footer__contenido">
                <div className="footer__info">
                    <p><span>Dirección:</span> Calle 49 # 39-16</p>
                    <p><span>Correo:</span> corporacionofiartes@gmail.com</p>
                    <p><span>Nit:</span> 901284540-2</p>
                    <p><span>Teléfono</span> 3147477226</p>
                </div>
                <div className="footer__icons">
                    <h2>Redes Sociales</h2>
                    <div className="footer__icons--social">
                        <FaFacebookF className="footer__icons--social--facebook"/>
                        <FaWhatsappSquare className="footer__icons--social--whatsapp"/>
                        <a href="https://www.instagram.com/ofiartes/?hl=es" target="_blank" rel="nofollow noopener noreferrer">
                            <FaInstagramSquare className="footer__icons--social--instagram"/>
                        </a>
                    </div>
                </div>
            </div>
            <h4>© Corporación ofiartes 2021</h4>
        </footer>
    )
}