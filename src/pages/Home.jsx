import React, { useEffect, useContext, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
/** CONTEXTO */
import { context } from '../context';

/** COMPONENTES */
import { Header } from '../components/Header';
import { QueComo } from '../components/QueComo';
import { Unirse } from '../components/Unirse';
import { TarjetaCursos } from '../components/TarjetaCursos';
import { Testimonios } from '../components/Testimonios';
import { Footer } from '../components/Footer';
import { useRouteMatch } from 'react-router-dom';
import { Novedades } from '../components/Novedades';

import { Modal, openModal } from '../components/Modal';

export const Home = () => {
    
    const { setModal } = useContext(context);
    const match = useRouteMatch("/");
    useEffect(()=>{
        match ?
        setModal("novedades")
        : null
    },[])

    useLayoutEffect(()=>{
        openModal();
    },[])

    return (
        <>
            <Helmet>
                <title>Corporación Ofi Artes</title>
                <meta name="description" content="En la corporación Ofi Artes fomentamos el empleo y el emprendimiento" />
            </Helmet>
            <Modal/>
            <Novedades/>
            <Header nombrePagina="Home" titulo="Extendemos nuestras manos a quien más lo necesita" contenido=""/>
            <QueComo />
            <Unirse />
            <TarjetaCursos />
            <Testimonios />
            <Footer />
        </>
    )
}