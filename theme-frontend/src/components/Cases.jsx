import { ContainerFluidH } from './containers';
import { H2Dash } from './headings';
import { Buttonx } from './button';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import { useEffect, useState } from 'react';
import apiFetch from '@wordpress/api-fetch';

export const Cases = () => { 

	const colWidth = "40vw"
	const [cases, setCases] = useState([])
	useEffect(()=>{
		apiFetch({ path: 'database/v1/projetos/' })
			.then( (data) => {				
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
		]}	className="group"	 
	>
		<img 
			css={[
				tw`w-full h-full object-cover relative group-hover:brightness-125 duration-300 group-hover:scale-[125%]`,				
			]}
			src={item.data.image}
		/>
		<div 
			tw="absolute bottom-0 left-0 w-full h-fit p-8 bg-secondary/80 backdrop-blur-lg border-t-2 
			border-primary-400 flex flex-col justify-center translate-y-full group-hover:translate-y-0 
			duration-700 transition-all ease-out"
		>
			<p tw="text-detail text-primary-200 tracking-widest pb-[0.2em] mb-0">
				{item.data.category}
			</p>
			<h5 tw="text-white font-semibold tracking-wider mt-0 text-[1.15rem]  md:text-[1.25rem] lg:text-[1.5rem] leading-[1.25rem] md:leading-[1.45rem] lg:leading-[1.75rem] mb-[0.4rem] md:mb-[0.5rem] lg:mb-[0.6rem]"> 
				{ item.title}
			</h5>
			<div tw="mt-1">
				<Buttonx small>
					<Link to={`projetos/${item.slug}`}>Saiba mais</Link>
				</Buttonx>
			</div>
		</div>
	</div>		
}