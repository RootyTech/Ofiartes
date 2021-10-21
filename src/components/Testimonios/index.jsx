import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { context } from '../../context';
import './estilos.sass';

export const Testimonios = () => {

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