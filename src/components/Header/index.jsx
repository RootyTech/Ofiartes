/** LIBRERÍAS */
import React, { useState, useEffect } from 'react';
import { MediaQueryTablet, MediaQueryDesktop, MediaQueryDesktopL } from '../../lib/mediaQuery';

/** COMPONENTES */
import { InfoHeader } from './infoHeader';
import { MenuModal } from './menuModal';

export const Header = ({nombrePagina, titulo, contenido}) => {

    /** CÓDIGO DE LA IMPORTACIÓN DE ESTILOS DEPENDIENDO DEL TAMAÑO DE LA PANTALLA */

    import ('./estilos.sass');

    const [widthSize, setWidthSize] = useState("Mobile"); // Variable UseState que cambiará cuando se cargue la página o cuando se redimensione esta

    const ResizeHeader = () => { // Constante que guarda la función que valida con que media Query se está trabajando
        // MediaQueryDesktopL() -> Verdadero si se pasa de 1600px
        if(MediaQueryDesktopL()){
            setWidthSize("Desktop L"); // Se cambia la variable, para volver a correr el código
            import('./desktop_L.sass'); // Se importan los estilos correspondientes a Desktop
            console.log("Estilos aplicados Desktop L");
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
    }

    useEffect(() => {
        window.addEventListener('resize', ResizeHeader); // REALIZAR LA FUNCIÓN CUANDO LA PÁGINA CAMBIA DE TAMAÑO (EN TIEMPO REAL)
        window.addEventListener('load', ResizeHeader); // REALIZAR LA FUNCIÓN CUANDO LA PÁGINA CARGA POR PRIMERA VEZ
        return () => {
            window.removeEventListener('resize', ResizeHeader); // REMOVER EVENTLISTENER
            window.removeEventListener('load', ResizeHeader); // REMOVER EVENTLISTENER
        }
    }, [])
    
    return (
        <>
            {/* Así hay que hacerlo cuando las páginas esten listas, enviando el nombre de la pagina, el titulo y el contenido */}
            {/* <InfoHeader pagina={nombrePagina} titulo={titulo} contenido={contenido}></InfoHeader> */}

            <header className="header">
                <div className="header__main">
                    <InfoHeader pagina="Home" titulo="¿Quieres ayudar y no sabes cómo?" contenido=""></InfoHeader>
                    <div className="header__template"></div>
                </div>
            </header>

            {/* {MediaQueryDesktop() ? <></> : <MenuModal/>} */}

            {/* <header className="header">
                <div className="header__main">
                    <InfoHeader pagina="QuienesSomos" titulo="¿Quiénes somos?" contenido="Somos un grupo de profesionales de diferentes áreas 
                        que disfrutamos el trabajo con comunidades con riesgo psicosocial; nos apoyamos en nuestros conocimientos profesionales para 
                        fomentar en estas poblaciones el empleo."></InfoHeader>
                    <div className="header__template"></div>
                </div>
            </header> */}
            {/* <header className="header">
                <div className="header__main">
                    <InfoHeader pagina="Talleres" titulo="Nuestros talleres" contenido="En OFI ARTES te brindamos acompañamientos en: psicología, 
                        formación en artes y oficios."></InfoHeader>
                    <div className="header__template"></div>
                </div>
            </header> */}
        </>
    )
}