import tw from 'twin.macro';
import { Button } from '../components/button';
import { Icon } from '@iconify/react';


const Index = () => {
	return (
		<main>

			<nav>
				<figure></figure>
				<ul>
					<li>Quem Somos</li>
					<li>Serviços</li>
					<li>Cases</li>
					<li>Clientes</li>
					<li>Trabalhe Conosco</li>
					<li>Contato</li>
				</ul>
			</nav>

			<header>
				<h1>
					<span css={`display: block;`}>Marcas Reais</span>
					<span css={`display: block; color: red;`}>Para Clientes Reais</span>
					<span css={`display: block;`}>Com Resultados Reais</span>
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

				<div tw={"text-[#E62337] flex items-center gap-3"}>
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
			<p css={`color: ${color};`}>{label}</p>
			{
				children
			}
		</header>
	)
}


const Title = tw.h1`
	text-8xl
	text-center
	text-black
`

export default Index;
