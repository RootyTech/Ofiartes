import React from 'react';
import { Carousel } from './Carousel';
import {Modal} from '../Modal'
import './estilos.sass';

export const Novedades = () => {
    const openNewsModal = ()=>{
        document.getElementById('modal').classList.add('modalShow');
        document.getElementById('modal').classList.remove('modalHide');
        
    }
    const closeNewsModal = ()=>{
        document.getElementById('modal').classList.remove('modalShow');
        document.getElementById('modal').classList.add('modalHide');
    }
    return (
        <div className="news">
            <button onClick={()=>{openNewsModal()}} type="button">Lo último en Ofiartes</button>
            {/*Aquí es donde renderizaremos el modal como un componente general <Modal/> el cual contendrá el contenido que enviemos por parámetro*/}
            <Modal>
                <button className="closeButton" onClick={()=>{closeNewsModal()}} type="button">X</button>
                <Carousel/>
            </Modal>

        </div>
    )
}