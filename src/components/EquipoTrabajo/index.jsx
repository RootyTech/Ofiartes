import React from 'react';
import { Carousel } from './Carousel';
import './estilos.sass';
export const EquipoTrabajo = () => {
    return (
        <section className="workTeam">
            <h2 className="workTeam__title">Nuestro equipo de trabajo</h2>
            <Carousel/>
        </section>
    )
}