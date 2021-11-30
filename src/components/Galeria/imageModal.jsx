import React from 'react';

export const ImageGaleria = (props) => {
    import ('./estilosImgModal.sass');

    return(
        <div className="galery__img">
            <img src={props.url} alt={props.alt} className="galery__img--open" />
        </div>
    )
}
