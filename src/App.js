import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/** Importación de las páginas */
import { Home } from './pages/Home';
import { PagTalleres } from './pages/Talleres';
import { QuienesSomos } from './pages/QuienesSomos';
import { Beneficiario } from './pages/Beneficiario';
import { Voluntario } from './pages/Voluntario';
import { Empresa } from './pages/Empresas';
import { NotFound } from './pages/NotFound';

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
                    {/** PÁGINAS */}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/quienes-somos" component={QuienesSomos} />
                    <Route exact path="/talleres" component={PagTalleres} />
                    <Route exact path="/beneficiarios" component={Beneficiario} />
                    <Route exact path="/voluntarios" component={Voluntario} />
                    <Route exact path="/empresas" component={Empresa} />
                    {/* COMPONENTES
                        <Route exact path="/comp-testimonios" component={Testimonios} />
                        <Route exact path="/comp-equipo-trabajo" component={EquipoTrabajo} />
                        <Route exact path="/comp-footer" component={Footer} />
                        <Route exact path="/comp-formulario" component={Formulario} />
                        <Route exact path="/comp-galeria" component={Galeria} />
                        <Route exact path="/comp-header" component={Header} />
                        <Route exact path="/comp-mision-vision" component={MisionVision} />
                        <Route exact path="/comp-novedades" component={Novedades} />
                        <Route exact path="/comp-que-como" component={QueComo} />
                        <Route exact path="/comp-talleres" component={Talleres} />
                        <Route exact path="/comp-tarjeta-cursos" component={ TarjetaCursos} />
                        <Route exact path="/comp-unirse" component={Unirse} /> 
                    */}
                    {/** ERROR */}
                    <Route path="*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        </context.Provider>
    )
}