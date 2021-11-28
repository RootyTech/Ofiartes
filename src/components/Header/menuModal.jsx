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
                            <Link to="/pag-talleres" onClick={() => { closeModal(); }}>Talleres</Link>
                        </li>
                        <li>
                            <div></div>
                            <Link to="/quienes-somos" onClick={() => { closeModal(); }}>Quienes Somos</Link>
                        </li>
                        <li>
                            <div></div>
                            <Link to="#" onClick={() => { closeModal(); }}>Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}