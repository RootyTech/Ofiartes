import React, { useEffect, useState } from 'react';

import { Header } from '../components/Header';
import { QueComo } from '../components/QueComo';
import { Unirse } from '../components/Unirse';
import { TarjetaCursos } from '../components/TarjetaCursos';
import { Testimonios } from '../components/Testimonios';
import { Footer } from '../components/Footer';

import { Novedades } from '../components/Novedades'

import { useRouteMatch } from 'react-router-dom';

export const Home = () => {

    return (
        <>
            <Novedades />
            <Header />
            <QueComo />
            <Unirse />
            <TarjetaCursos />
            <Testimonios />
            <Footer />
        </>
    )
}