import React from 'react';
import { Helmet } from 'react-helmet';

import { Formulario } from '../components/Formulario';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Modal } from '../components/Modal';

export const Beneficiario = () => {
    return (
        <>
            <Helmet>
                <title>Beneficiarios - Ofiartes</title>
                <meta name="description" content="Inscríbete con nosotros" />
            </Helmet>
            <Modal/>
            <Header nombrePagina="beneficiario" titulo="Inscríbete con nosotros" contenido="Si haces parte de la población discapacitada y deseas pertenecer a la corporación para el fomento al empleo y el emprendimiento esta es tu oportunidad."/>
            <Formulario currentForm="beneficiario">   
                <label htmlFor="name">Nombre completo</label>
                <input type="text" name="name" id="name" 
                placeholder="Ingrese su nombre completo" title="El nombre solo acepta letras y espacio en blanco"
                required pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"/>     

                <label htmlFor="num_id">Número de identificación</label>
                <input type="number" name="num_id" id="num_id" 
                placeholder="Ingrese su identificación" title="El número de identificación debe ser valido" required/>  

                <label htmlFor="email">Correo electrónico</label>
                <input type="email" name="email" id="email" 
                placeholder="Ingrese su correo" title="El correo es incorrecto"
                required pattern="^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"/>  
                    
                <label htmlFor="tel">Teléfono de contacto</label>
                <input type="number" name="tel" id="tel" 
                placeholder="Ingrese su télefono de contacto" title="El teléfono es requerido" required/>

                <div>
                    <label htmlFor="disability">Soy una persona con discapacidad</label>
                    <p>
                        <br />
                        <input type="radio" name="disability" required />
                        Si
                    </p>
                    <p>
                        <br />
                        <input type="radio" name="disability" required />
                        No
                    </p>
                </div>

                <div>
                    <label htmlFor="handling_info">Autorización de manejo de la información</label>
                    <p>
                        <br />
                        <input type="checkbox" name="handling_info" id="handling_info" required title="Debe aceptarla :D" value="Acepto"/>
                        Acepto que la Corporación Ofiartes haga un buen uso de mi información.
                    </p>
                </div>                       
            </Formulario>
            <Footer />
        </>
        
    )
}
