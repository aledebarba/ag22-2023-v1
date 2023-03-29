import React from 'react';
import tw from 'twin.macro';
import CountUp from 'react-countup';
import { render } from "react-dom";

export const Intro = ({ image }) => { 
	
	const sectionRef = React.useRef(null);
	const [rectHeight, setRectHeight] = React.useState(0);
	
	React.useEffect(()=>{
		const calcRect = () => sectionRef.current.getBoundingClientRect().height;
		window.addEventListener('resize', ()=>{
			setRectHeight( calcRect() );
		})
		setRectHeight( calcRect() );
		return () => window.removeEventListener('resize', ()=>{});
	}, [])

	return <>
		<section 			
			ref={sectionRef}
			tw="grid auto-rows-min w-screen py-8 px-4 gap-8
				md:(
					place-items-center items-center 
					[grid-template-columns:45vw 35vw] grid-rows-1 
					auto-rows-min w-screen px-0 py-32 mx-0 gap-8					
				)"
			>

			<h2 data-desc="for mobile only"
				tw="order-1 mt-16 text-6xl
					md:(hidden)
				">
				<div tw="font-thin md:inline">in brand</div>
				<div tw="text-primary font-black md:inline"> we trust</div>
			</h2>

			<div data-desc="main section image"
				style={{					
					boxShadow: window.innerWidth > 768 && "inset 0 0 25px 2px black",
					backgroundImage: `url(${image})`
				}}
				tw="
					order-2
					relative 
					w-full rounded-xl mt-2 
					overflow-hidden 
					bg-right
					bg-[cover] bg-no-repeat bg-fixed
					
					md:(
						-order-1 row-span-2 
						bg-cover bg-scroll bg-right-bottom 
						rounded-tr-2xl rounded-br-2xl rounded-tl-none rounded-bl-none 
						h-[clamp(400px, 80vh, 1080px)]
					)"
			/>
			<div tw="md:(grid-rows-3)">
				<h2 data-desc="for desktop only"
					tw="hidden
						md:(block order-1)
					">
					<span tw="font-thin">in brand</span>
					<span tw="text-primary font-bold"> we trust</span>
				</h2>
				<div data-desc="text body"
					tw="order-3
						md:(bg-white text-secondary-900 h-fit)"
					css={`
						p { 
							font-size: clamp(16px, 0.9vw, 1.5rem);
							margin: 0.5rem 0; 
							padding-right: 1.5rem;
						}
					`}
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
						<h5 tw="my-8">
						<div tw="md:inline text-primary font-bold">Sim nós acreditamos!&nbsp;</div>
						<div tw="md:inline">E você?</div>
						</h5>
				</div>
				<div data-desc="animated numbers"
					tw="order-last auto-rows-min gap-[0.8vw] px-4 h-fit
						md:(grid grid-cols-2 px-0)
					">
					<div anos no mercado>
						<h4 tw={"font-bold text-primary leading-tight"}>+<CountUp end="10" enableScrollSpy={true}  duration={3} />&nbsp;anos</h4>
						<h5 tw={"text-secondary font-normal leading-tight mt-[4px]"}>no mercado</h5>
					</div>
					<div projetos de embalagem>
						<h4 tw={"font-bold text-primary leading-tight "}>+<CountUp end="50" enableScrollSpy={true}  duration={3} />&nbsp;projetos</h4>
						<h5 tw={"text-secondary font-normal leading-tight mt-[4px]"}>de embalagens, presente na América do Sul</h5>
					</div>
					<div marcas criadas>
						<h4 tw={"font-bold text-primary leading-tight"}>+<CountUp end="150" enableScrollSpy={true}  duration={3} />&nbsp;marcas</h4>
						<h5 tw={"text-secondary font-normal leading-tight mt-[4px]"}>criadas e ativas pelo mundo</h5>
					</div>
					<div horas de story telling>
						<h4 tw={"font-bold text-primary leading-tight"}>+<CountUp end="1000" enableScrollSpy={true}  duration={3} />&nbsp;horas</h4>
						<h5 tw={"text-secondary font-normal leading-tight mt-[4px]"}>de storytelling criadas</h5>
					</div>
				</div>
			</div>
		</section>
	</>
}