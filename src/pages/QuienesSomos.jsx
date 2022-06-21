import React from 'react';
import { Helmet } from 'react-helmet';

import { Header } from '../components/Header'
import { MisionVision } from '../components/MisionVision'
import { EquipoTrabajo } from '../components/EquipoTrabajo'
import { Galeria } from '../components/Galeria'
import { Footer } from '../components/Footer'
import { Modal } from '../components/Modal';

export const QuienesSomos = () => {
    return (
        <>
            <Helmet>
                <title>¿Quiénes somos? - Ofi Artes</title>
                <meta name="description" content="Misión, visión y definición de la corporación Ofi Artes" />
            </Helmet>
            <Modal/>
            <Header nombrePagina="quienes-somos" titulo="¿Quiénes somos?" contenido="Trabajamos para fomentar el empleo y emprendimiento en poblaciones vulnerables, con el fin de dignificar la vida de personas con discapacidad y mujeres en riesgo psicosocial. "/>
            <MisionVision />
            <EquipoTrabajo />
            <Galeria />
            <Footer />
        </>
    )
}