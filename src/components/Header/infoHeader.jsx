import React from 'react';
import { Link } from 'react-router-dom';
import { MediaQueryTablet, MediaQueryDesktop } from '../../lib/mediaQuery';

/** LOGOTIPO */
import Logotipo from '../../assets/LogotipoSVG.svg';

/** COMPONENTES */
import { ButtonFill } from '../commons/Buttons';

export const InfoHeader = (props) => {
    return (
        <>
            <div className="header__top">
                <div className="header__menu">
                    {/* AQUÍ VA A IR UN CONDICIONAL PARA SABER QUE MENÚ MOSTRAR */}
                    {/* AQUI VA A IR EL MENÚ DE DESKTOP */}
                    {MediaQueryDesktop() ?
                    <ul>
                        <li>
                            <Link to="#">Quienes Somos</Link>
                        </li>
                    </ul>
                    :
                    <Link to="#" className="header__menu--on">
                        <span></span>
                        <span></span>
                        <span></span>
                    </Link>
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
                    <Link to="#">
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