import React, { useEffect, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

/** Componentes */
import { EquipoTrabajo } from './components/EquipoTrabajo';
import { Footer } from './components/Footer';
import { Formulario } from './components/Formulario';
import { Galeria } from './components/Galeria';
import { Header } from './components/Header';
import { MisionVision } from './components/MisionVision';
import { Novedades } from './components/Novedades';
import { QueComo } from './components/QueComo';
import { Talleres } from './components/Talleres';
import { Testimonios } from './components/Testimonios';
import { Unirse } from './components/Unirse';

import { NotFound } from './pages/NotFound';

/** Contentful */
import { client } from './client';

/** Contexto */ 
import { context } from './context';

export const App = () => {

    const [ contenido, setContenido ] = useState({});

    useEffect(() => { 
        (async () => {
            const res = await client.getEntries();
            const Talleres = res.items.filter((item) => item.sys.contentType.sys.id === "talleres" )
            const Galeria = res.items.filter((item) => item.sys.contentType.sys.id === "galeria" )
            const Novedades = res.items.filter((item) => item.sys.contentType.sys.id === "novedades" )
            const Integrantes = res.items.filter((item) => item.sys.contentType.sys.id === "integrantes" )
            const Testimonios = res.items.filter((item) => item.sys.contentType.sys.id === "testimonios" )
            setContenido({
                galeria: Galeria,
                news: Novedades,
                talleres: Talleres,
                members: Integrantes,
                testimonios: Testimonios
            })

        })();
    }, []);

    return (
        <context.Provider value={contenido}>
            <HashRouter>
                { /** Lo que cambiará */}
                <Switch>
                    <Route exact path="/testimonios" component={Testimonios} />
                    <Route exact path="/equipo_trabajo" component={EquipoTrabajo} />
                    <Route exact path="/footer" component={Footer} />
                    <Route exact path="/formulario" component={Formulario} />
                    <Route exact path="/galeria" component={Galeria} />
                    <Route exact path="/header" component={Header} />
                    <Route exact path="/mision_vision" component={MisionVision} />
                    <Route exact path="/novedades" component={Novedades} />
                    <Route exact path="/que_como" component={QueComo} />
                    <Route exact path="/talleres" component={Talleres} />         
                    <Route exact path="/unirse" component={Unirse} />                  
                    <Route path="*" component={NotFound} />              
                </Switch>
            </HashRouter>
        </context.Provider>
    )
}