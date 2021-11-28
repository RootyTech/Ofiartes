import React from 'react';

import { Footer } from '../components/Footer';

import Logotipo from '../assets/LogotipoSVG.svg';
import { ButtonFill } from '../components/commons/Buttons';
import { PuzzleSVG } from '../components/commons/Puzzle';
export const NotFound = () => {

    import(/* webpackChunkName: 'NotFound-mobile' */'./NotFound.sass');

    return (
        <>
            <header className="NotFound__Header">
                <img src={Logotipo} alt="Logo de la corporación Ofiartes" width="70" height="70" />
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