import React from 'react';
import { Link } from 'react-router-dom';
//importación de imagenes
import img_beneficiario from '../../assets/img_beneficiario.png';
import img_empresa from '../../assets/img_empresa.png';
import img_voluntario from '../../assets/img_voluntario.png';

//import { Formulario } from '../Formulario';


export const Unirse = () => {
    import ('./estilos.sass');
    return (
        <>
            <section className="join">
                <h2>Haz parte de la corporación</h2>
                <section className="join__wrap">
                    <div className="join__wrap--item">
                        <img src={img_beneficiario} alt="unete como beneficiario" />
                        <p>
                            Si haces parte de la población discapacitada 
                            y deseas pertenecer a la corporación para el 
                            fomento al empleo y el emprendimiento esta es 
                            tu oportunidad. Déjanos tus datos.
                        </p>
                        <button>
                            <Link to="/beneficiarios">Quiero ser beneficiario</Link>
                        </button>
                    </div>
                    <div className="join__wrap--item">
                        <img src={img_voluntario} alt="unete como empresa" />
                        <p>
                            Para las personas con discapacidad, desempeñar 
                            un trabajo es una forma de sentirse útil en la 
                            sociedad y un modo de realización personal, si 
                            tu empresa desea ser incluyente laboralmente, la 
                            corporación te brindará la asesoría adecuada en 
                            cada uno de los procesos. Déjanos tus datos.
                        </p>
                        <button>
                            <Link to="/empresas">Quiero ser una empresa aliada</Link>
                        </button>
                    </div>
                    <div className="join__wrap--item">
                        <img src={img_empresa} alt="unete como voluntario" />
                        <p>
                            Esta es una gran oportunidad de trasmitir 
                            tu tiempo y talento a las personas que más 
                            lo necesitan. Déjanos tus datos.
                        </p>
                        <button>
                            <Link to="/voluntarios">Quiero ser voluntario</Link>
                        </button>
                    </div>
                </section>
            </section>
        </>
    )
}