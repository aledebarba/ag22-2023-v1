import tw from "twin.macro"
import React from "react";
import { app, Intro, Cases, Footer, Contato, MainMenu, Clientes, Servicos, HeroHeader, TrabalheConosco } from "./assets/index-page-components"

const Index = () => {

	const wrapper = React.useRef(null);
	const content = React.useRef(null);

	return (
		<main tw="w-screen min-h-[400vh] relative" ref={wrapper}>
			<MainMenu />
			<div ref={content} id="smooth-content" tw="flex flex-col">
				<HeroHeader/>
				<Intro image={ app.options?.introImage} />
				<Servicos list={ app.options?.ServicesList }/>
				<Cases casesList={ app.options?.casesList}/>
				<Clientes brandsList={ app.options?.BrandsList} />
				<TrabalheConosco email={ app.options?.emailVagas}/>
				<Contato 
					email={ app.options?.emailPrincipal }
					endereco={ app.options?.endereco}
					cidade={ app.options?.cidade}
					estado={ app.options?.estado}
					bairro={ app.options?.bairro}					
					telefone={ app.options?.telefone}
				/>
				<Footer
					copyright={ app.options?.copyright}
					devby={ app.options?.devby}
				/>
			</div>
		</main>
	);
};
export default Index;
