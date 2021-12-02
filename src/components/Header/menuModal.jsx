/** LIBRERÍAS */
import React from 'react';
import { Link } from 'react-router-dom';

/** COMPONENTES */
import { closeModal } from '../Modal';

export const MenuModal = (props) => {
    return (
        <section className="modal">
            <div className="modal__container">
                <nav>
                    <ul>
                        <li>
                            <div></div>
                            <Link to="/" onClick={() => { closeModal(); }}>Inicio</Link>
                        </li>
                        <li>
                            <div></div>
                            <Link to="/talleres" onClick={() => { closeModal(); }}>Talleres</Link>
                        </li>
                        <li>
                            <div></div>
                            <Link to="/quienes-somos" onClick={() => { closeModal(); }}>Quienes Somos</Link>
                        </li>
                        <li>
                            <div></div>
                            <a href="https://api.whatsapp.com/send?phone=573147477226" target="_blank" rel="nofollow noopener noreferrer" onClick={() => { closeModal(); }}>Contacto</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}