import { ContainerFluidH, Container } from './containers';
import { H2Dash } from './headings';
import React from 'react';
import { Buttonx } from './button';
import { Icon } from '@iconify/react';
import tw from 'twin.macro';

export const TrabalheConosco = () => { 

	const [feedbackText, setFeedbackText] = React.useState("");
	const feedback = React.useRef();
		
	return <section tw={"py-28 bg-white text-secondary "}>
			<ContainerFluidH>
				<div tw="h-fit">
				<H2Dash>Trabalhe Conosco</H2Dash>
				<div tw="mt-8 grid grid-cols-8 gap-4 justify-between outline-red-500">
					<div tw="col-span-3">
						<h2>
							<span tw="block text-secondary font-thin">Bora</span>
							<span tw="block text-primary font-bold">trabalhar</span>
							<span tw="text-secondary font-thin">na&nbsp;</span>
							<span tw="text-primary font-bold">AG?</span>
						</h2>
					</div>
					<div tw="col-span-5">
						<p>
						Acreditamos que cada um deve ser reconhecido por aquilo que é, mesmo porque no final das contas todos somos seres humanos.
						</p>
						<p tw="my-8">
						Envie seu currículo para nosso banco de talentos:	
						</p>

						<div 
							onClick={()=>{ navigator.clipboard.writeText("vagas@ag22.com.br"); setFeedbackText("copiado")}} 
							onMouseEnter={ () => { setFeedbackText("Clique para copiar o endereço") }}
							onMouseLeave={ () => { setFeedbackText("") }}
							tw="text-4xl text-primary font-bold gap-4 pb-2 border-b-2 border-transparent flex flex-nowrap w-fit items-center duration-300 cursor-pointer hover:(scale-110 duration-300 border-primary)"

							>
							<span >vagas@ag22.com.br</span>	
							<Icon icon="lucide:clipboard-copy" tw="text-primary" width="48" />
						</div>

						<div ref={feedback} tw="h-8 p-0 mt-2 ml-[-1rem] text-secondary">
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
				</div>
				</div>
			</ContainerFluidH> 
	</section>
}