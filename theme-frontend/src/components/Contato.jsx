import { useState, useEffect } from 'react';
import { ContainerFluidH } from './containers';
import { H2Dash } from './headings';
import apiFetch from '@wordpress/api-fetch';
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
					{ contatos && contatos.map( (servico) => {
						return <></>
					})}						
			</ContainerFluidH> 
	</section>
}