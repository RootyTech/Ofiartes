import React from 'react';
import { MediaQueryTablet } from '../../lib/mediaQuery';
import { FaBullhorn } from 'react-icons/fa';

export const Testimonio = ({contenido, nombre, cargo, foto}) => {

    import('./testimonio.sass');
    MediaQueryTablet() && import('./desktop.sass');

    function Read() {

        const text = `Testimonio de ${nombre} ${cargo} : ${contenido}`;
        const synth = window.speechSynthesis;
        const utterThis = new SpeechSynthesisUtterance(text);
        utterThis.lang = 'es-ES';
        synth.speak(utterThis)

    }

    return (
        <div className="testimonio">
            <FaBullhorn onClick={() => Read()} className="Horn" />
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