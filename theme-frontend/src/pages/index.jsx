import React from 'react';
import tw from 'twin.macro';
import apiFetch from '@wordpress/api-fetch';
import { Button } from '../components/button';
import { Icon } from '@iconify/react';
import { Headermenu, Logo, Navul, Li } from '../components/header/nav';


const Index = () => {
	return (
		<main>

			<header tw={"mx-0 box-content flex flex-row justify-center backdrop-blur-xl bg-white/90 fixed w-full h-28 border-b-2 border-b-gray-300"}>
				<Headermenu>
					<Logo></Logo>

					<Navul>
						<Li>Quem Somos</Li>
						<Li>Serviços</Li>
						<Li>Cases</Li>
						<Li>Clientes</Li>
						<Li>Trabalhe Conosco</Li>
						<Li>Contato</Li>
					</Navul>
				</Headermenu>
			</header>

			<header tw={"h-screen bg-gray-100 flex flex-col"}>
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

			<section className="intro"></section>
			<section className="servicos"></section>
			<section className="cases"></section>
			<section className="clientes"></section>
			<section className="trabalheconosco"></section>
			<section className="contato"></section>
			<footer></footer>
		</main>
	);
};

const Header = ({ children, color, label }) => {
	return (
		<header>
			{
				children
			}
		</header>
	)
}


export default Index;
