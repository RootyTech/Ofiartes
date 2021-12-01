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
                <title>¿Quiénes somos? - Ofiartes</title>
                <meta name="description" content="Misión, visión y definición de la corporación Ofiartes" />
            </Helmet>
            <Modal/>
            <Header nombrePagina="quienes-somos" titulo="¿Quiénes somos?" contenido="Somos un grupo de profesionales de diferentes áreas que disfrutamos el trabajo con comunidades con riesgo psicosocial; nos apoyamos en nuestros conocimientos profesionales para fomentar en estas poblaciones el empleo y el emprendimiento como herramienta fundamental en el desarrollo y fortalecimiento de los hogares colombianos"/>
            <MisionVision />
            <EquipoTrabajo />
            <Galeria />
            <Footer />
        </>
    )
}