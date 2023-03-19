import { ContainerFluidH } from './containers';
import { H2Dash } from './headings';
import { Buttonx } from './button';
import tw from 'twin.macro';
import { useEffect, useState } from 'react';
import apiFetch from '@wordpress/api-fetch';

export const Cases = () => { 

	const colWidth = "40vw"
	const [cases, setCases] = useState([])
	useEffect(()=>{
		apiFetch({ path: 'database/v1/projetos/' })
			.then( (data) => {
				console.log( data )
				setCases( data )
			})
	}, [])
	
	
	return <section className="Cases" tw="py-28 relative overflow-visible">
				
				<div css={[
					tw`absolute border-[6rem] border-primary rounded-[999rem] top-[-20vw] left-[-18vw]`,
					` width: ${colWidth}, height: ${colWidth} `
				]} />
				
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
			index === 0 && tw`col-span-2`,
			index !== 0 && tw`col-auto`,
			tw`relative overflow-hidden rounded-2xl h-[40vh]`,
		]}		 
	>
		<img 
			css={[
				tw`w-full h-full object-cover`,				
			]}
			src={item.data.image}
		/>
		<div 
			tw="absolute bottom-0 left-0 w-full h-1/2 p-8 bg-secondary/80 backdrop-blur-lg border-t-2 
			border-primary-400 flex flex-col justify-center "
		>
			<p tw="text-detail text-primary-200 tracking-widest">
				{item.data.category}
			</p>
			<h5 tw="text-white font-semibold tracking-wider"> 
				{ item.title}
			</h5>
			{/* <p>
				{item.data.content}
			</p> */}
			<div tw="mt-1">
				<Buttonx small>
					<a href="#">Saiba mais</a>
				</Buttonx>
			</div>
		</div>
	</div>		
}