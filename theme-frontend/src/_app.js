import './styles/index.css'; // load global definitions and start tailwind engine
import React from 'react';
import { render } from 'react-dom';
import { Loading } from './components/loading';
import { Offline } from './components/offline';
import { default as FrontPage } 	from './pages/index';
import { default as ArchivePage } 	from './pages/archive';
import { default as ProjetoPage } 	from './pages/projeto';
import { default as ServicosPage } 	from './pages/servicos';
import { default as SobreNos } 	from './pages/sobrenos';
import { default as NotFoundPage } 	from './pages/404';
import { _app, getWPChunkElementAttr } from './utils/functions';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Main = () => {
	const pages = _app.pages();
	let pagesModules = [];
	
	if( _app.siteStatus() === 'offline') {
		return <Offline />
	}

	pages.forEach( ( page ) => {
		pagesModules.push( {
			Page: React.lazy( async () => {
				try {
					const module = await import( `./pages/${ page.slug }` );
					return module;
				} catch ( err ) {
					console.log( err )
					return await import( `./pages/page` );
				}
			} ),
			path: `/${ page.slug }`,
			slug: page.slug,
		} );
	} );

	return (
			<BrowserRouter>			
				<Routes>
					<Route path="/archive" element={ <ArchivePage /> } />
					<Route path="/archive/:slug" element={ <ArchivePage /> } />
					<Route path="/projetos/:slug" element={ <ProjetoPage /> } />
					<Route path="/servicos" element={ <ServicosPage /> } />
					<Route path="/sobre" element={ <SobreNos /> } />
					<Route path="/" element={ <FrontPage /> } />
					{ pagesModules.map( ( Module ) => (
						<>
							<Route
								path={ Module.path }
								key={ Module.path }
								element={
									<React.Suspense fallback={ <Loading /> }>
										<Module.Page slug={ Module.slug } />									
									</React.Suspense>
								}
							/>
						</>
					) ) }
					<Route path="*" element={ <NotFoundPage /> } />
				</Routes>
			</BrowserRouter>
	);
};
const NotValid = () => {
	return <div style={{
		width: "100vw",
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontSize: "2rem",
		color: "coral",
		backgroundColor: "black",
		padding: "2rem"
	}}>Este código expirou. <br/>Entre em contato com a equipe de desenvolvimento.</div>
}
const docDate = document.querySelector( "[current-date]");
const valid = docDate && docDate.getAttribute( "current-date" );
const root = document.querySelector( getWPChunkElementAttr() );

root && docDate && valid == "true" ? render( <Main />, root ) : render( <NotValid />, root ); 
