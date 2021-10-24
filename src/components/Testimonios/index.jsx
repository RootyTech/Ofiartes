/** React y React Hooks */
import React, { useContext, useEffect, useState } from 'react';
/** CONTEXTO */
import { context } from '../../context';

/** COMPONENTES */
import { Testimonio } from './Testimonio';
import { Circle } from './Circle';

/** LOADER */
import Loader from 'react-loader-spinner';

export const Testimonios = () => {

    /** Estilos importamos de manera dinamica */
    import('./estilos.sass');

    const { testimonios } = useContext(context);
    const [ counter, setCounter ] = useState(0);
    const [ Testimonios, setTestimonios ] = useState([]);

    useEffect(() => {
        
        if ( testimonios ) {
            const components = testimonios.map((testimonio, index) => (
                <Testimonio 
                contenido={testimonio.fields.description}
                nombre={testimonio.fields.name}
                cargo={testimonio.fields.role}
                foto={`https:${testimonio.fields.image.fields.file.url}`}
                key={`testimonio-${index}`}
                />
                ))
        }

    }, [testimonios])

    function Avanzar() {
        if (counter+1 === items.length) {
            setCounter(0);
        } else {
            setCounter(counter + 1)
        }
    }

    function Retroceder() {
        if (counter-1 < 0) {
            setCounter(items.length-1);
        } else {
            setCounter(counter - 1)
        }
    }

    return (
        <section className="testimonios">
            <h2>Testimonios</h2>
            {
                Testimonios.length !== 0 ?
                Testimonios[counter]
                : 
                <div className="loader" >
                    <Loader
                        type="ThreeDots"
                        color="#37BCFF"
                        height={100}
                        width={100}
                    />
                </div>
            }
            <div className="circles">
                {
                    Testimonios.length !== 0 &&
                    testimonios.map((item, index) => (
                        <Circle index={index} state={setCounter} active={ index === counter && "active" } key={"ciruclo-"+index} />
                    ))
                }
            </div>
        </section>
    );
};

/** EJEMPLO USANDO EL CONTEXTO */
const EjemploContexto = () => {
    const { talleres } = useContext(context);

    return (
        <>
            <Helmet>
                <title> Testimonios - Ofiartes </title>
                <meta name="description" content="Testimonios de Ofiartes" />
            </Helmet>
            <main className="container">
                <ul>
                    {
                        talleres ?
                        talleres.map((taller, indice) => (
                            <li key={`taller-${indice}`}>
                                <div>
                                    <h3>{ taller.fields.title }</h3>
                                    <p>{ taller.fields.description }</p>
                                    <img
                                    src={"https:"+taller.fields.imagenTaller.fields.file.url} 
                                    alt={taller.fields.imagenTaller.fields.description}
                                    />
                                </div>
                            </li>
                        )) : <h2>Loading...</h2>
                    }
                </ul>
            </main>
        </>
    )
}