import React from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from '../components/Footer';

import Logotipo from '../assets/LogotipoSVG.svg';
import { ButtonFill } from '../components/commons/Buttons';
import { PuzzleSVG } from '../components/commons/Puzzle';
export const NotFound = () => {

    import(/* webpackChunkName: 'NotFound' */'./NotFound.sass');

    return (
        <>
            <Helmet>
                <title>Error 404 - Ofi Artes</title>
                <meta name="description" content="Esta página no ha sido encontrada dentro de la Corporación Ofiartes" />
            </Helmet>
            <header className="NotFound__Header">
                <img src={Logotipo} alt="Logo de la corporación Ofi Artes" width="70" height="70" />
            </header>
            <main className="NotFound__Content">
                <PuzzleSVG fill="#5CE6A8" />
                <PuzzleSVG fill="#F9E26E" />
                <PuzzleSVG fill="#37BCFF" />
                <PuzzleSVG fill="#FF6565" />
                <h1>Página no encontrada</h1>
                <ButtonFill background="red" color="white" content="Regresar al inicio" />
            </main>
            <Footer />
        </>
    )
}