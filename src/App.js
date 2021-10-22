import React, { useEffect, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

/** Componentes */
import { Testimonios } from './components/Testimonios';

/** Contentful */
import { client } from './client';

/** Contexto */ 
import { context } from './context';

export const App = () => {

    const [ contenido, setContenido ] = useState({});

    useEffect(() => { 
        (async () => {
            const res = await client.getEntries();

            const Talleres = await res.items.filter((item) => item.sys.contentType.sys.id === "talleres" )
            const Galeria = await res.items.filter((item) => item.sys.contentType.sys.id === "galeria" )
            const Novedades = await res.items.filter((item) => item.sys.contentType.sys.id === "novedades" )

            setContenido({
                galeria: Galeria,
                novedades: Novedades,
                talleres: Talleres,
            })

        })();
    }, []);

    return (
        <context.Provider value={contenido}>
            <HashRouter>
                { /** Lo que cambiará */}
                <Switch>
                    <Route exact path="/testimonios" component={Testimonios} />
                </Switch>
            </HashRouter>
        </context.Provider>
    )
}