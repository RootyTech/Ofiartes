import React from 'react';
import { MediaQueryTablet } from '../../lib/mediaQuery';
import { FaBullhorn } from 'react-icons/fa';
import { Read } from '../../lib/Read';

export const Testimonio = ({contenido, nombre, cargo, foto}) => {

    import(/* webpackChunkName: 'testimonio-mobile' */'./testimonio.sass');
    MediaQueryTablet() && import(/* webpackChunkName: 'testimonio-desktop' */'./desktop.sass');

    return (
        <div className="testimonio">
            <FaBullhorn onClick={() => Read(nombre, cargo, contenido)} className="Horn" />
            <p className="testimonio__contenido">"{contenido}"</p>
            <div className="testimonio__info">
                <img src={foto} alt={`Fotografía del beneficiario ${nombre}`} />
                <div>
                    <h4>{nombre}</h4>
                    <p>{cargo}</p>
                </div>
            </div>
        </div>
    )
}