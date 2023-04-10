import tw from 'twin.macro'
import apiFetch from '@wordpress/api-fetch'
import { _app } from '../utils/functions'
import { Link } from 'react-router-dom'
import { H2Dash } from './headings'
import { Buttonx } from './button'
import { Container } from './containers'
import { BigRedCircle } from './circles'
import { useEffect, useState, useRef } from 'react'
import { useRect } from './utils'

export const Cases = ( { casesList } ) => {

	const casesRef = useRef()
	const casesRect = useRect(casesRef)

	//const options = _app.options()
	const [cases, setCases] = useState( casesList )
	
	useEffect(() => {
		// apiFetch({ path: 'database/v1/projetos/' }).then(data => {
		// 	let ordered = options.cases.map(item => {
		// 		let caseId = item.id
		// 		let found = data.find(caseItem => caseItem.id === caseId)
		// 		return found
		// 	})
		// 	if (ordered.length > options.maxCases) {
		// 		ordered = ordered.slice(0, options.maxCases)
		// 	}
		// 	setCases(ordered)			
		// })
	}, [])

	return <div id="cases" >
		<Container  fluid tw="bg-secondary-50 m-0 py-14">
					<Container absolute tw="hidden md:(block)" >
						<BigRedCircle style={{ zIndex: 0, position: "absolute", top: "-45vh", left: 120 + casesRect?.left - window.innerHeight }} />
					</Container>
					<Container >
						<H2Dash>Cases</H2Dash>
						<div ref={casesRef}
							 tw="grid grid-cols-1 gap-2 auto-rows-min px-4 mt-8 mb-8 z-10
								md:(grid grid-cols-3 gap-8 mt-16)">
							{cases &&
								cases.map((item, index) => (
									<CaseCard item={item} index={index} key={index} />
								))}
						</div>
					</Container>
		</Container>
	</div>
}

const CaseCard = ({ item, index }) => {
	return (
		<div
			css={[
				index === 0 && tw`md:(col-span-2)`,
				index !== 0 && tw`col-auto`,
				tw`relative overflow-hidden rounded-2xl h-[30vh]`,
				(`
				.overlay-info {
					bottom: -80%;
					transition: all 0.5s ease-in-out;

					@media (min-width: 768px) {
						bottom: -80%;
					}
				}

				img {
					transform: scale(1);
					transition: all 1s ease-in-out;
					filter: brightness(1.0);
				}

				&:hover {
					transition: all 1s ease-in-out;
					img {
						transform: scale(1.2);
						transition: all 0.5s ease-in-out;
					}

					.overlay-info {
						bottom: -20%;
						transition: all 0.5s ease-in-out;
						@media (min-width: 768px) {
							bottom: 0;
						}
					}

					
				}
				`)
			]}
		>
			<img
				css={[tw`w-full h-full object-cover relative`]}
				src={item.data.poster}
			/>
			<div
				className='overlay-info'
				css={[
					tw`bg-secondary-900/80`,
					`			
					position: absolute;			
					width: 100%;
					height: 80%;
					padding: 1rem;
					backdrop-filter: blur(5px);
					@media (min-width: 768px) {
						height: 50%;
					}
					`
				]}
			>
				<p tw='text-detail text-primary-200 tracking-widest pb-[0.2em] mb-0'>
					{item.data.category}
				</p>
				<h6 tw="text-white">
					{item.title}
				</h6>
				<div tw='mt-1'>
					<Buttonx small>
						<Link to={`projetos/${item.slug}`}>Saiba mais</Link>
					</Buttonx>
				</div>
			</div>
		</div>
	)
}
4