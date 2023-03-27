import React from 'react';
import tw from 'twin.macro';
import CountUp from 'react-countup';

export const Intro = ({ image }) => { 
	
	const sectionRef = React.useRef(null);
	const [rectHeight, setRectHeight] = React.useState(0);
	
	React.useEffect(()=>{
		const rect = sectionRef.current.getBoundingClientRect().height;
		setRectHeight( rect-160 );
	}, [])

	return <div tw="flex m-0 p-0 w-screen gap-16 items-center">
	
	<div 
		tw="flex grow bg-secondary-100 w-[40vw] h-[100%] block rounded-r-2xl overflow-hidden relative"
		css={[`
			height: ${rectHeight}px;
			background-image: url(${image});
			background-position: right center;
			background-size: cover;
			background-repeat: no-repeat;
		`]}
		>
	</div>

		<section 
			className="intro" tw={"w-[60vw] py-20 bg-white grid grid-cols-8 gap-4"}
			ref={sectionRef}
			>
			
			<div tw="col-start-1 col-span-7 justify-center">
				<h2>
					<span tw="font-thin">in brand</span><span tw={"text-primary font-black"}> we trust</span>
				</h2>

				<p>
				Sim, nós acreditamos. Nós acreditamos porque somos um time que ama o que faz e acima de tudo acredita que uma marca, um produto, uma empresa pode e deve ser algo mais do que seu preço em si, deve ser algo que possua valor.

				Comunicar vai além de dizer palavras, frases, comunicados.
				Como você é recebido? Como sua mensagem chega?
				Como é sua presença no mercado? Na vida do seu target?
				</p>

				<p tw="mt-4">
				Comunicar é saber como chegar.

				Um brainstorm bem feito, uma ação bem planejada, uma marca que ganha vida e voz. É no que somos especialistas.

				Sim nós acreditamos! E você?
				</p>
				<p>
					Comunicar vai além de dizer palavras, frases, comunicados.
					Como você é recebido? Como sua mensagem chega?
					Como é sua presença no mercado? Na vida do seu target?
				</p>

				<h4>
					Comunicar é saber como chegar.
				</h4>

				<p>
					Um brainstorm bem feito, uma ação bem planejada, uma marca que ganha vida e voz. É no que somos especialistas.
				</p>

				<h5 tw="my-8">
					<span tw={"text-primary font-bold"}>Sim nós acreditamos!&nbsp;</span>
					<span>E você?</span> 
				</h5>                   

			</div>

			<div className='col-start-1 col-span-3'>
					<h4 tw={"text-h4 font-bold text-primary leading-10"}>+<CountUp end="10" enableScrollSpy={true}  duration={3} />&nbsp;anos</h4>
					<h6 tw={"text-h6 text-secondary font-normal"}>no mercado</h6>
				</div>

				<div className='col-start-4 col-span-4'>
					<h4 tw={"text-h4 font-bold text-primary leading-10"}>+<CountUp end="50" enableScrollSpy={true}  duration={3} />&nbsp;projetos</h4>
					<h6 tw={"text-h6 text-secondary font-normal"}>de embalagens, presente na América do Sul</h6>
				</div>

				<div className='col-start-1 col-span-3'>
					<h4 tw={"text-h4 font-bold text-primary leading-10"}>+<CountUp end="150" enableScrollSpy={true}  duration={3} />&nbsp;marcas</h4>
					<h6 tw={"text-h6 text-secondary font-normal"}>criadas e ativas pelo mundo</h6>
				</div>
				
				<div className='col-start-4 col-span-3'>
					<h4 tw={"text-h4 font-bold text-primary leading-10"}>+<CountUp end="1000" enableScrollSpy={true}  duration={3} />&nbsp;horas</h4>
					<h6 tw={"text-h6 text-secondary font-normal"}>de storytelling criadas</h6>
				</div>
				
		</section>
		</div>
}