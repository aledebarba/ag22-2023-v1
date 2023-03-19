import { useState, useEffect } from 'react';
import { ContainerFluidH } from './containers';
import { H2Dash, H2superiordash } from './headings';
import { Buttonx } from './button';
import apiFetch from '@wordpress/api-fetch';
import { Icon } from '@iconify/react';
import tw from 'twin.macro';

export const Contato = () => { 
		
		const [ contatos, setContatos ] = useState( [] );
		useEffect(()=>{
			apiFetch({ path: 'database/v1/contatos' })
				.then( (data) => {
					setContatos( data )
					console.log( data )
				} )
		}, [])

	return <section className="contatos" tw={"py-20 bg-secondary-50 text-secondary"}>
			<ContainerFluidH>
				<H2Dash>Contatos</H2Dash>
				<div tw="mt-12 grid grid-cols-6 gap-4 place-items-center">
					<div tw="col-span-3">
						<H2superiordash><span tw="block text-primary font-bold">Sumaré - SP</span></H2superiordash>
						<div tw="flex flex-row items-end gap-2">
							<h5 tw={"text-h5 text-primary-500 font-medium leading-10"}>+55</h5>
							<h2 tw={"text-h2 text-secondary font-extralight"}>19 90309-3333</h2>
						</div>
							<h6 tw={"text-h6 w-2/3 font-medium text-secondary-600"} css={`font-stretch: 120%;`}>R. Santos Dumont, 94 - 1
							<br></br>Vila Santana</h6>
					</div>
					<div tw="col-span-3">
					{ contatos && contatos.map( (contato) => {
						return <div>
								<a href={contato.data.link} target="_blank" rel="noreferrer">
									<Buttonx outline tertiary style={{ width: "100%", marginBottom: "2rem", justifyContent: "flex-start" }} >
											<Icon icon={contato.data.icone} tw="mr-2 text-4xl" />
											{contato.data.rotulo}
									</Buttonx>
								</a>
						</div>
					})}		
					</div>
				</div>
								
			</ContainerFluidH> 
	</section>
}