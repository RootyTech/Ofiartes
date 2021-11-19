/** LIBRERÍAS */
import React from 'react';
import { Link } from 'react-router-dom';
import { MediaQueryDesktop } from '../../lib/mediaQuery';

/** LOGOTIPO */
import Logotipo from '../../assets/LogotipoSVG.svg';

/** COMPONENTES */
import { ButtonFill } from '../commons/Buttons';
import { openModal } from '../Modal';

export const InfoHeader = (props) => {

    const menuHamburger = document.querySelector('.header__menu--hamburger');
    const barAnimate = document.querySelector('.bar');

    const animate = () => {
        console.log("oli");
        if(barAnimate.classList.contains('bar--animate')){
            barAnimate.classList.remove('bar--animate')
            menuHamburger.classList.remove('hamburger--animate')
        } else {
            barAnimate.classList.add('bar--animate')
            menuHamburger.classList.add('hamburger--animate')
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
                                <Link to="/home">Inicio</Link>
                            </li>
                            <li>
                                <Link to="/talleres">Talleres</Link>
                            </li>
                            <li>
                                <Link to="/quienesSomos">Quienes Somos</Link>
                            </li>
                            <li>
                                <Link to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                    </nav>
                    :
                    <div className="header__menu--hamburger" onClick= {()=> {/*openModal();*/ animate()}}>
                        <div className="bar"></div>
                    </div>
                    }
                </div>
                <div className="header__logo">
                    <Link to="/home">
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
                    <Link to="#" replace>
                        <ButtonFill background="green" color="white" content="DONAR" />
                    </Link>
                    <br /><br />
                    <Link to="/voluntarios">
                        <ButtonFill background="blue" color="white" content="¿Quieres ser voluntario?" />
                    </Link>
                </div>
                : <p className="header__bottom--paragraph">{props.contenido}</p>
                }
            </div>
        </>
    )
}