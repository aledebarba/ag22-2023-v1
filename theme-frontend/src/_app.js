import React from 'react';
import { render } from 'react-dom';
import { _app, getWPChunkElementAttr } from './utils/functions';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { default as FrontPage } 	from './pages/index';
import { default as ArchivePage } 	from './pages/archive';
import { default as ProjetoPage } 	from './pages/projeto';
import { default as ServicosPage } 	from './pages/servicos';
import { default as SobreNos } 	from './pages/sobrenos';
import { default as NotFoundPage } 	from './pages/404';
import { Loading } from './components/loading';
import { Offline } from './components/offline'
// import { default as ProjetosPage } 	from './pages/projetos';
// import { default as Content } 	from './pages/content';
// import { default as Page } 			from './pages/page';

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
		<React.StrictMode>
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
		</React.StrictMode>
	);
};

//window.history.scrollRestoration = "manual";
const root = document.querySelector( getWPChunkElementAttr() );

root && render( <Main />, root );
