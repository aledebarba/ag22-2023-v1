import { ContainerFluidH } from './containers'
import { H2Dash } from './headings'
import { Buttonx } from './button'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import { useEffect, useState } from 'react'
import apiFetch from '@wordpress/api-fetch'
import { _app } from '../utils/functions'

export const Cases = () => {
	const options = _app.options()
	const colWidth = '40vw'
	const [cases, setCases] = useState([])
	useEffect(() => {
		apiFetch({ path: 'database/v1/projetos/' }).then(data => {
			let oredered = options.cases.map(item => {
				let caseId = item.id
				let found = data.find(caseItem => caseItem.id === caseId)
				return found
			})
			if (oredered.length > options.maxCases) {
				oredered = oredered.slice(0, options.maxCases)
			}
			setCases(oredered)
		})
	}, [])

	return (
		<section
			className='Cases'
			tw='py-28 relative overflow-visible'
			id='cases'
		>
			<div data-desc="big red circle"
				css={[
					tw`absolute border-[6rem] border-primary rounded-[999rem] top-[-20vw] left-[-18vw]`,
					`  width: ${colWidth}, height: ${colWidth} `
				]}
			/>

			<ContainerFluidH tw='relative'>
				<H2Dash>Cases</H2Dash>
				<div tw="grid grid-cols-1 gap-2 auto-rows-min px-4 mt-8 mb-8
						 md:(grid grid-cols-3 gap-8 mt-16)
					">
					{cases &&
						cases.map((item, index) => (
							<CaseCard item={item} index={index} key={index} />
						))}
				</div>
			</ContainerFluidH>
		</section>
	)
}

const CaseCard = ({ item, index }) => {
	return (
		<div
			css={[
				index === 0 && tw`md:(col-span-2)`,
				index !== 0 && tw`col-auto`,
				tw`relative overflow-hidden rounded-2xl h-[30vh] md:h-[40vh]`,
				(`
				.overlay-info {
					bottom: -75%;
					transition: all 0.5s ease-in-out;

					@media (min-width: 768px) {
						bottom: -50%;
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
						transform: scale(1.5);
						filter: brightness(1.5);
						transition: all 1s ease-in-out;
					}

					.overlay-info {
						bottom: 0;
						transition: all 0.5s ease-in-out;
					}
				}
				`)
			]}
		>
			<img
				css={[tw`w-full h-full object-cover relative`]}
				src={item.data.image}
			/>
			<div
				className='overlay-info'
				css={[
					tw`bg-secondary-900/80`,
					`			
					position: absolute;			
					width: 100%;
					height: 75%;
					padding: 2rem;
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
				<h5 tw='text-white font-semibold tracking-wider mt-0 text-[1.15rem]  md:text-[1.25rem] lg:text-[1.5rem] leading-[1.25rem] md:leading-[1.45rem] lg:leading-[1.75rem] mb-[0.4rem] md:mb-[0.5rem] lg:mb-[0.6rem]'>
					{item.title}
				</h5>
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