import tw from 'twin.macro';
import React from 'react';
import CountUp from 'react-countup';
import { useRect } from './utils';
import { Container } from './containers';

export const Intro = ({ image }) => { 
	
	const introTextRef = React.useRef();
	const introTextRect = useRect(introTextRef);	
	const maxTime  = 5;
	const maxCount = 1000;
	const speed = ( countTo ) => (countTo * maxTime) / maxCount;

	return <>
		<Container id="section-intro" fluid style={ { height: introTextRect?.height+256, padding: "128px 0" } }>
			
			<Container id="section-intro--image" absolute fluid tw="hidden lg:(block)">
				<img src={image.replace("http://", "https://")} alt="intro image" 
					style={{ position: "absolute", left: 0, width: introTextRect?.left - 80, height: introTextRect?.height }}
					tw="[object-position:90%_bottom] object-cover  rounded-tr-3xl rounded-br-3xl md:(object-right-bottom )"
				/>
			</Container>

			<Container absolute tw="left-1/2 -translate-x-1/2">
				<div ref={introTextRef} tw="mx-8 lg:(ml-[40%] mr-0)">
					<h2 tw="text-6xl">
						<div tw="font-thin lg:inline">in brand</div>
						<div tw="text-primary font-black lg:inline"> we trust</div>
					</h2>
					<div data-desc="text body"
						tw="text-secondary-900 h-fit [font-size:clamp(16px, 0.9vw, 1.5rem)]"
						>
						<p>Sim, nós acreditamos. Nós acreditamos porque somos um time que ama o que faz e acima de tudo acredita que uma marca, um produto, uma empresa pode e deve ser algo mais do que seu preço em si, deve ser algo que possua valor.</p>
						<p>
						Comunicar vai além de dizer palavras, frases, comunicados.
						Como você é recebido? Como sua mensagem chega?
						Como é sua presença no mercado? Na vida do seu target?
						</p>
						<h4 tw="leading-tight my-8">
							Comunicar é saber como chegar.
						</h4>
						<p>
							Um brainstorm bem feito, uma ação bem planejada, uma marca que ganha vida e voz. É no que somos <strong>especialistas</strong>.
						</p>
						<h3 tw="my-8">
							<div tw="text-primary font-bold">Sim nós acreditamos!&nbsp;</div>
							<div >E você?</div>
						</h3>
					</div>
					<div id="animated-numbers"
						tw="grid auto-rows-min gap-10 py-10
							md:(grid grid-cols-2)"
						>
						<div id="anos-no-mercado">
							<h3 tw={"font-bold text-primary leading-tight"}>+<CountUp end="10" enableScrollSpy={true} scrollSpyOnce duration={ 1.5 } separator="." useEasing={false}/>&nbsp;anos</h3>
							<h4 tw={"text-secondary font-normal leading-tight mt-[4px]"}>no mercado</h4>
						</div>
						<div id="projetos-de-embalagem">
							<h3 tw={"font-bold text-primary leading-tight "}>+<CountUp end="50" enableScrollSpy={true} scrollSpyOnce duration={ 1.5 } separator="." useEasing={false}/>&nbsp;projetos</h3>
							<h4 tw={"text-secondary font-normal leading-tight mt-[4px]"}>de embalagens, presente na América do Sul</h4>
						</div>
						<div id="marcas-criadas">
							<h3 tw={"font-bold text-primary leading-tight"}>+<CountUp end="150" enableScrollSpy={true} scrollSpyOnce duration={ 2.5 } separator="." useEasing={false}/>&nbsp;marcas</h3>
							<h4 tw={"text-secondary font-normal leading-tight mt-[4px]"}>criadas e ativas pelo mundo</h4>
						</div>
						<div id="story-telling">
							<h3 tw={"font-bold text-primary leading-tight"}>+<CountUp end="1000" enableScrollSpy={true} scrollSpyOnce duration={ 2.5 } separator="." useEasing={false}/>&nbsp;horas</h3>
							<h4 tw={"text-secondary font-normal leading-tight mt-[4px]"}>de storytelling criadas</h4>
						</div>
				</div>
				</div>

			</Container>
		</Container>				
	</>
}