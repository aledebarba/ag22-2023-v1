import { useState, useEffect } from 'react';
import { ContainerFluidH } from './containers';
import { H2Dash } from './headings';
import { Buttonx } from './button';
import tw from 'twin.macro';

export const TrabalheConosco = () => { 
		
	return <section className="trabalhe__conosco" tw={"py-20 bg-gray-100 text-secondary"}>
			<ContainerFluidH>
				<H2Dash>Trabalhe Conosco</H2Dash>
				<div tw="mt-8 grid grid-cols-6 gap-4 place-items-center">
					<div tw="col-span-2">
						<h3>
							<span tw="block text-secondary font-thin">Bora</span>
							<span tw="block text-primary font-bold">trabalhar</span>
							<span tw="text-secondary font-thin">na&nbsp;</span>
							<span tw="text-primary font-bold">AG</span>
						</h3>
					</div>
					<div tw="col-span-4">
						<p>
						Acreditamos que cada um deve ser reconhecido por aquilo que é, mesmo porque no final das contas todos somos seres humanos.
						</p>
						<p tw="my-8">
						Envie seu currículo para nosso banco de talentos:	
						</p>
						<Buttonx link primary>
							<div onClick={()=>{ navigator.clipboard.writeText("email@eamil.com"); console.log("copiado")	}}>
								Enviar Curriculo
							</div>
						</Buttonx>
					</div>
				</div>
			</ContainerFluidH> 
	</section>
}