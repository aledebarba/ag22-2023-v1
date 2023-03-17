import React from 'react';
import tw from 'twin.macro';
import apiFetch from '@wordpress/api-fetch';
import { Button } from '../components/button';
import { Icon } from '@iconify/react';
import { HeaderMenu, Logo, Nav, Li } from '../components/header/nav';
import { Card, CardTitle, CardText, CardBox } from '../components/cards';


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
					<p>
						Comunicar vai além de dizer palavras, frases, comunicados.
						Como você é recebido? Como sua mensagem chega?
						Como é sua presença no mercado? Na vida do seu target?
					</p>

					<h2 tw={"text-2xl"}>
						Comunicar é saber como chegar.
					</h2>

					<p>
						Um brainstorm bem feito, uma ação bem planejada, uma marca que ganha vida e voz. É no que somos especialistas.
					</p>

					<p><span tw={"text-primary font-bold"}>Sim nós acreditamos!</span> E você?</p>

					<div tw={"grid grid-cols-2 grid-flow-row gap-x-6 gap-y-8 pt-4"}>
						<div className='card gap-0'>
							<h4 tw={"text-h4 font-bold text-primary leading-10"}>+10 anos</h4>
							<h6 tw={"text-h6 text-secondary font-normal"}>no mercado</h6>
						</div>
						<div className='card gap-0'>
							<h4 tw={"text-h4 font-bold text-primary leading-10"}>+50 projetos</h4>
							<h6 tw={"text-h6 text-secondary font-normal"}>de embalagens, presente na América do Sul</h6>
						</div>
						<div className='card gap-0'>
							<h4 tw={"text-h4 font-bold text-primary leading-10"}>+150 marcas</h4>
							<h6 tw={"text-h6 text-secondary font-normal"}>criadas e ativas pelo mundo</h6>
						</div>
						<div className='card gap-0'>
							<h4 tw={"text-h4 font-bold text-primary leading-10"}>+1000 horas</h4>
							<h6 tw={"text-h6 text-secondary font-normal"}>de storytelling criadas</h6>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}

			<section className="servicos" tw={"py-20 bg-gray-100 text-secondary"}>
				<div tw={"lg:w-10/12 md:w-11/12 mx-auto gap-16 flex flex-col items-center"}>
					<h1 tw={"text-h1 font-bold text-center"}>Serviços</h1>

					<CardBox>
						<Card>
							<CardTitle>Branding</CardTitle>
							<CardText>
							Você compra um produto pelo que ele faz, você escolhe uma marca pelo que ela significa. Produtos podem ser copiados, marcas são únicas.
							</CardText>
						</Card>

						<Card>
							<CardTitle>Social Media</CardTitle>
							<CardText>
							Falamos fluentemente a língua do algoritmo. Sabemos chegar e como chegar.
							Temos resultados quali e quantitativos.
							Quer bons leads? Fale com a gente
							</CardText>
						</Card>

						<Card>
							<CardTitle>Planning</CardTitle>
							<CardText>
							Saber o quê, porque, quando e como são os pilares de um bom planejamento. Entender para atender. Prever e criar para ser desejado.
							</CardText>
						</Card>

						<Card>
							<CardTitle>Packing</CardTitle>
							<CardText>
							Um produto excelente precisa de uma "roupa" a sua altura. Desenvolvemos embalagens com um simples objetivo: evidenciar seu produto na gôndola.
							</CardText>
						</Card>
					</CardBox>

					<Button>Conheça mais sobre nosso serviços</Button>
				</div>
			</section>

			{/* Cases Section */}

			<section className="cases"></section>

			{/* Clientes Section */}

			<section className="clientes"></section>

			{/* Trabalhe Conosco Section */}

			<section className="trabalheconosco"></section>

			{/* Contato Section */}

			<section className="contato"></section>
			<footer></footer>
		</main>
	);
};


export default Index;
