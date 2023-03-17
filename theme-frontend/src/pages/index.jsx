import React from 'react';
import tw from 'twin.macro';
import apiFetch from '@wordpress/api-fetch';
import { Button, ButtonPrimary, ButtonSecondary } from '../components/button';
import { Icon } from '@iconify/react';
import { HeroHeader } from '../components/heroheader';
import { Intro } from '../components/intro';
import { Card, CardTitle, CardText, CardBox, Cases, CardCase } from '../components/cards';


const Index = () => {
	return (
		<main tw="w-screen min-h-[400vh] relative" >
			<HeroHeader/>
			<Intro />
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

					<ButtonSecondary>Conheça mais sobre nosso serviços</ButtonSecondary>
				</div>
			</section>

			{/* Cases Section */}

			<section className="cases" tw={"py-24 bg-white text-secondary"}>
				<div tw={"w-11/12 md:w-10/12 mx-auto gap-16 flex flex-col items-center"}>
					<h1 tw={"text-h1 font-bold text-center"}>Cases</h1>

					<Cases>
						<CardCase>
							
							<img src={`https://ik.imagekit.io/balaban/ppg-mockup.jpg?updatedAt=1679009456958`} tw={"object-cover min-h-full group-hover:scale-150 group-hover:transition-all duration-1000 group-hover:brightness-150"}/>
							<figcaption tw={"bg-zinc-700/80 p-6 absolute inset-x-0 bottom-0 flex flex-col items-start gap-4"}>
								<caption tw={"text-caption text-primary-200 font-medium leading-5"}>
									Packing & Video
								</caption>

								<h6 tw={"text-h6 text-white font-bold"}>
									Embalagens linhas PPG Refinish
								</h6>

								<ButtonPrimary>Saiba Mais</ButtonPrimary>
							</figcaption>
						</CardCase>

						<CardCase>
							<img src={`https://images.unsplash.com/photo-1671725778785-03aa4fc16ab7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`} tw={"object-cover min-h-full group-hover:scale-110 group-hover:transition-all duration-1000 group-hover:brightness-150"}/>
						</CardCase>

						<CardCase>
							<img src={`https://images.unsplash.com/photo-1671725778785-03aa4fc16ab7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`} tw={"object-cover min-h-full group-hover:scale-110 group-hover:transition-all duration-1000 group-hover:brightness-150"}/>
						</CardCase>

						<CardCase>
							<img src={`https://images.unsplash.com/photo-1671725778785-03aa4fc16ab7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`} tw={"object-cover min-h-full group-hover:scale-110 group-hover:transition-all duration-1000 group-hover:brightness-150"}/>
						</CardCase>

						<CardCase>
							<img src={`https://images.unsplash.com/photo-1671725778785-03aa4fc16ab7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`} tw={"object-cover min-h-full group-hover:scale-110 group-hover:transition-all duration-1000 group-hover:brightness-150"}/>
						</CardCase>
					</Cases>

					<Button className={`large`}>Lalala</Button>
				</div>
			</section>

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
