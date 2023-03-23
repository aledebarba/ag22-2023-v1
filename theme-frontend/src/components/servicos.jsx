
import { useState, useEffect } from 'react';
import { Buttonx } from './button';
import { Card, CardTitle, CardText, CardBox, ServiceListItem, BoxServiceList, ServiceTitle, ServiceText, ServiceImg } from './cards';
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
				<Buttonx outline center>Conheça mais sobre nosso serviços</Buttonx>
		</ContainerFluidH> 
	</section>
}

export const ServiceLi = () => {
	const [ servicos, setServicos ] = useState( [] );
		useState(()=>{
			apiFetch({ path: 'database/v1/servicos' })
				.then( (data) => {
					setServicos( data )
				} )
		}, [])

		return <section className="servicos" tw={"py-20 bg-gray-100 text-secondary"}>
                <BoxServiceList>
                    { servicos && servicos.map( (servico) => {
                        return <ServiceListItem>
							<div className='servicecontent' tw={"basis-4/12"}>
								<ServiceTitle>{servico.title}</ServiceTitle>
                            <ServiceText>{servico.data.desc}</ServiceText>
							</div>
                            
							<ServiceImg>
								{servico.data.image}
							</ServiceImg>
                        </ServiceListItem>
						
                        })}                        
                </BoxServiceList>
    </section>
}

