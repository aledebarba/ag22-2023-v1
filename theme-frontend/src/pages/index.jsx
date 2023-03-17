import React from 'react';
import tw from 'twin.macro';
import apiFetch from '@wordpress/api-fetch';
import { HeroHeader } from '../components/heroheader';


const Index = () => {
	return (
		<main tw="w-screen min-h-[400vh] relative" >
			<HeroHeader/>
			<section className="intro" tw={"py-20 bg-white"}>
				<div tw={"lg:w-8/12 md:w-10/12 mx-auto"}>
					<h1 tw={"text-3xl font-light"}>
						in brand <span tw={"text-red-500 font-black"}>we trust</span>
					</h1>

					<p>
					Sim, nós acreditamos. Nós acreditamos porque somos um time que ama o que faz e acima de tudo acredita que uma marca, um produto, uma empresa pode e deve ser algo mais do que seu preço em si, deve ser algo que possua valor.

					Comunicar vai além de dizer palavras, frases, comunicados.
					Como você é recebido? Como sua mensagem chega?
					Como é sua presença no mercado? Na vida do seu target?

					Comunicar é saber como chegar.

					Um brainstorm bem feito, uma ação bem planejada, uma marca que ganha vida e voz. É no que somos especialistas.

					Sim nós acreditamos! E você?
					</p>
				</div>
			</section>

			<section className="servicos"></section>

			<section className="cases"></section>

			<section className="clientes"></section>

			<section className="trabalheconosco"></section>

			<section className="contato"></section>
			<footer></footer>
		</main>
	);
};


export default Index;
