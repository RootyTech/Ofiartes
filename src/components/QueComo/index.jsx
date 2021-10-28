import React from 'react';
import './estilos.sass';

/** COMPONENTES */
import { WhatHow } from './whatHow';
import { Button } from './button';

export const QueComo = () => {

    // const puzzle = document.querySelectorAll('.aboutUs__puzzle');
    // const windowSize = (window.innerHeight/2);
    // const x = window.matchMedia("(max-width: 1023px)");
    // let aboutUs__positions=[];

    // (function(){
    //     if(x.matches){
    //         return window.addEventListener('scroll', ()=>{
    //             aboutUs__positions[0] = puzzle[1].getBoundingClientRect().bottom;
    //             aboutUs__positions[1] = puzzle[0].getBoundingClientRect().top;
    //             if(windowSize/2 > aboutUs__positions[0]){
    //                 console.log("3");
    //                 puzzle[0].classList.remove('aboutUs__puzzle--animation');
    //                 puzzle[1].classList.remove('aboutUs__puzzle--animation');
    //             }else if(windowSize > aboutUs__positions[1]){
    //                 console.log("1");
    //                 puzzle[0].classList.add('aboutUs__puzzle--animation');
    //                 puzzle[1].classList.add('aboutUs__puzzle--animation');
    //             }else{
    //                 console.log("2");
    //                 puzzle[0].classList.remove('aboutUs__puzzle--animation');
    //                 puzzle[1].classList.remove('aboutUs__puzzle--animation');
    //             }
    //         }, { passive: true })
    //     }
    // })();

    return (
        <section className="aboutUs">
            <div className="aboutUs__verticalLine"></div>
            <WhatHow 
                clase="aboutUs__container aboutUs__container--white"
                clase2="aboutUs__puzzle"
                subtitle="¿Qué hacemos?"
                text="Fomentamos el empleo y el emprendimiento a través de la formación en artes y oficios, 
                dirigido a jóvenes y adultos en condición de discapacidad y población vulnerable."
            />
            <WhatHow
                clase="aboutUs__container aboutUs__container--black"
                clase2="aboutUs__puzzle"
                subtitle="¿Cómo lo hacemos?"
                text="Con metodologías que se ajusten a las necesidades de nuestros beneficiarios, 
                formación a la medida del entorno empresarial y aliados estratégicos que facilitan el 
                cumplimiento de la Corporación."
            />
            <div className="aboutUs__containerSecundary">
                <Button clase="aboutUs__btn aboutUs__btn--gris" message="Conoce más"/>
            </div>
        </section>
    )
}