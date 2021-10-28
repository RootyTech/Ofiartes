import React from 'react';

export const Formulario = (props) => {
    import ('./estilos.sass');//importo estilos
//////////variables que inican con '$' se refieren a elementos del dom/////////
    const d = document;
    const $form = d.querySelector('.form'),
    $inputs = d.querySelectorAll('.form [required]');//solo se traen los campos requeidos del form
    //console.log($inputs);
    $inputs.forEach(input =>{//a cada input se le inserta un <spam> para mostrar el error de la validación
        const $span = d.createElement("span");
        $span.id = input.name+"_s";
        $span.textContent = input.title;
        $span.classList.add("form-error","none");//se añade los estilos y la clase que los oculta
        input.insertAdjacentElement("afterend",$span);
    });

    d.addEventListener("keyup", e => {//se valida cuando se este tecleando en un input
        if(e.target.matches(".form [required]")) {//como el evento lo toma el document, se hace un match para validar que sea dentro del form
            let $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern; //los data atribute se almacenan en dataset
            //console.log($input, pattern);
            if(pattern && $input.value !== "") {//cumple la exp regular y no este vacio el campo
                //console.log("tiene patron");
                let regex = new RegExp(pattern), 
                spamId = $input.name+"_s";//los spam tiene el mismo id de su imput pero con un '_s'
                console.log(spamId);
                //console.log(!regex.exec($input.value));
                return !regex.exec($input.value)// exec() busca coincidencias de la exp regular en una cadena
                    ? d.getElementById(spamId).classList.add('is-active')
                    : d.getElementById(spamId).classList.remove('is-active')
            }
            if(!pattern) {//si el campo no tiene patron se valida que no este vacio
                console.log("no tiene patron");
                let spamId = $input.name+"_s";
                return $input.value === ""
                    ? d.getElementById(spamId).classList.add('is-active')
                    : d.getElementById(spamId).classList.remove('is-active')
            }
        }
    });

    return (
        <>
            <h2>Envianos tus datos</h2>
            <form className="form" action="https://formsubmit.co/daniijuradob@gmail.com" method="POST" target="_blank">
                {props.children}
                <input type="submit" value="Envíar" />
            </form>
        </>
    )
}