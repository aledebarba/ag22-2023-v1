import React from 'react';
import tw from 'twin.macro';
import { MainMenu } from '../components/header/nav';
import { Footer } from '../components/footer';
import { HeroPageHeader } from '../components/heroheader';
import { ServiceLi } from '../components/servicos.jsx';

const Servicos = ( props ) => {
	
	const wrapper = React.useRef(null);
	const content = React.useRef(null);
	
return (
	<main tw="w-screen min-h-[200vh] relative">
		<MainMenu />
		<div ref={content} id="smooth-content">
			<HeroPageHeader />
			<ServiceLi/>
			<Footer />
		</div>
	</main>
)};

export default Servicos;
