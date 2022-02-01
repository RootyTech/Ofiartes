import React from 'react';
import { Helmet } from 'react-helmet';

import { Formulario } from '../components/Formulario';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Modal } from '../components/Modal';

export const Empresa = () => {
    return (
        <>
            <Helmet>
                <title>Empresas - Ofi Artes</title>
                <meta name="description" content="Haz parte de nuestras empresas afiliadas" />
            </Helmet>
            <Modal/>
            <Header nombrePagina="empresas" titulo="Haz parte de nuestras empresas afiliadas" contenido="Para las personas con discapacidad, desempeñar un trabajo es una forma de sentirse útil en la sociedad y un modo de realización personal, si tu empresa desea ser incluyente laboralmente o realizar algun tipo de donación, la corporación te brindará la asesoría adecuada en cada uno de los procesos."/>
            <Formulario currentForm="empresas">   
                <label htmlFor="name">Nombre de la empresa</label>
                <input type="text" name="name" id="name" 
                placeholder="Ingrese el nombre de la empresa u organización" title="El nombre solo acepta letras y espacio en blanco"
                required pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"/>     

                <label htmlFor="num_id">NIT empresarial</label>
                <input type="number" name="num_id" id="num_id" 
                placeholder="Ingrese su identificación" title="El número de identificación debe ser valido" required/>  

                <label htmlFor="email">Correo electronico</label>
                <input type="email" name="email" id="email" 
                placeholder="Ingrese su correo" title="El correo es incorrecto"
                required pattern="^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"/>  
                    
                <label htmlFor="nameContact">Nombre del contacto</label>
                <input type="text" name="nameContact" id="nameContact" 
                placeholder="Ingrese su nombre completo" title="El nombre solo acepta letras y espacio en blanco"
                required pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"/>

                <label htmlFor="tel">Teléfono de contacto</label>
                <input type="number" name="tel" id="tel" 
                placeholder="Ingrese su télefono de contacto" title="El teléfono es requerido" required/>

                <div>
                    <label htmlFor="handling_info">Autorización de manejo de la información</label>
                    <p>
                        <br />
                        <input type="checkbox" name="handling_info" id="handling_info" required title="Debe aceptarla :D" value="Acepto"/>
                        Acepto que la Corporación Ofi Artes haga un buen uso de mi información.
                    </p>
                </div>                       
            </Formulario>
            <Footer />
        </>
    )
}
