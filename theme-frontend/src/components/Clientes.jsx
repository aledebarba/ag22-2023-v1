import { useState, useEffect } from 'react';
import { ContainerFluidH } from './containers';
import { H2Dash } from './headings';
import apiFetch from '@wordpress/api-fetch';
import tw from 'twin.macro';

export const Clientes = () => { 
		
		const [ clientes, setClientes ] = useState( [] );
		useEffect(()=>{
			apiFetch({ path: 'database/v1/clientes' })
				.then( (data) => {
					setClientes( data )
				} )
		}, [])

	return <section className="clientes" tw={"py-20 bg-gray-100 text-secondary"}>
			<ContainerFluidH>
				<H2Dash>Clientes</H2Dash>
					{/* { clientes && clientes.map( (servico) => {
						return <></>
					})}						 */}
			</ContainerFluidH> 
	</section>
}