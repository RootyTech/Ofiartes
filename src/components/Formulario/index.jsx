import React, { useLayoutEffect, useRef } from 'react';
import spinning_circles from '../../assets/spinning_circles.svg';

export const Formulario = (props) => {
    import ('./estilos.sass');//importo estilos spinning_circles.svg
//////////variables que inican con '$' se refieren a elementos del dom/////////
    console.log("desde formulario");
    
    useLayoutEffect(() => {
        console.log("desde el use layout");
        const d = document;
        const $form = d.querySelector('.form'),
        $inputs = d.querySelectorAll('.form [required]');//solo se traen los campos requeidos del form
        $inputs.forEach(input =>{//a cada input se le inserta un <spam> para mostrar el error de la validación
            const $span = d.createElement("span");
            $span.id = input.name+"_s";
            $span.textContent = input.title;
            $span.classList.add("form-error","none");//se añade los estilos y la clase que los oculta
            input.insertAdjacentElement("afterend",$span);
        });
        $inputs.forEach((input) =>{
            input.addEventListener("keyup", e => {
                let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern; //los data atribute se almacenan en dataset
                if(pattern && $input.value !== "") {//cumple la exp regular y no este vacio el campo
                    let regex = new RegExp(pattern), 
                    spamId = $input.name+"_s";//los spam tiene el mismo id de su imput pero con un '_s'
                    return !regex.exec($input.value)// exec() busca coincidencias de la exp regular en una cadena
                        ? d.getElementById(spamId).classList.add('is-active')
                        : d.getElementById(spamId).classList.remove('is-active')
                }
                if(!pattern) {//si el campo no tiene patron se valida que no este vacio
                    let spamId = $input.name+"_s";
                    return $input.value === ""
                        ? d.getElementById(spamId).classList.add('is-active')
                        : d.getElementById(spamId).classList.remove('is-active')
                }
            })
        })
    },[])

    const Form = useRef(null);

    const Submit = async (event) => {
        event.preventDefault();

        //console.log(Form.current.children);
        let content = {};
        let subject = '';
        
        if ( props.currentForm === 'voluntario' ) {
            content = {
                title: "NUEVO VOLUNTARIO",
                name: Form.current.children[1].value,
                id: Form.current.children[4].value,
                email_user: Form.current.children[7].value,
                phone: Form.current.children[10].value,
            };
            subject = "NUEVO VOLUNTARIO";
        } else if ( props.currentForm === 'empresas' ) {
            content = {
                title: "NUEVA EMPRESA",
                name: Form.current.children[1].value,
                id: Form.current.children[4].value,
                email_user: Form.current.children[7].value,
                phone: Form.current.children[10].value,
            };
            subject = "NUEVA EMPRESA";
        } else if ( props.currentForm === 'beneficiario' ) {

            let disability_check = Form.current.children[12].children[1].children[1].checked ? "SI" : "NO";

            content = {
                title: "NUEVO BENEFICIARIO",
                name: Form.current.children[1].value,
                id: Form.current.children[4].value,
                email_user: Form.current.children[7].value,
                phone: Form.current.children[10].value,
                disability: disability_check
            };
            subject = "NUEVO BENEFICIARIO";
        }

        const Body = {
            email: process.env.EMAIL,
            password: process.env.PASSW,
            addressee: process.env.EMAIL,
            subjectContent: subject,
            content
        }

        const response = await fetch('https://send-email-brown.vercel.app/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Body)
        })

        const data = await response.json();
        console.log(data);
        
    }

    return (
        <>
            <h2>Envianos tus datos</h2>
            <form onSubmit={(e) => Submit(e)} className="form" ref={Form}>
                {props.children}
                <input type="submit" value="Envíar" />
                <div className="form-loader none">
                    <img src={spinning_circles} alt="loader"/>
                </div>
                <div className="form-response none">
                    <p>Los datos han sido enviados</p>
                </div>
            </form>
        </>
    )
}