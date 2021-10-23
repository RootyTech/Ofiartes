import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { context } from '../../context';
//import { FichaTaller } from './taller'


{/*import {taller} from '   ';*/}
export const Talleres = () => {
    const {talleres} = useContext(context); /*asi traigo el objeto contexto*/
    return (
        <>
        <div className="search"> {/*display flex*/}
            <input type="text" className="search__input" placeholder="Buscar un curso" />
            <FaSearch/>
        </div>
        {console.log(talleres)}
        <section className="details__talleres">
            {
                talleres ?
                talleres.map((talleres,index) => (
                    <div key= {`taller-${index}`}>
                        <details>
                            <summary>{talleres.fields.title}</summary>
                            <p>{talleres.fields.description}</p>
                        </details>
                        <img src="" alt="" />
                    </div>
                ))
                :<h2>Loading...</h2>
            }
        </section>
        </>
    )
}