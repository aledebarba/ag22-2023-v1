
import { useState, useEffect } from 'react';
import { Button } from './button';
import { Card, CardTitle, CardText, CardBox } from './cards';
import { ContainerFluidH } from './containers';
import { H2Dash } from './headings';
import apiFetch from '@wordpress/api-fetch';
import tw from 'twin.macro';

export const Servicos = () => { 
		
		const [ servicos, setServicos ] = useState( [] );
		useState(()=>{
			apiFetch({ path: 'database/v1/servicos' })
				.then( (data) => {
					setServicos( data )
				} )
		}, [])

		return <section className="servicos" tw={"py-20 bg-gray-100 text-secondary"}>
			<ContainerFluidH>
				<H2Dash>Serviços</H2Dash>
				<CardBox>
					{ servicos && servicos.map( (servico) => {
						return <Card>
							<CardTitle>{servico.title}</CardTitle>
							<CardText>{servico.data.desc}</CardText>
						</Card>
						})}						
				</CardBox>
				<Button tw="mx-auto my-[2rem]">Conheça mais sobre nosso serviços</Button>
		</ContainerFluidH> 
	</section>
}

