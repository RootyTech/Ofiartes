import React, {useContext} from 'react';
import { Carousel } from './Carousel';
import {openModal} from '../Modal'
import('./estilos.sass');
import { context } from '../../context';


export const Novedades = () => {
    const {setModal} = useContext(context);
    return (
        <div className="news">
            <button onClick={()=>{setModal("novedades"); openModal()}} type="button">Lo último en Ofiartes</button>
        </div>
    )
}