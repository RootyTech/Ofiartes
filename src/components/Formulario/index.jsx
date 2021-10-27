import React from 'react';

export const Formulario = (props) => {
    import ('./estilos.sass');

    const d = document;
    const $form = d.querySelector('.form'),
    $inputs = d.querySelectorAll('.form [required]');

    console.log($inputs);

    $inputs.forEach(input =>{
        const $span = d.createElement("span");
        $span.id = input.name+"_s";
        $span.textContent = input.title;
        $span.classList.add("form-error","none");
        input.insertAdjacentElement("afterend",$span);
    });

    d.addEventListener("keyup", e => {
        if(e.target.matches(".form [required]")) {
            let $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern; //los data atribute se almacenan en dataset
            //console.log($input, pattern);
            if(pattern && $input.value !== "") {
                console.log("tiene patron");
                let regex = new RegExp(pattern);
                console.log(!regex.exec($input.value));
                return !regex.exec($input.value)
                    ? d.getElementById($input.name+"_s").classList.add('is-active')
                    : d.getElementById($input.name+"_s").classList.remove('is-active')
            }
            if(!pattern) {
                console.log("no tiene patron");
                return $input.value === ""
                    ? d.getElementById($input.name).classList.add('is-active')
                    : d.getElementById($input.name).classList.remove('is-active')
            }
        }
    });

    return (
        <>
            <form className="form" action="" method="POST">
                {props.children}
                <input type="submit" value="Envíar" />
            </form>
        </>
    )
}