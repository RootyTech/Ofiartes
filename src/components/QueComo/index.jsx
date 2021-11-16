/** LIBRERÍAS */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MediaQueryTablet, MediaQueryDesktop } from '../../lib/mediaQuery';

/** IMPORTACIÓN DE IMAGENES */
import img_piece_blue from '../../assets/piece_blue.png';
import img_piece_yellow from '../../assets/piece_yellow.png';
import img_piece_medium_blue from '../../assets/piece_medium_blue.png'
import img_piece_medium_yellow from '../../assets/piece_medium_yellow.png'

/** COMPONENTES */
import { WhatHow } from './whatHow';
import { ButtonBorder } from '../commons/Buttons';

export const QueComo = () => {

    /** CÓDIGO DE LA IMPORTACIÓN DE ESTILOS DEPENDIENDO DEL TAMAÑO DE LA PANTALLA */

    import('./estilos.sass');

    const [widthSize, setWidthSize] = useState("Mobile"); // Variable UseState que cambiará cuando se cargue la página o cuando se redimensione esta

    const ResizeWhatHow = () => { // Constante que guarda la función que valida con que media Query se está trabajando
        // MediaQueryDesktop() -> Verdadero si se pasa de 1024px
        if(MediaQueryDesktop()){
            setWidthSize("Desktop"); // Se cambia la variable, para volver a correr el código
            import('./desktop.sass'); // Se importan los estilos correspondientes a Desktop
            console.log("Estilos aplicados Desktop");
        // MediaQueryTablet() -> Verdadero si se pasa de 768px
        } else if (MediaQueryTablet()) {
            setWidthSize("Tablet"); // Se cambia la variable, para volver a correr el código
            import('./tablet.sass'); // Se importan los estilos correspondientes a Tablet
            console.log("Estilos aplicados Tablet");
        } else {
            setWidthSize("Mobile"); // Se cambia la variable, para volver a correr el código
            console.log("Estilos aplicados Mobile");
        }
    }

    useEffect(() => {
        window.addEventListener('resize', ResizeWhatHow); // REALIZAR LA FUNCIÓN CUANDO LA PÁGINA CAMBIA DE TAMAÑO (EN TIEMPO REAL)
        window.addEventListener('load', ResizeWhatHow); // REALIZAR LA FUNCIÓN CUANDO LA PÁGINA CARGA POR PRIMERA VEZ
        return () => {
            window.removeEventListener('resize', ResizeWhatHow); // REMOVER EVENTLISTENER
            window.removeEventListener('load', ResizeWhatHow); // REMOVER EVENTLISTENER
        }
    }, [])

    /** CÓDIGO DE LA ANIMACIÓN DE LAS PIEZAS DE ROMPECABEZAS */
    
    const prefix = 'animate__';
    const animationName = `${prefix}flipInY`;
    const elementFather = document.querySelector('.aboutUs');

    const elementPuzzle1 = document.querySelector('.aboutUs__puzzle--largerOne');
    const elementPuzzle2 = document.querySelector('.aboutUs__puzzle--height');
    const elementImg = document.querySelectorAll('.aboutUs__img');

    let count = 0;
    const puzzleObserver = new IntersectionObserver(handleIntersection, // Creación del Observador que ejecutará la función cuando encuentre nuestro objeto
        {
        threshold: 1
    });
    function handleIntersection (entries) { // Función para añadir la clase de la animación justo cuando el observador se active
        // console.log("..");
        // console.log(elementFather);
        if(count === 1){
            // console.log("xd");
            elementPuzzle1.classList.add(`${prefix}animated`, animationName);
            elementPuzzle2.classList.add(`${prefix}animated`, animationName);
            elementImg[0].classList.add(`${prefix}animated`, animationName);
            elementImg[1].classList.add(`${prefix}animated`, animationName);
            count++;
        }else{
            count++;
        }
        // console.log(count);
    }
    elementFather ? puzzleObserver.observe(elementFather) : null; // Elemento que vamos a observar

    return (
        <>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius debitis velit ratione voluptate ipsum sit aspernatur, labore dolorum nobis inventore culpa nulla voluptates rerum dolore, corporis quasi sed saepe voluptatum!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius debitis velit ratione voluptate ipsum sit aspernatur, labore dolorum nobis inventore culpa nulla voluptates rerum dolore, corporis quasi sed saepe voluptatum!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius debitis velit ratione voluptate ipsum sit aspernatur, labore dolorum nobis inventore culpa nulla voluptates rerum dolore, corporis quasi sed saepe voluptatum!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius debitis velit ratione voluptate ipsum sit aspernatur, labore dolorum nobis inventore culpa nulla voluptates rerum dolore, corporis quasi sed saepe voluptatum!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius debitis velit ratione voluptate ipsum sit aspernatur, labore dolorum nobis inventore culpa nulla voluptates rerum dolore, corporis quasi sed saepe voluptatum!</p>
            <section className="aboutUs">
                <div className="aboutUs__cards">
                    <WhatHow 
                        clase="aboutUs__container aboutUs__container--white"
                        clase2="aboutUs__img"
                        clase3="aboutUs__figure"
                        clase4="aboutUs__puzzle--margin aboutUs__puzzle--none"
                        clase5="aboutUs__puzzle--larger aboutUs__puzzle--largerOne animate__animated"
                        alt="Pieza azul"
                        // Condicional para enviar la importación de una imagen u otra, dependiendo del tamaño de la pantalla dado por los MediaQuery
                        src={ MediaQueryDesktop() ? img_piece_medium_blue : MediaQueryTablet() ? img_piece_medium_blue : img_piece_blue }
                        subtitle="¿Qué hacemos?"
                        text="Fomentamos el empleo y el emprendimiento a través de la formación en artes y oficios, 
                        dirigido a jóvenes y adultos en condición de discapacidad y población vulnerable."
                        />
                    <WhatHow
                        clase="aboutUs__container aboutUs__container--black"
                        clase2="aboutUs__img"
                        clase3="aboutUs__figure"
                        clase4="aboutUs__puzzle--height animate__animated"
                        clase5="aboutUs__puzzle--larger aboutUs__puzzle--largerTwo aboutUs__puzzle--none"
                        alt="Pieza amarilla"
                        // Condicional para enviar la importación de una imagen u otra, dependiendo del tamaño de la pantalla dado por los MediaQuery
                        src={ MediaQueryDesktop() ? img_piece_medium_yellow : MediaQueryTablet() ? img_piece_medium_yellow : img_piece_yellow }
                        subtitle="¿Cómo lo hacemos?"
                        text="Con metodologías que se ajusten a las necesidades de nuestros beneficiarios, 
                        formación a la medida del entorno empresarial y aliados estratégicos que facilitan el 
                        cumplimiento de la Corporación."
                    />
                </div>
                <div className="aboutUs__containerSecundary">
                    <Link to="/quienes_somos">
                        <ButtonBorder border="black" color="black" content="Conoce más" />
                    </Link>
                </div>
            </section>
            <br /><br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, quam inventore unde, cupiditate laudantium maiores fugiat voluptatem dolorum saepe tempora similique fugit ea itaque modi sit illo asperiores temporibus voluptatibus!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, quam inventore unde, cupiditate laudantium maiores fugiat voluptatem dolorum saepe tempora similique fugit ea itaque modi sit illo asperiores temporibus voluptatibus!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, quam inventore unde, cupiditate laudantium maiores fugiat voluptatem dolorum saepe tempora similique fugit ea itaque modi sit illo asperiores temporibus voluptatibus!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, quam inventore unde, cupiditate laudantium maiores fugiat voluptatem dolorum saepe tempora similique fugit ea itaque modi sit illo asperiores temporibus voluptatibus!</p>
        </>
    )
}