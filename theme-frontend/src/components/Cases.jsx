import { ContainerFluidH } from './containers';
import { H2Dash } from './headings';
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
	
	
	return <ContainerFluidH>
		<section className="Cases" tw="py-8">
			<H2Dash>Cases</H2Dash>
			<div tw="grid grid-cols-3 gap-8 mt-16">
				{ cases && cases.map( ( item, index) => <CaseCard item={item} index={index} key={index}/> ) }
			</div>
		</section>
	</ContainerFluidH> 
}

const CaseCard = ({ item, index }) => {
		return <div css={[
			index === 0 && tw`col-span-2`,
			index !== 0 && tw`col-auto`,
			`
			width: auto;
			height: 40vh;
			background-image: url(${item.data.image});
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			border-radius: 1rem;
		`]} />
}