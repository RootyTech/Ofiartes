import React, { useContext, useLayoutEffect } from 'react';
import { MediaQueryDesktop, MediaQueryTablet } from '../../lib/mediaQuery';
import { context } from '../../context';
import { LoaderGalery, LoaderGaleryDesk } from './Skeleton';
import { openModal } from '../Modal';

export const Galeria = () => {
    /************Imporación de estilos y media queries**************/
    import ('./estilos.sass');
    // MediaQueryTablet() && import('./desktop.sass');
    /************Uso del context***********/
    const { galeria } = useContext(context);
    const { modal, setModal } = useContext(context);
    //console.log(galeria);
    /**Estructura array galeria []
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
            <h2>Galería de evidencias</h2>
            <section className="galery__pics">
                {
                    galeria == 1?
                        galeria.slice(0,9).map((galeria,i) => (
                            <div className="galery__pics--item" key={`image_${i}`}>
                                <img src={galeria.fields.image.fields.file.url} alt={galeria.fields.image.fields.title} />
                                <div onClick={() => {setModal({ "imgurl":galeria.fields.image.fields.file.url, "alt":galeria.fields.image.fields.title }); openModal();}}>{galeria.fields.title}</div>
                            </div>
                        ))
                    : MediaQueryDesktop() ?
                        <LoaderGaleryDesk {...{
                            width: 1100,
                            height: 850,
                            values: {
                                width:360,
                                height:272,
                                xposition:0,
                            },
                        }} />
                    : MediaQueryTablet() ?
                        <LoaderGalery {...{
                            width: 758,
                            height: 600,
                            values: {
                                width:168,
                                height:192,
                                xposition:0,
                            },
                        }} />
                    :
                        <LoaderGalery {...{
                            width: 285,
                            height: 490,
                            values: {
                                width:140,
                                height:160,
                                xposition:0,
                            },
                        }} />
                }
            </section>
        </section>
    )
}