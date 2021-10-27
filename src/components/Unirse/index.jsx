import React from 'react';
import { Link } from 'react-router-dom';
//importación de imagenes
import img_beneficiario from '../../assets/img_beneficiario.png';
import img_empresa from '../../assets/img_empresa.png';
import img_voluntario from '../../assets/img_voluntario.png';

import { Formulario } from '../Formulario';


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
                            <Link to="#">Quiero ser beneficiario</Link>
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
                            <Link to="#">Quiero ser una empresa aliada</Link>
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
                            <Link to="#">Quiero ser voluntario</Link>
                        </button>
                    </div>
                </section>
                <br /><br /><br />
            </section>
            <p>formulario voluntario</p>   <br />         
            <Formulario>   
                <label htmlFor="name">Nombre completo</label>
                <input type="text" name="name" id="name" 
                placeholder="Ingrese su nombre completo" title="El nombre solo acepta letras y espacio en blanco"
                required pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"/>     

                <label htmlFor="num_id">Número de identificación</label>
                <input type="number" name="num_id" id="num_id" 
                placeholder="Ingrese su identificación" title="El número de identificación debe ser valido" required/>  

                <label htmlFor="email">Correo electronico</label>
                <input type="email" name="email" id="email" 
                placeholder="Ingrese su correo" title="El correo es incorrecto"
                required pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"/>  
                     
                <label htmlFor="tel">Teléfono de contacto</label>
                <input type="number" name="tel" id="tel" 
                placeholder="Ingrese su télefono de contacto" title="El teléfono es requerido" required/>

                <div>
                    <label htmlFor="handling_info">Autorización de manejo de la información</label>
                    <input type="checkbox" name="handling_info" id="handling_info" required title="Debe aceptarla :D" value="Acepto"/>
                </div>
                                          
            </Formulario>
            <br /><br /><br />
            {/* <p>formulario beneficiarix</p>     <br />      
            <Formulario>
            </Formulario>  
            <br /><br /><br />
            <p>formulario empresa</p>           */}



        </>
        
    )
}