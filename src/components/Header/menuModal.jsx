/** LIBRERÍAS */
import React from 'react';
import { Link } from 'react-router-dom';

/** COMPONENTES */
import { Modal } from '../Modal';

export const MenuModal = (props) => {
    return (
        <Modal>
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
        </Modal>
    )
}