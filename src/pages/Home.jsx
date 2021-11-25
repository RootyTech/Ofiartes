import React, { useEffect, useState, useContext, useLayoutEffect } from 'react';
import { context } from '../context';
import { Header } from '../components/Header';
import { QueComo } from '../components/QueComo';
import { Unirse } from '../components/Unirse';
import { TarjetaCursos } from '../components/TarjetaCursos';
import { Testimonios } from '../components/Testimonios';
import { Footer } from '../components/Footer';
import { Modal, openModal } from '../components/Modal';
import { useRouteMatch } from 'react-router-dom';

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
            {/* <Novedades /> */}
            <Modal/>
            <Header />
            <QueComo />
            <Unirse />
            <TarjetaCursos />
            <Testimonios />
            <Footer />
        </>
    )
}