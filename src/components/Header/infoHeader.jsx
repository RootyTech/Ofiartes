/** LIBRERÍAS */
import React, {useContext} from 'react';
import { context } from '../../context';
import { Link } from 'react-router-dom';
import { MediaQueryDesktop } from '../../lib/mediaQuery';

/** LOGOTIPO */
import Logotipo from '../../assets/LogotipoSVG.svg';

/** COMPONENTES */
import { ButtonFill } from '../commons/Buttons';
import { openModal } from '../Modal';

export const InfoHeader = (props) => {

    const barAnimate = document.querySelector('.bar');
    const { modal, setModal } = useContext(context);

    const animate = () => {
        if(barAnimate.classList.contains('bar--animate')){
            barAnimate.classList.remove('bar--animate')
        } else {
            barAnimate.classList.add('bar--animate')
        }
    }

    return (
        <>
            <div className="header__top">
                <div className="header__menu">
                    {/* AQUÍ VA A IR UN CONDICIONAL PARA SABER QUE MENÚ MOSTRAR */}
                    
                    {/* MENÚ DE DESKTOP */}
                    {MediaQueryDesktop() ?
                    <nav className="header__nav">
                        <ul>
                            <li>
                                <Link to="/">Inicio</Link>
                            </li>
                            <li>
                                <Link to="/talleres">Talleres</Link>
                            </li>
                            <li>
                                <Link to="/quienes-somos">Quienes Somos</Link>
                            </li>
                            <li>
                                <a href="https://api.whatsapp.com/send?phone=573147477226" target="_blank" rel="nofollow noopener noreferrer">Contacto</a>
                            </li>
                        </ul>
                    </nav>
                    :
                    <div className="header__menu--hamburger" onClick= {() => { setModal("header");  openModal(); animate(); setTimeout(animate, 500) }}>
                        <div className="bar"></div>
                    </div>
                    }
                </div>
                <div className="header__logo">
                    <Link to="/">
                        <figure>
                            <img src={Logotipo} alt="Logo de la corporación Ofiartes" width="70" height="70"/>
                        </figure>
                    </Link>
                </div>
            </div>
            <div className="header__bottom">
                <h1>{props.titulo}</h1>
                {props.pagina === 'Home'
                ? 
                <div className="header__bottom--buttons">
                    <Link to="#" replace> {/** FALTA COLOCAR EL ENLACE DE LAS DONACIONES (CORPORACIÓN FÉ) */}
                        <ButtonFill background="green" color="white" content="Donar" />
                    </Link>
                    <br /><br />
                    <Link to="voluntarios" className="header__bottom--blue">
                        <ButtonFill background="blue" color="white" content="Quiero ser parte de la corporación" />
                    </Link>
                </div>
                : <p className="header__bottom--paragraph">{props.contenido}</p>
                }
            </div>
        </>
    )
}