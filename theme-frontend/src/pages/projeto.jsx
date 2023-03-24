import React from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import apiFetch from '@wordpress/api-fetch';
import { MainMenu } from '../components/header/nav';
import { Footer } from '../components/footer';
import ReactPlayer from 'react-player';
import tw from 'twin.macro';


const ProjetoPage = ( props ) => {
	
	const [searchParams] = useSearchParams();
	const [ { title, data }, setProjeto ] = React.useState({title: "", data: {} });
	let location = useLocation();
	let pageSlug = location.pathname.split('/').filter( ( item ) => item !== '' ).pop()

	React.useEffect( ()=>{		
		apiFetch( { path: '/database/v1/projetos' } ).then( ( projetos ) => {
			let projeto = projetos.filter( ( projeto ) => projeto.slug === pageSlug );
			setProjeto( { title: projeto[0].title, data: projeto[0].data } );
		})
	}, [] );

	console.log( title, data );

	return <main>
		<MainMenu/>
		<HeaderMedia video={ data.videoUrl } poster={ data.poster } titulo={title}/>
		
		<section logo-container
			 tw="relative w-2/6 h-fit left-1/2 -translate-x-1/2  mb-[30vh]">			
				<img src={data.poster} tw="w-full h-auto object-cover " />
		</section>

		<section details>
			<div tw="relative left-1/2 -translate-x-1/2 mb-20 grid grid-cols-2 gap-2 w-[90vw] md:(grid-cols-4 gap-4 w-[75vw]) lg:(grid-cols-4 gap-8 w-[60vw])">
				{
					data.showEndGallery && data.gallery.map( (image, index) => {
						return <div key={`end-gallery-image-${index}`} tw="relative w-full h-fit">
							<img src={image.url} alt="" tw="w-full h-full object-cover" />
						</div>
					} )
				}
			</div>
		</section>
		<Footer/>
	</main>

}

export default ProjetoPage;

const HeaderMedia = ( { titulo, video, poster } ) => {
	return <>
			<div 
				bg-video-holder
				css={[
				tw`relative w-screen h-[70vh] overflow-y-visible overflow-x-hidden bg-black box-border`,
				tw`border-b-[10px] border-b-primary`
			]}>
			{ 
				poster 
					? <img src={poster} tw="absolute w-screen h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover" /> 
					: null 
			}
			<div tw="absolute w-screen h-[70vh] top-0 left-1/2 -translate-x-1/2 overflow-hidden" >
				<ReactPlayer 
					url={video}
					playing={true}
					muted={true}
					loop={true}
					fluid={true}
					width="100%"
					height="auto"
					className="absolute top-1/2 -translate-y-1/2"
				/>
			</div>
			<div video-overlay tw="relative w-screen h-screen  top-0 left-0 bg-black/50"/>
			<div 
				ciculo-vermelho 
				tw="absolute w-[960px] h-[960px] rounded-[99rem] bg-transparent top-[-280px] left-[-480px] border-[200px] border-primary"
			/>
			<h1 tw="absolute top-1/2 -translate-y-1/2 left-1/4 text-secondary-50 w-2/6 font-thin tracking-wider text-6xl leading-relaxed">
				{titulo}
			</h1>
		</div>
		
		<div 
			video-copy 
			tw="w-[42vw] h-[22vw] relative rounded-2xl overflow-hidden left-1/2 -translate-x-1/2 -translate-y-[33%]"
		>
			<ReactPlayer
				url={video}
				playing={true}
				muted={true}
				loop={true}
				width="105%"
				height="105%"
				object-fit="cover"
				className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden"
			/>
		</div>

	</>
}