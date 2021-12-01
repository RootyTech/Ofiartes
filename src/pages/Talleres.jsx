import React from 'react';
import { Helmet } from 'react-helmet';

import { Header } from '../components/Header';
import { Talleres } from '../components/Talleres';
import { Footer } from '../components/Footer';
import { Modal } from '../components/Modal';

export const PagTalleres = () => {
    return (
        <>
            <Helmet>
                <title>Talleres - Ofiartes</title>
                <meta name="description" content="Nuestros talleres" />
            </Helmet>
            <Modal/>
            <Header nombrePagina="talleres" titulo="Nuestros talleres" contenido="En OFI ARTES te brindamos acompañamientos en: psicología, formación en artes y oficios, bancarización, salud, acceso al empleo, emprendimiento y mucho más"/>
            <Talleres />
            <Footer />
        </>
    )
}