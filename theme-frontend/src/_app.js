import React from 'react';
import { render } from 'react-dom';
import { _app, getWPChunkElementAttr } from './utils/functions';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { default as FrontPage } 	from './pages/index';
import { default as ArchivePage } 	from './pages/archive';
import { default as ProjetoPage } 	from './pages/projeto';
import { default as ProjetosPage } 	from './pages/projetos';
import { default as ServicosPage } 	from './pages/servicos';
import { default as Content } 	from './pages/content';
import { default as Page } 			from './pages/page';
import { default as NotFoundPage } 	from './pages/404';
import { Loading } from './components/loading';

const Main = () => {
	const pages = _app.pages();
	let pagesModules = [];
	
	if( _app.siteStatus() === 'offline') {
		let offlineStyle = {
			width: "100vw",
			height: "100vh",
			overflow: "hidden",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: "#000",
			color: "#f98e8e",
			fontSize: "2rem",
			textAlign: "center"	,
			fontFamily: "Courier New, Courier, monospace"		
		}
		return (
			<main style={offlineStyle}>
				Nosso site está em manutenção
			</main>
		)
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
		<React.StrictMode>
			<BrowserRouter>			
				<Routes>
					<Route path="/archive" element={ <ArchivePage /> } />
					<Route path="/archive/:slug" element={ <ArchivePage /> } />
					<Route path="/projetos/:slug" element={ <ProjetoPage /> } />
					<Route path="/servicos" element={ <ServicosPage /> } />
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
		</React.StrictMode>
	);
};

window.history.scrollRestoration = "manual";
const root = document.querySelector( getWPChunkElementAttr() );

root && render( <Main />, root );
