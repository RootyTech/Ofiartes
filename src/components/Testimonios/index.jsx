import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { context } from '../../context';

export const Testimonios = () => {

    import('./estilos.sass');
    if (window.outerWidth >= 1024) {
        import('./desktop.sass');
    }

    return (
        <div className="testimonios">
            <div className="testimonios__item">
                <div className="testimonios__item--info">
                    <img src="https://randomuser.me/api/portraits/men/88.jpg" alt="Imagen de ejemplo de una persona" width="150px" height="150px" />
                    <h2>Nombre</h2>
                    <p>Cargo</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique atque eos rerum quis temporibus.</p>
            </div>
            <div className="testimonios__item">
                <div className="testimonios__item--info">
                    <img src="https://randomuser.me/api/portraits/men/88.jpg" alt="Imagen de ejemplo de una persona" width="150px" height="150px" />
                    <h2>Nombre</h2>
                    <p>Cargo</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique atque eos rerum quis temporibus.</p>
            </div>
            <div className="testimonios__item">
                <div className="testimonios__item--info">
                    <img src="https://randomuser.me/api/portraits/men/88.jpg" alt="Imagen de ejemplo de una persona" width="150px" height="150px" />
                    <h2>Nombre</h2>
                    <p>Cargo</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique atque eos rerum quis temporibus.</p>
            </div>
            <div className="testimonios__item">
                <div className="testimonios__item--info">
                    <img src="https://randomuser.me/api/portraits/men/88.jpg" alt="Imagen de ejemplo de una persona" width="150px" height="150px" />
                    <h2>Nombre</h2>
                    <p>Cargo</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique atque eos rerum quis temporibus.</p>
            </div>
        </div>
    )
}

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