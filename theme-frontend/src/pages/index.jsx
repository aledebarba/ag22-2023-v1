import React from 'react';
import tw from 'twin.macro';
import { HeroHeader } from '../components/heroheader';
import { Intro } from '../components/intro';
import { Servicos } from '../components/servicos';
import { Cases } from '../components/Cases';
import { Clientes } from '../components/Clientes';
import { TrabalheConosco } from '../components/TrabalheConosco';
import { Contato } from '../components/Contato';
import { Footer } from '../components/footer';
import { MainMenu } from '../components/header/nav';
import { _app } from '../utils/functions';

window.history.scrollRestoration = "manual";

const Index = () => {

	const wrapper = React.useRef(null);
	const content = React.useRef(null);
	const options = _app.options();

	return (
		<main tw="w-screen min-h-[400vh] relative" ref={wrapper}>
			<MainMenu />
			<div ref={content} id="smooth-content">
				<HeroHeader/>
				<Intro image={options.introImage}/>
				<Servicos/>
				<Cases />
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
