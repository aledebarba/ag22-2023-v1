import React from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { SectionEnding } from '../components/heroheader';
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

	console.log( data )

	return <>
		<Container fluid id="project-page--wrapper">
			<MainMenu/>			
			<HeaderMedia video={ data.videoUrl } poster={ data.poster } titulo={title} height={"60vh"} header-type={ data.headerType } slides={ data.slides }/>

			<Container  id="project-page--client-logo" 
						tw="h-[50vh] flex justify-center items-center box-border"
				>
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
	const videoRef = React.useRef();

	return <>
			<Container id="project-header" fluid tw="border-b-8 border-b-primary" style={{height: height}}>
					{
						poster 
						? <img src={poster} tw="absolute w-screen overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover" style={{height: height}}/> 
						: null
					}
					
					<Container id="project-header--background-video" fluid absolute tw="overflow-hidden" style={{height: height}}>
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
						<div id="project-header--video-overlay" tw="relative w-screen h-full top-0 left-0 bg-black/70"/>						
					</Container>

				<Container  id="project-header--content" 					
					absolute
					tw="z-10 top-0 left-1/2 -translate-x-1/2"
					style={{height: height}}
					>
					<h1 ref={headerRef}
						tw="hidden font-thin ml-8 absolute text-white top-1/2 -translate-y-1/2 w-[66%] md:(block)">
						{titulo}
					</h1>
					<h2 ref={headerRef}
						tw="font-thin ml-8 absolute text-white top-1/2 -translate-y-1/2 w-[66%] md:(hidden)">
						{titulo}
					</h2>
				</Container>	

				<BigRedCircle style={{ position: "absolute", bottom: 0, left: headerRect?.left - ( window.innerHeight ) }}/>
				<SectionEnding />		
		</Container>
		{ 
			headerType == "Video" 
			? <Container>
				<div 
					tw="relative w-[80%] h-[50%] left-1/2 -translate-x-1/2 -translate-y-[max(128px,25%)] overflow-hidden grid place-content-center rounded-2xl z-10"			
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
				</div>		
				<div tw="border-4 border-transparent w-[70%] left-1/2 -translate-x-1/2  h-[1px] absolute top-[calc(95% - max(150px,25%))] -z-[1] md:(top-[calc(95% - max(128px,25%))] -z-[1])"
						css="box-shadow: 0 20px 30px 10px red" />			
			</Container> 
			: null 
		}
		{ 
			headerType == "Slides"
			? <Container>
				<Slider slides={ slides } />
			</Container> 
			: null 
		}

	</>
}