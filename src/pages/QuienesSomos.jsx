import React from 'react';

import { Header } from '../components/Header'
import { MisionVision } from '../components/MisionVision'
import { EquipoTrabajo } from '../components/EquipoTrabajo'
import { Footer } from '../components/Footer'

export const QuienesSomos = () => {
    return (
        <>
            <Header />
            <MisionVision />
            <EquipoTrabajo />
            <Footer />
        </>
    )
}