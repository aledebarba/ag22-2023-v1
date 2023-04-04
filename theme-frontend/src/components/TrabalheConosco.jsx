import { Container } from './containers';
import { H2Dash } from './headings';
import React from 'react';
import { Icon } from '@iconify/react';
import tw from 'twin.macro';

export const TrabalheConosco = ({email}) => { 

	const [feedbackText, setFeedbackText] = React.useState("");
	const feedback = React.useRef();
		
	return <Container fluid id="vagas" tw="bg-white py-20">
				<H2Dash>Trabalhe Conosco</H2Dash>
				<Container tw="
						z-20						
						outline-red-500
						grid auto-rows-min [align-items:end]
						md:(grid grid-rows-1 grid-cols-8 mt-16 gap-4 px-8 [align-items:start])"
						>
					<div tw="md:(hidden)">
						<h1 tw="h-fit ml-8">
							<span tw="block text-secondary font-thin">Bora</span>
							<span tw="block text-primary font-bold">trabalhar</span>
							<span tw="text-secondary font-thin">na&nbsp;</span>
							<span tw="text-primary font-bold">AG?</span>
						</h1>
					</div>
					<div tw="hidden md:(block col-span-3)">
						<h2 tw="my-0">
							<span tw="block text-secondary font-thin">Bora</span>
							<span tw="block text-primary font-bold">trabalhar</span>
							<span tw="text-secondary font-thin">na&nbsp;</span>
							<span tw="text-primary font-bold">AG?</span>
						</h2>
					</div>
					<div tw="md:(col-span-5)">
						<p tw="p-8 mx-auto md:(mx-0 pr-8 pt-0 pb-0)">
						Acreditamos que cada um deve ser reconhecido por aquilo que é, mesmo porque no final das contas todos somos seres humanos.
						</p>
						<p tw="p-8 mx-auto md:(mx-0 pr-8)">
						Envie seu currículo para nosso banco de talentos:	
						</p>

						<div 
							onClick={()=>{ navigator.clipboard.writeText(email); setFeedbackText("copiado")}} 
							onMouseEnter={ () => { setFeedbackText("Clique para copiar o endereço") }}
							onMouseLeave={ () => { setFeedbackText("") }}
							tw="
								flex flex-nowrap items-center w-fit 
								gap-2 pb-2 
								text-2xl text-primary font-bold	
								ml-8						
								border-b-2 
								border-primary 
								duration-300 cursor-pointer 
								[transform-origin: left center]
								md:(gap-4 text-4xl text-primary font-bold border-transparent)
								hover:(scale-110 duration-300 border-primary)
							">
							<span >{email}</span>	
							<Icon icon="lucide:clipboard-copy" tw="text-primary" width="48" />
						</div>

						<div ref={feedback} tw="h-8 p-0 mt-2 ml-[2rem] text-secondary">
							{ feedbackText && feedbackText == "copiado" 
								? <p
									tw="text-white bg-secondary-300 mt-2 p-2 rounded-lg w-fit relative" 
									css={`
										opacity: 0;
										animation: showThenFade 3s ease-in-out forwards;

										@keyframes showThenFade {
											0% {
												opacity: 1;
											}
											50% {
												opacity: 1;
											}
											100% {
												opacity: 0;
											}
										}
									`}
									>
									{feedbackText}
								</p> 
							: <p>
								{feedbackText}
							</p>
						} 
						</div>
					</div>
				</Container>
			</Container> 
}