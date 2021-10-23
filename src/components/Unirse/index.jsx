import React from 'react';
import { Link } from 'react-router-dom';
//importación de imagenes
import img_beneficiario from '../../assets/img_beneficiario.png';
import img_empresa from '../../assets/img_empresa.png';
import img_voluntario from '../../assets/img_voluntario.png';

export const Unirse = () => {
    return (
        <section className="unirse">
            <h2>Haz parte de la corporación</h2>
            <div className="unirse__item">
                <img src={img_beneficiario} alt="unete como beneficiario" />
                <p>
                    si haces parte de la población discapacitada 
                    y deseas pertenecer a la corporación para el 
                    fomento al empleo y el emprendimiento esta es 
                    tu oportunidad. <br /> Déjanos tus datos.
                </p>
                <button>
                    <Link to="#">Quiero inscribirme como beneficiario</Link>
                </button>
            </div>
            <div className="unirse__item">
                <img src={img_empresa} alt="unete como voluntario" />
                <p>
                    Esta es una gran oportunidad de trasmitir 
                    tu tiempo y talento a las personas que más 
                    lo necesitan. <br /> Déjanos tus datos.
                </p>
                <button>
                    <Link to="#">Quiero ser voluntario</Link>
                </button>
            </div>
            <div className="unirse__item">
                <img src={img_voluntario} alt="unete como empresa" />
                <p>
                    Para las personas con discapacidad, desempeñar 
                    un trabajo es una forma de sentirse útil en la 
                    sociedad y un modo de realización personal, si 
                    tu empresa desea ser incluyente laboralmente, la 
                    corporación te brindará la asesoría adecuada en 
                    cada uno de los procesos. <br /> Déjanos tus datos.
                </p>
                <button>
                    <Link to="#">Quiero ser una empresa aliada</Link>
                </button>
            </div>
        </section>
    )
}