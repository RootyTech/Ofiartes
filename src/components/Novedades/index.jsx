import React from 'react';
import { Carousel } from './Carousel';
import {Modal, openModal} from '../Modal'
import('./estilos.sass');

export const Novedades = () => {

    return (
        <div className="news">
            <button onClick={()=>{openModal()}} type="button">Lo último en Ofiartes</button>
            {/*Aquí es donde renderizaremos el modal como un componente general <Modal/> el cual contendrá el contenido que enviemos por parámetro*/}
            <Modal>
                <Carousel/>
            </Modal>

        </div>
    )
}