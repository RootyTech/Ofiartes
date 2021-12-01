import React from 'react';
import { FaFacebookF, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import { MediaQueryTablet } from '../../lib/mediaQuery';

export const Footer = () => {

    import(/* webpackChunkName: 'footer' */'./estilos.sass');
    
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
                    <h3>Síguenos</h3>
                    <div className="footer__icons--social">
                        <a href="https://es-es.facebook.com/ofiartes.org" target="_blank" rel="nofollow noopener noreferrer">
                            <FaFacebookF className="footer__icons--social--facebook"/>
                        </a>
                        <a  href="https://api.whatsapp.com/send?phone=573147477226" target="_blank" rel="nofollow noopener noreferrer">
                            <FaWhatsappSquare className="footer__icons--social--whatsapp"/>
                        </a>
                        <a href="https://www.instagram.com/ofiartes" target="_blank" rel="nofollow noopener noreferrer">
                            <FaInstagramSquare className="footer__icons--social--instagram"/>
                        </a>
                    </div>
                </div>
            </div>
            <h4>© Corporación ofiartes 2021</h4>
        </footer>
    )
}