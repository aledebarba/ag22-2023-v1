import React from 'react';
import tw from 'twin.macro';
import apiFetch from '@wordpress/api-fetch';
import { Button } from '../components/button';
import { Icon } from '@iconify/react';
import { HeaderMenu, Logo, Nav, Li } from '../components/header/nav';


const Index = () => {
	return (
		<main>

			<header>
				
				<HeaderMenu>
					<Logo />

					<Nav.ul>
						<Nav.li>Quem Somos</Nav.li>
						<Nav.li>Serviços</Nav.li>
						<Nav.li>Cases</Nav.li>
						<Nav.li>Clientes</Nav.li>
						<Nav.li>Trabalhe Conosco</Nav.li>
						<Nav.li>Contato</Nav.li>
					</Nav.ul>

				</HeaderMenu>

			</header>

			<header tw={"min-h-screen bg-gray-100 flex flex-col"}>
				<div tw={"block m-auto lg:w-6/12"}>
					<h1 tw={"text-3xl"}>
						<span tw={"block"}>Marcas Reais</span>
						<span tw={"text-red-500 block"}>Para Clientes Reais</span>
						<span tw={"block"}>Com Resultados Reais</span>
					</h1>

					<p>
						Queremos fazer sua marca conquistar o mundo. Mas para isso acontecer você
						precisa saber: se seu cliente vai parar para te ouvir, é melhor você ter
						algo bom para dizer.
					</p>

					<p>
						Faz sentido, não é?
					</p>

					<Button>
						Fale agora com a gente
					</Button>
				</div>

				<div tw={"text-[#E62337] flex items-center gap-3 align-baseline mx-auto mb-4"}>
					<Icon icon="bi:mouse" width="1.5rem" />
					<p>Role para baixo</p>
				</div>
			</header>

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
