import { useState, useEffect } from 'react';
import { ContainerFluidH } from './containers';
import { H2Dash } from './headings';
import apiFetch from '@wordpress/api-fetch';
import tw from 'twin.macro';

export const Clientes = () => { 
		
		const [ clientes, setClientes ] = useState( [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] );
		const [ upLine, setUpLine ] = useState( [] );
		const [ downLine, setDownLine ] = useState( [] );

		useEffect(()=>{
			// apiFetch({ path: 'database/v1/clientes' })
			// 	.then( (data) => {
			// 		setClientes( data )
			// 	})

			//divide os clientes em duas linhas com o mesmo número de clientes
			const up = clientes.slice(0, Math.ceil(clientes.length / 2));
			const down = clientes.slice(Math.ceil(clientes.length / 2), clientes.length);
			
			setUpLine( [...up, ...down] );
			setDownLine( [...down, ...up] );
			
		}, [])

	return <section className="clientes" tw={"py-28 bg-secondary-900 text-secondary"}>
			<ContainerFluidH>
				<H2Dash tw="text-secondary-100">Clientes</H2Dash>
				<div id="clientes_scroller" tw="mt-8 w-[50vw] h-[16rem] overflow-visible border border-[2px] border-primary mx-auto relative">

					<div id="upline" tw="flex flex-nowrap gap-4 py-2 w-fit absolute left-0 top-0">
						{upLine.map( (upitem, index) => {
							return <div key={index} tw="w-24 h-24 bg-secondary-100 rounded-lg flex justify-center items-center">
								<p>{upitem}</p>
							</div>
						})}
					</div>

					<div id="downline" tw="flex flex-nowrap gap-4 py-2 w-fit absolute right-0 bottom-0">
						{downLine.map( (downitem, index) => {
							return <div key={index} tw="w-24 h-24 bg-secondary-100 rounded-lg flex justify-center items-center">
								<p>{downitem}</p>
							</div>
						})}
					</div>

				</div>
			</ContainerFluidH> 
	</section>
}