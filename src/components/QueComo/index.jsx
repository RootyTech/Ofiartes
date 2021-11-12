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
    import('./estilos.sass');

    const [widthSize, setWidthSize] = useState("Mobile");

    const ResizeWorkTeam = () => {
        // MediaQueryDesktop() -> True si se pasa de 1024px
        if(MediaQueryDesktop()){
            setWidthSize("Desktop");
            import('./desktop.sass');
            console.log("Estilos aplicados Desktop");
        // MediaQueryTablet() -> True si se pasa de 768px
        } else if (MediaQueryTablet()) {
            setWidthSize("Tablet");
            import('./tablet.sass');
            console.log("Estilos aplicados Tablet");
        } else {
            setWidthSize("Mobile");
            console.log("Estilos aplicados Mobile");
        }
    }

    useEffect(() => {
        window.addEventListener('resize', ResizeWorkTeam);
        return () => {
            window.removeEventListener('resize', ResizeWorkTeam);
        }
    }, [])
    
    const prefix = 'animate__';
    const animationName = `${prefix}flipInY`;
    const elementFather = document.querySelector('.aboutUs');

    const elementPuzzle1 = document.querySelector('.aboutUs__puzzle--largerOne');
    const elementPuzzle2 = document.querySelector('.aboutUs__puzzle--height');
    const elementImg = document.querySelectorAll('.aboutUs__img');

    let count = 0;
    const puzzleObserver = new IntersectionObserver(handleIntersection, 
        {
        threshold: 1
    });
    function handleIntersection (entries) {
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
    elementFather ? puzzleObserver.observe(elementFather) : null; // ELEMENTO QUE VAMOS A OBSERVAR

    return (
        <>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius debitis velit ratione voluptate ipsum sit aspernatur, labore dolorum nobis inventore culpa nulla voluptates rerum dolore, corporis quasi sed saepe voluptatum!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius debitis velit ratione voluptate ipsum sit aspernatur, labore dolorum nobis inventore culpa nulla voluptates rerum dolore, corporis quasi sed saepe voluptatum!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius debitis velit ratione voluptate ipsum sit aspernatur, labore dolorum nobis inventore culpa nulla voluptates rerum dolore, corporis quasi sed saepe voluptatum!</p>
            <section className="aboutUs">
                <WhatHow 
                    clase="aboutUs__container aboutUs__container--white"
                    clase2="aboutUs__img"
                    clase3="aboutUs__figure"
                    clase4="aboutUs__puzzle--margin aboutUs__puzzle--none"
                    clase5="aboutUs__puzzle--larger aboutUs__puzzle--largerOne animate__animated"
                    alt="Pieza azul"
                    src={ MediaQueryTablet() ? img_piece_medium_blue : img_piece_blue }
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
                    src={ MediaQueryTablet() ? img_piece_medium_yellow : img_piece_yellow }
                    subtitle="¿Cómo lo hacemos?"
                    text="Con metodologías que se ajusten a las necesidades de nuestros beneficiarios, 
                    formación a la medida del entorno empresarial y aliados estratégicos que facilitan el 
                    cumplimiento de la Corporación."
                />
                <div className="aboutUs__containerSecundary">
                    <Link to="/quienes_somos">
                        <ButtonBorder border="black" color="black" content="Conoce más" />
                    </Link>
                </div>
            </section>
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, quam inventore unde, cupiditate laudantium maiores fugiat voluptatem dolorum saepe tempora similique fugit ea itaque modi sit illo asperiores temporibus voluptatibus!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, quam inventore unde, cupiditate laudantium maiores fugiat voluptatem dolorum saepe tempora similique fugit ea itaque modi sit illo asperiores temporibus voluptatibus!</p>
        </>
    )
}