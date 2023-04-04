import React from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { SectionEnding } from '../components/SectionEnding';
import { BigRedCircle } from '../components/circles';
import { Container } from '../components/containers';
import { MainMenu } from '../components/header/nav';
import { useRect } from '../components/utils';
import { Footer } from '../components/footer';
import { Slider } from '../components/slider';
import { _app } from '../utils/functions';
import ReactPlayer from 'react-player';
import apiFetch from '@wordpress/api-fetch';
import tw from 'twin.macro';


const ProjetoPage = ( props ) => {
	
	const [searchParams] = useSearchParams();
	const { title, data } = getData();
	
	React.useEffect(()=>{
		window.scrollTo(0,0)
	},[])

return <>
		<Container fluid id="project-page--wrapper">
			<MainMenu/>			

			<HeaderMedia video={ data.videoUrl } poster={ data.poster } titulo={title} height={"60vh"} header-type={ data.headerType } slides={ data.slides }/>

			<Container center id="project-page--client-logo">
				<div tw="relative w-1/2 -top-[15%] z-10">
					<img src={data.poster} tw="w-full h-auto object-cover" />
				</div>

			</Container>	

			<Container tw="flex justify-center items-center pb-60">
				<div tw="grid grid-cols-1 gap-2 px-8 sm:(grid-cols-2) md:(grid-cols-4 gap-4) lg:(grid-cols-4 gap-8)">
					{
						data.showEndGallery && data.gallery.map( (image, index) => {
							return <div key={`end-gallery-image-${index}`} tw="relative w-full h-fit">
								<img src={image.url} alt="" tw="w-full h-full object-cover" />
							</div>
						} )
					}
				</div>
			</Container>
			<Footer  copyright={_app.options.copyright} devby={_app.options().devby}/>
		</Container>
	</>

}

export default ProjetoPage;

const getData = (path) => {
	
	const [ { title, data }, setData ] = React.useState({title: "", data: {} });
	let basePath = path ? path : '/database/v1/projetos';
	let location = useLocation();
	let pageSlug = location.pathname.split('/').filter( ( item ) => item !== '' ).pop()
	
	React.useEffect( ()=>{		
	
		apiFetch( { path: basePath } ).then( ( data ) => {
			let item = data.filter( ( record ) => record.slug === pageSlug );
			setData( { title: item[0].title, data: item[0].data } );

		})
	}, [] );

	return { title, data };
}

const HeaderMedia = ( { titulo, video, poster, height="60vh", "header-type":headerType, slides } ) => {
	
	const headerRef = React.useRef();
	const headerRect = useRect(headerRef);

	return <>
		<Container fluid id="project-header--main-image" tw="border-b-8 border-b-primary" style={{height: height}}>
			{poster ? 
				<img src={poster} tw="absolute w-screen overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover" style={{height: height}}/> 
			: null}
			
			{ headerType == "Video" ? 
				<Container fluid absolute 
					id="project-header--background-video-over-poster" 
					tw="overflow-hidden" 
					style={{height: height}}
					>
					<ReactPlayer
						url={video}
						playing={true}
						muted={true}
						loop={true}
						fluid={true}
						width="100%"
						height="auto"
						object-fit="cover"
						className="absolute scale-[2] top-1/2 -translate-y-1/2 sm:(scale-150) md:(scale-100)"
					/>
					<div id="project-header--video-overlay" 
						tw="relative w-screen h-full top-0 left-0 bg-black/70"
					/>				
				</Container> 
			: null }

			<Container hcenter id="project-header--title" style={{height:height}} ref={headerRef}>
				<h1 tw="text-white w-2/3">{titulo}</h1>
			</Container>			
			<BigRedCircle style={{ position: "absolute", bottom: 0, left: headerRect?.left - ( window.innerHeight ) }}/>
			<SectionEnding />
		</Container>
		
		{ // When the midia ia a video 
			headerType == "Video" ? 
			<Container fluid wcenter tw="top-0">
				<Container id="project-jeader--video-wrapper--shadow-handler" 
					tw="box-border grid place-content-center z-10 -translate-y-40 scale-[0.85]
						after:(mx-auto w-5/6 h-[40px] bg-primary)"
					>
					<Container id="project-header--video--wrapper"
						tw="relative overflow-hidden grid place-content-center rounded-3xl" 
						>
						<ReactPlayer
							url={video}
							playing={true}
							muted={true}
							loop={true}
							width="100%"
							height="100%"
							object-fit="cover"	
						/>
					</Container>
				</Container>							
			</Container> 
		: null }

		{ headerType == "Slides" ? 
			<Container>
				<Slider slides={ slides } />
			</Container> 
		: null }

	</>
}