import React, { useContext, useLayoutEffect } from 'react';
import { MediaQueryDesktop, MediaQueryTablet } from '../../lib/mediaQuery';
import { context } from '../../context';
import { LoaderGalery } from './Skeleton';

export const Galeria = () => {
    import ('./estilos.sass');
    //MediaQueryTablet() && import('./desktop.sass');

    const { galeria } = useContext(context);

    console.log(galeria);
    /**Estructura objeto galeria []
     * 0:
     *  fields:
     *      image:
     *          fields:
     *              description: ""
     *              file:
     *                  contentType:...
     *                  details:...
     *                  fileName:""
     *                  url:"//" <---
     *              title: "texto" <---
     *          metadata:....
     *          sys:.....
     *      title: "texto" <---
     *  metadata:...
     *  sys:....
     */
    return (
        <section className="galery">
            <h1>Galería de evidencias</h1>
            <section className="galery__pics">
                {
                    galeria ?
                        galeria.map((galeria,i) => (
                            <div className="galery__pics--item" key={`image_${i}`}>
                                <img src={galeria.fields.image.fields.file.url} alt={galeria.fields.image.fields.title} />
                                <div>{galeria.fields.title}</div>
                            </div>
                        ))
                    : MediaQueryDesktop() ?
                    <LoaderGalery {...{
                        width: 1024,
                        height: 600,
                        values: {
                            width:250,
                            height:192,
                            xposition:250,
                        },
                    }} />
                    : MediaQueryTablet() ?
                    <LoaderGalery {...{
                        width: 758,
                        height: 600,
                        values: {
                            width:168,
                            height:192,
                            xposition:50,
                        },
                    }} />
                    :
                    <LoaderGalery {...{
                        width: 320,
                        height: 600,
                        values: {
                            width:104,
                            height:192,
                            xposition:0,
                        },
                    }} />
                }
            </section>
        </section>
    )
}