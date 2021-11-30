/** React y React Hooks */
import React, { useContext, useEffect, useState, useReducer, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

/** CONTEXTO */
import { context } from '../../context';

/** COMPONENTES */
import { Testimonio } from './Testimonio';
import { Circle } from './Circle';
import { MyLoader } from './Skeleton';
import { ButtonBorder } from '../commons/Buttons';
/** ICONS */
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';

/** MEDIA QUERIES JS */
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
    import(/* webpackChunkName: 'testimonios' */'./estilos.sass');    
    const { testimonios } = useContext(context);
    
    const [ counter, dispatch ] = useReducer(reducerCounter, {first: 0, second: 1});
    
    const [ Testimonios, setTestimonios ] = useState([]);
    const [widthSize, setWidthSize] = useState("Mobile");

    const ResizeTestimonios = () => {
       
        if (MediaQueryDesktop()) {
            setWidthSize("Desktop");
        } else {
            setWidthSize("Mobile");
        }
    }
    
    useEffect(() => {
        window.addEventListener('resize', ResizeTestimonios);

        return () => {
            window.removeEventListener('resize', ResizeTestimonios);
        }

    }, [])

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
                Testimonios.length !== 0 ?
                <div className="testimonios__principal">
                    <div>
                        <a className="testimonios__principal--arrow" onClick={() => dispatch({type: 'Decrement', Arraylength: testimonios.length})}>
                            <MdOutlineArrowBackIos />
                        </a>
                    </div>
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
                    <div>
                        <a className="testimonios__principal--arrow" onClick={() => dispatch({type: 'Increment', Arraylength: testimonios.length})}>
                            <MdOutlineArrowForwardIos />
                        </a>
                    </div>
                </div>
                : 
                <div className="testimonios__principal">
                    <div className="testimonios__content">
                        {
                            MediaQueryDesktop() ?
                            <>  
                                <MyLoader {...{
                                    width: 480,
                                    height: 210,
                                    contentwidth: 360,
                                    xpositions: [60, 87, 114, 240],
                                }} />
                                <MyLoader {...{
                                    width: 480,
                                    height: 210,
                                    contentwidth: 360,
                                    xpositions: [60, 87, 114, 240],
                                }} />
                            </>
                            : <MyLoader {...{
                                width: 270,
                                height: 235,
                                contentwidth: 270,
                                xpositions: [10, 30, 57, 135],
                            }} />
                        }
                    </div>
                </div>
            }
            <div className="circles">
                {
                    Testimonios.length !== 0 &&
                    testimonios.map((item, index) => (
                        <Circle index={index} active={ index === counter.first && "active" } key={"ciruclo-"+index} />
                    ))
                }
            </div>
            <div className="testimonios__button">
            <Link to="/voluntarios">
                <ButtonBorder border="black" color="black" content="¿Quieres ser voluntario?" />
            </Link>
            </div>
        </section>
    );
};