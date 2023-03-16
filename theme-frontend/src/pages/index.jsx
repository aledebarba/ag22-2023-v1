import React from 'react';
import tw from 'twin.macro';
import apiFetch from '@wordpress/api-fetch';
import { Button } from '../components/button';
import { Icon } from '@iconify/react';
import { HeaderMenu, Logo, Nav, Li } from '../components/header/nav';


const Index = () => {
	return (
		<main>

			{/* Navigation Menu */}
			<header tw={"text-secondary"}>

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

			{/* Hero Header */}

			<header tw={"min-h-screen bg-gray-100 flex flex-col text-secondary"}>
				<div tw={"block m-auto lg:w-6/12 text-body"}>
					<h1 tw={"text-h1 font-thin"}>
						<span tw={"block"}>Marcas Reais</span>
						<span tw={"text-primary block font-black"}>Para Clientes Reais</span>
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

				<div tw={"text-primary flex items-center gap-3 align-baseline mx-auto mb-4 text-caption"}>
					<Icon icon="bi:mouse" width="1.5rem" />
					<p>Role para baixo</p>
				</div>
			</header>

			{/* Intro Section */}

			<section className="intro" tw={"py-20 bg-white text-secondary flex flex-row  gap-16 w-10/12 mr-0"}>
				<figure tw={"basis-6/12 bg-gray-300 order-first rounded-tr-2xl rounded-br-2xl"}></figure>

				<div tw={"space-y-4 basis-6/12 order-2 py-10"}>
					<h1 tw={"text-4xl font-light"}>
						in brand <span tw={"text-primary font-black"}>we trust</span>
					</h1>

					<p>
						Sim, nós acreditamos. Nós acreditamos porque somos um time que ama o que faz e acima de tudo acredita que uma marca, um produto, uma empresa pode e deve ser algo mais do que seu preço em si, deve ser algo que possua valor.
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

					<div tw={"flex lg:flex-row md:flex-col gap-8"}>
						<div tw={"basis-1/4 bg-white rounded-2xl pt-8 pb-10 px-8 flex flex-col justify-center text-center drop-shadow-xl"}>
							<h4 tw={"text-h4 text-primary lowercase font-medium"}>Branding</h4>
							<h6 tw={"text-h6"}>
							Você compra um produto pelo que ele faz, você escolhe uma marca pelo que ela significa. Produtos podem ser copiados, marcas são únicas.
							</h6>
						</div>

						<div tw={"basis-1/4 bg-white rounded-2xl pt-8 pb-10 px-8 flex flex-col justify-center text-center drop-shadow-xl"}>
							<h4 tw={"text-h4 text-primary lowercase font-medium"}>Social Media</h4>
							<h6 tw={"text-h6"}>
							Falamos fluentemente a língua do algoritmo. Sabemos chegar e como chegar.
							Temos resultados quali e quantitativos.
							Quer bons leads? Fale com a gente
							</h6>
						</div>

						<div tw={"basis-1/4 bg-white rounded-2xl pt-8 pb-10 px-8 flex flex-col justify-center text-center drop-shadow-xl"}>
							<h4 tw={"text-h4 text-primary lowercase font-medium"}>Planning</h4>
							<h6 tw={"text-h6"}>
							Saber o quê, porque, quando e como são os pilares de um bom planejamento. Entender para atender. Prever e criar para ser desejado.
							</h6>
						</div>

						<div tw={"basis-1/4 bg-white rounded-2xl pt-8 pb-10 px-8 flex flex-col justify-center text-center drop-shadow-xl"}>
							<h4 tw={"text-h4 text-primary lowercase font-medium"}>Packing</h4>
							<h6 tw={"text-h6"}>
							Um produto excelente precisa de uma "roupa" a sua altura. Desenvolvemos embalagens com um simples objetivo: evidenciar seu produto na gôndola.
							</h6>
						</div>
					</div>

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
