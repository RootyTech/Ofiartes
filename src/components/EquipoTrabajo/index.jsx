import React, {useState, useEffect} from 'react';
import { Carousel } from './Carousel';
import { MediaQueryMobile365, MediaQueryTablet, MediaQueryDesktop } from '../../lib/mediaQuery';

export const EquipoTrabajo = () => {
    import('./estilos.sass');
    {/*Preguntamos si el tamaño supera los 400 px, si es así entonces importamos los estilos que contienen ese media Query*/}
    MediaQueryMobile365() && import('./mobile365.sass');
    MediaQueryTablet() && import('./tablet.sass');
    MediaQueryDesktop() && import('./desktop.sass');

    {/*Usaremos el useState para que todo se vuelva a renderizar cuando la variable cambie de valor, en el momento en el que se renderize de nuevo se renderizará de acuerdo al tamaño que tenga*/}
    const [widthSize, setWidthSize] = useState("Mobile");
    const ResizeWorkTeam = () => {
        // MediaQueryTablet() -> True si se pasa de 768px
        if (MediaQueryTablet()) {
            setWidthSize("Tablet");
        } else if(MediaQueryMobile365()) {// MediaQueryMobile400() -> True si se pasa de 400px
            setWidthSize("Mobile365");
        } else {
            setWidthSize("Mobile")
        }
    }
    {/*Aquí usamos el useEffect para que esto se ejecute luego de que ya se haya renderizado el componente para evitar errores a la hora de poner el evento*/}
    useEffect(() => {
        window.addEventListener('resize', ResizeWorkTeam);

        return () => {
            window.removeEventListener('resize', ResizeWorkTeam);
        }

    }, [])
    return (
        <section className="workTeam">
            <h2 className="workTeam__title">Nuestro equipo de trabajo</h2>
            <Carousel/>
        </section>
    )
}