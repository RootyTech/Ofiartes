/** React y React Hooks */
import React, { useContext, useEffect, useState, useReducer } from 'react';
/** CONTEXTO */
import { context } from '../../context';

/** COMPONENTES */
import { Testimonio } from './Testimonio';
import { Circle } from './Circle';
import { LoaderSpinner } from '../commons/Loader';

import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'

import { MediaQueryDesktop } from '../../lib/mediaQuery';

/** REDUCER */

const reducerCounter = ( state, action ) => {
    switch (action.type) {
        case 'Increment':
            return {
                first: state.first + 1 === action.Arraylength ? 0 : state.first + 1,
                second: state.second + 1 === action.Arraylength ? 0 : state.second + 1,
            }
        case 'Decrement':
            return {
                first: state.first - 1 < 0 ? action.Arraylength - 1 : state.first - 1,
                second: state.second - 1 < 0 ? action.Arraylength - 1 : state.second - 1,
            }
    
        default: return state;
    }
}

export const Testimonios = () => {

    /** Estilos importamos de manera dinamica */
    import('./estilos.sass');
    MediaQueryDesktop() && import('./desktop.sass');

    const { testimonios } = useContext(context);
    const [ Testimonios, setTestimonios ] = useState([]);

    const [ counter, dispatch ] = useReducer(reducerCounter, {first: 0, second: 1});

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
                
                setTestimonios(components);
        }

    }, [testimonios])

    return (
        <section className="testimonios">
            <h2>Testimonios</h2>
            {
                testimonios ?
                <div className="testimonios__principal">
                    <a className="testimonios__principal--arrow" onClick={() => dispatch({type: 'Decrement', Arraylength: testimonios.length})}>
                        <MdOutlineArrowBackIos />
                    </a>
                    <div className="testimonios__content">
                        {
                            MediaQueryDesktop() ?
                            <>
                                { Testimonios[counter.first] }
                                { Testimonios[counter.second] }
                            </>
                            : Testimonios[counter.first]
                        }
                    </div>
                    <a className="testimonios__principal--arrow" onClick={() => dispatch({type: 'Increment', Arraylength: testimonios.length})}>
                        <MdOutlineArrowForwardIos />
                    </a>
                </div>
                : <LoaderSpinner />
            }
            <div className="circles">
                {
                    Testimonios.length !== 0 &&
                    testimonios.map((item, index) => (
                        <Circle index={index} active={ index === counter.first && "active" } key={"ciruclo-"+index} />
                    ))
                }
            </div>
        </section>
    );
};