import React from 'react';
import tw from 'twin.macro';
import { _app } from '../utils/functions'
import { Intro } from '../components/intro';
import { Cases } from '../components/Cases';
import { Footer } from '../components/footer';
import { Contato } from '../components/Contato';
import { MainMenu } from '../components/header/nav';
import { Clientes } from '../components/Clientes';
import { Servicos } from '../components/servicos';
import { HeroHeader } from '../components/heroheader';
import { TrabalheConosco } from '../components/TrabalheConosco';

window.history.scrollRestoration = "manual";

const Index = () => {

	const wrapper = React.useRef(null);
	const content = React.useRef(null);
	const options = _app.options();
	return (
		<main tw="w-screen min-h-[400vh] relative" ref={wrapper}>
			<MainMenu />
			<div ref={content} id="smooth-content" tw="flex flex-col">
				<HeroHeader/>
				<Intro image={options.introImage}/>
				<Servicos list={ options.ServicesList }/>
				<Cases casesList={options.casesList}/>
				<Clientes />
				<TrabalheConosco email={options.emailVagas}/>
				<Contato 
					email={options.emailPrincipal}
					endereco={options.endereco}
					cidade={options.cidade}
					estado={options.estado}
					bairro={options.bairro}					
					telefone={options.telefone}
				/>
				<Footer
					copyright={options.copyright}
					devby={options.devby}
				/>
			</div>
		</main>
	);
};
export default Index;
