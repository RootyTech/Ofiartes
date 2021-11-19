import React from 'react';

import { Header } from '../components/Header'
import { MisionVision } from '../components/MisionVision'
import { EquipoTrabajo } from '../components/EquipoTrabajo'
import { Galeria } from '../components/Galeria'
import { Footer } from '../components/Footer'

export const QuienesSomos = () => {
    return (
        <>
            <Header />
            <MisionVision />
            <EquipoTrabajo />
            <Galeria />
            <Footer />
        </>
    )
}