import { ContainerFluidH } from './containers';
import { H2Dash } from './headings';
import { Buttonx } from './button';
import tw from 'twin.macro';
import { useEffect, useState } from 'react';
import apiFetch from '@wordpress/api-fetch';

export const Cases = () => { 

	const [cases, setCases] = useState([])
	useEffect(()=>{
		apiFetch({ path: 'database/v1/projetos/' })
			.then( (data) => {
				console.log( data )
				setCases( data )
			})
	}, [])
	
	
	return <section className="Cases" tw="py-28 relative overflow-visible">
				
				<div tw="absolute border-[6rem] border-primary rounded-[999rem] w-[40vw] h-[40vw] top-[-20vw] left-[-18vw]" />
				
				<ContainerFluidH tw="relative">
					<H2Dash>Cases</H2Dash>
					<div tw="grid grid-cols-3 gap-8 mt-16">
						{ cases && cases.map( ( item, index) => <CaseCard item={item} index={index} key={index}/> ) }
					</div>
			</ContainerFluidH> 
	</section>
}

const CaseCard = ({ item, index }) => {
		
	
	return <div 
		css={[
			`position: relative`,
			index === 0 && tw`col-span-2`,
			index !== 0 && tw`col-auto`,
		]}		
	>
		<img 
			tw="w-full h-full object-cover rounded-2xl"
			src={item.image}
		/>
		<div 
			tw="absolute bottom-0 left-0 w-full h-4"
		>
			<h6>
				{item.title}
			</h6>
			<p>
				{item.description}
			</p>
			<Buttonx>
				<a href="#">Ir para o projeto</a>
			</Buttonx>
		</div>
	</div>
		
		
		// <div css={[
		// 	index === 0 && tw`col-span-2`,
		// 	index !== 0 && tw`col-auto`,
		// 	`
		// 		width: auto;
		// 		height: 40vh;
		// 		background-image: url(${item.data.image});
		// 		background-size: cover;
		// 		background-position: center;
		// 		background-repeat: no-repeat;
		// 		border-radius: 1rem;

		// `]} />
}