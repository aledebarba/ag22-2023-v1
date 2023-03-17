import React from 'react';
import tw from 'twin.macro';
import apiFetch from '@wordpress/api-fetch';
import { HeaderMenu, Logo, Nav, Li } from '../components/header/nav';
import { HeroHeader } from '../components/heroheader';
import { Intro } from '../components/intro';
import { Servicos } from '../components/servicos';
import { Cases } from '../components/Cases';
import { Clientes } from '../components/Clientes';
import { TrabalheConosco } from '../components/TrabalheConosco';
import { Contato } from '../components/Contato';
import { Footer } from '../components/footer';


const Index = () => {
	return (
		<main tw="w-screen min-h-[400vh] relative" >
			<HeroHeader/>
			<Intro />
			<Servicos/>
			<Cases />
			<Clientes />
			<TrabalheConosco />
			<Contato />
			<Footer />
		</main>
	);
};
export default Index;


