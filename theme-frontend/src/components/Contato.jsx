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
				} )
		}, [])

	return <section className="contatos" tw={"py-20 bg-gray-100 text-secondary"}>
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
						<Buttonx outline tertiary right><Icon icon="bi:whatsapp" width="1.5rem" />Conheça mais sobre nosso serviços</Buttonx>
					</div>
				</div>
					{ contatos && contatos.map( (servico) => {
						return <></>
					})}						
			</ContainerFluidH> 
	</section>
}