import React from 'react';
import { FaYoutube } from 'react-icons/fa';

import { FaBullhorn } from 'react-icons/fa';
import { Read } from '../../lib/Read';

export const Testimonio = ({contenido, nombre, cargo, foto, video}) => {

    import(/* webpackChunkName: 'testimonio-mobile' */'./testimonio.sass');

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
            <p className="testimonio__youtube" > 
                Testimonio completo 
                <a href={video} target="_blank" rel="nofollow noopener noreferrer">
                    <FaYoutube className="testimonio__youtube--icon" />
                </a>
            </p>
        </div>
    )
}