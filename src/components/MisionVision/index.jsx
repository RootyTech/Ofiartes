import React, { useContext, useEffect, useState } from 'react';
import { MediaQueryTablet, MediaQueryDesktop, MediaQueryDesktopL } from '../../lib/mediaQuery';

//importación de componentes
import {SvgComponent} from './Puzzle';
import { Content } from './Content';

export const MisionVision = () => {
    import ('./estilos.sass');
    
    const [widthSize, setWidthSize] = useState("Mobile"); // Estado que se actualiza cuando se cargue la página o cuando se redimensione esta

    const ResizeHeader = () => { // Constante que guarda la función que valida con que media Query se está trabajando
        // MediaQueryDesktopL() -> Verdadero si se pasa de 1600px
        if(MediaQueryDesktopL()){
            setWidthSize("Desktop L"); // Se cambia la variable, para volver a correr el código
            //import('./desktop_L.sass'); // Se importan los estilos correspondientes a Desktop
            //console.log("Estilos aplicados Desktop L");
        // MediaQueryDesktop() -> Verdadero si se pasa de 1024px
        }else if (MediaQueryDesktop()){
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
    };

    useEffect(() => {
        window.addEventListener('resize', ResizeHeader); // REALIZAR LA FUNCIÓN CUANDO LA PÁGINA CAMBIA DE TAMAÑO (EN TIEMPO REAL)
        window.addEventListener('load', ResizeHeader); // REALIZAR LA FUNCIÓN CUANDO LA PÁGINA CARGA POR PRIMERA VEZ
        return () => {
            window.removeEventListener('resize', ResizeHeader); // REMOVER EVENTLISTENER
            window.removeEventListener('load', ResizeHeader); // REMOVER EVENTLISTENER
        }
    }, []);

    return (
        <>
        <div className="contenido__blanco history">
            <div>
                <h4>Nuestra historia</h4>
                <br />
                <p>
                Fomentamos el empleo y el emprendimiento a través de la formación 
                en artes y oficios; dirigido a jóvenes y adultos en diferentes 
                comunidades del Departamento de Antioquia.Fomentamos el empleo y 
                el emprendimiento a través de la formación en artes y oficios; 
                dirigido a jóvenes y adultos en diferentes comunidades del departamento 
                de Antioquia. Fomentamos el empleo y el emprendimiento a través de la 
                formación en artes y oficios; dirigido a jóvenes y adultos en diferentes 
                comunidades del departamento de Antioquia.
                </p>
            </div>
            <br />
            <hr />
        </div>
        <Content color="white">
            <div className="ficha">
                <div className="none short"></div>
                <SvgComponent color ="#37BCFF"/>
                <div className="larger"></div>
            </div>
            <h4>Misión</h4>
            <p>Trabajamos para generar en las poblaciones vulnerables <span>en especial 
                niños, jóvenes y adultos que tengan algún tipo de discapacidad</span>, 
                Oportunidades de inclusión social, laboral, emprendimiento y de 
                formación en artes y oficios.
            </p>
        </Content>
        <Content color="black">
            <div className="ficha">
                <div className="short"></div>
                <SvgComponent color ="#5CE6A8"/>
                <div className="larger"></div>
            </div>
            <h4>Visión</h4>
            <p>Proyectamos para el 2025 aumentar el número de beneficiarios con 
                los diferentes programas de inclusión social, laboral, emprendimiento 
                y de formación en artes y oficios.
            </p>
        </Content>
        <Content color="white">
            <div className="ficha">
                <div className="short"></div>
                <SvgComponent color ="#FF6565"/>
                <div className="larger none"></div>
            </div>
            <h4>Nuestros valores</h4>
            <ul className="valores">
                <li>Amor por lo que hacemos</li>
                <li>Respeto</li>
                <li>Compromiso</li>
                <li>Profesionalismo</li>
                <li>Confianza</li>
                <li>Generosidad</li>
                <li>Ética</li>
            </ul>
        </Content>
{/*         
        <div className="contenido__blanco mision fichas">
            <div className="puzzle__line">
                <SvgComponent color="#37BCFF"/>
                <div className="line"></div>
            </div>
            <div className="fichas__content">
                <h4>Misión</h4>
                <br />
                <p className="message">
                Trabajamos para generar en las poblaciones vulnerables en especial 
                niños, jóvenes y adultos que tengan algún tipo de discapacidad, 
                Oportunidades de inclusión social, laboral, emprendimiento y de 
                formación en artes y oficios.
                </p>
            </div>
        </div>
        <div className="contenido__negro vision fichas">
            <div className="puzzle__line">
                <SvgComponent color="#37BCFF"/>
                <div className="line"></div>
            </div>
            <div className="fichas__content">
                <h4>Visión</h4>
                <br />
                <p className="message">
                Proyectamos para el 2025 aumentar el número de beneficiarios con 
                los diferentes programas de inclusión social, laboral, emprendimiento 
                y de formación en artes y oficios.
                </p>
            </div>
        </div>
        <div className="contenido__blanco  fichas">
            <div className="puzzle__line">
                <SvgComponent color="#37BCFF"/>
                <div className="line"></div>
            </div>
            <div className="fichas__content">
                <h4>Nuestros valores</h4>
                <br />
                {/* <ul className="valores">
                    <li>Amor por lo que hacemos</li>
                    <li>Respeto</li>
                    <li>Compromiso</li>
                    <li>Profesionalimos</li>
                    <li>Confianza</li>
                    <li>Generosidad</li>
                    <li>Ética</li>
                </ul>
            </div>
        </div> */}
        </>
    )
}