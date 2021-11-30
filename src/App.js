import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
import { TarjetaCursos } from './components/TarjetaCursos';
import { Unirse } from './components/Unirse';
import { Beneficiario } from './pages/Beneficiario';
import { Voluntario } from './pages/Voluntario';
import { Empresa } from './pages/Empresas';
import { NotFound } from './pages/NotFound';

import { Home } from './pages/Home';
import { QuienesSomos } from './pages/QuienesSomos';
import { PagTalleres } from './pages/Talleres';

/** Estilos globales */
import './global.sass';

/** Contentful */
import { client } from './client';

/** Contexto */ 
import { context } from './context';

export const App = () => {

    const [ contenido, setContenido ] = useState({});
    const [ modal, setModal ] = useState("");      


    useEffect(() => { 
        (async () => {
            const res = await client.getEntries();
            let Data = {
                galeria: [],
                news: [],
                talleres: [],
                members: [],
                testimonios: [],
            }

            res.items.forEach((item) => {
                if (item.sys.contentType.sys.id === "talleres") Data.talleres.push(item);
                if (item.sys.contentType.sys.id === "galeria") Data.galeria.push(item);
                if (item.sys.contentType.sys.id === "novedades") Data.news.push(item);
                if (item.sys.contentType.sys.id === "integrantes") Data.members.push(item);
                if (item.sys.contentType.sys.id === "testimonios") Data.testimonios.push(item);
            })

            setContenido(Data)
        })();
    }, []);

    return (
        <context.Provider value={{modal, setModal, ...contenido}}>
            <BrowserRouter>
                { /** Lo que cambiará */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/quienes-somos" component={QuienesSomos} />
                    <Route exact path="/pag-talleres" component={PagTalleres} />
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
                    <Route exact path="/tarjeta_cursos" component={ TarjetaCursos} />
                    <Route exact path="/unirse" component={Unirse} />
                    <Route exact path="/beneficiarios" component={Beneficiario} />
                    <Route exact path="/voluntarios" component={Voluntario} />
                    <Route exact path="/empresas" component={Empresa} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        </context.Provider>
    )
}