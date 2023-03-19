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
import gsap from 'gsap';
import { ScrollSmoother } from "../utils/scroll"
import { ScrollTrigger } from 'gsap/all';
import { MainMenu } from '../components/header/nav';

const Index = () => {

	const wrapper = React.useRef(null);
	const content = React.useRef(null);

	// React.useLayoutEffect(() => {
	// 	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
	// 	const scrollerSmoother = ScrollSmoother.create({
	// 		content: content.current,
	// 		wrapper: wrapper.current,
	// 		smooth: 1,
	// 		effects: true,
	// 		smoothTouch: 0.1 

	// 	  });
	// }, [])

	return (
		<main tw="w-screen min-h-[400vh] relative" ref={wrapper}>
			<MainMenu />
			<div ref={content} id="smooth-content">
				<HeroHeader/>
				<Intro />
				<Servicos/>
				<Cases />
				<Clientes />
				<TrabalheConosco />
				<Contato />
				<Footer />
			</div>
		</main>
	);
};
export default Index;
