import { useSearchParams, useLocation } from 'react-router-dom';
import { SectionEnding } from '../components/SectionEnding';
import { BigRedCircle } from '../components/circles';
import { Container } from '../components/containers';
import { MainMenu } from '../components/header/nav';
import { Loading } from '../components/loading';
import { useRect } from '../components/utils';
import { Footer } from '../components/footer';
import { Slider } from '../components/slider';
import { _app } from '../utils/functions';
import ReactPlayer from 'react-player';
import apiFetch from '@wordpress/api-fetch';
import React from 'react';
import tw from 'twin.macro';

const ProjetoPage = ( props ) => {
	
	const [searchParams] = useSearchParams();
	const { title, data } = getData();
	
	React.useEffect(()=>{
		window.scrollTo(0,0)
	},[])

	if( !data ) return <Loading message="Carregando projeto..." />
	
	return <>
		<Container fluid id="project-page--wrapper">
			<MainMenu/>	
			<Header title={ title } data={ data }/>
			{ data.headerType == "Video" 
				? <ContentVideo title={ title } data={ data } /> 
				: null 
			}
			{ data.headerType == "Slides"
				? <ContentSlider title={ title } data={ data } />
				: null
			}
			{ data.headerType == "Image"
				? <ContentImage title={ title } data={ data } />
				: null
			}

			<Thumb title={ title } data={ data }/>

			{ data.showEndGallery 
				? <Gallery title={ title } data={ data } />
				: null
			}
			<Footer  copyright={_app.options.copyright} devby={_app.options().devby}/>
		</Container>
	</>
}


const getData = (path) => {
	
	const [ { title, data }, setData ] = React.useState({title: "", data: {} });
	let basePath = path ? path : '/database/v1/projetos';
	let location = useLocation();
	let pageSlug = location.pathname.split('/').filter( ( item ) => item !== '' ).pop()
	
	React.useEffect( ()=>{		
	
		apiFetch( { path: basePath } ).then( ( data ) => {
			let item = data.filter( ( record ) => record.slug === pageSlug );
			setData( { title: item[0].title, data: item[0].data } );
		}).catch( (error) => {
			console.log( error )
		});
	}, [] );

	return { title, data };
}

const Header = ( { title, data } ) => {

	const headerRef = React.useRef();
	const headerRect = useRect(headerRef);
	const height = "60vh";
	const { video, videoUrl, poster, videoOrigin, headerType } = {...data};
	
	return <>
	<Container fluid id="project-header--main-image" tw="border-b-8 border-b-primary pb-8" style={{height: height}}>
		{ poster ? 
			<img src={poster} tw="absolute w-screen overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover" style={{height: height}}/> 
		: null}
			
		{ headerType == "Video" ? 
		<Container fluid absolute 
			id="project-header--background-video-over-poster" 
			tw="overflow-hidden" 
			style={{height: height}}
			>
			<ReactPlayer
				url={ videoOrigin == "file" ? video : videoUrl }
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

		<Container hcenter id="project-header--title" 
			style={{height:height}} 
			ref={headerRef}
			>
			<h1 tw="hidden md:block text-white w-2/3 px-8">
				{title}
			</h1>
			<h2 tw="text-white w-2/3 px-8 md:hidden">
				{title}
			</h2>
		</Container>	

		<BigRedCircle 
			style={{ position: "absolute", bottom: 0, left: headerRect?.left - ( window.innerHeight ) }}
		/>
		<SectionEnding />
	</Container>
	</>
}

const ContentVideo  = ({ title, data }) => {
	
	const { video, videoUrl, videoOrigin, poster } = {...data};

	return <>
	<Container fluid id="project-video--content-wrapper" tw="z-20 -mt-[128px]" >
			<Container id="project-video--wrapper" tw="relative origin-top scale-90 md:scale-75">
				<div id="project-video--video-wrapper--shadow-handler"
					tw="
						absolute block 
						bg-primary 
						w-[85%] left-1/2 -translate-x-1/2
						pt-[56.25%]
						[box-shadow: 0px 30px 40px -5px red]
					" 
				/>
				<Container id="project-video--video-responsive-container">
					<div css={`
							position: relative;
							width: 100%;
							padding-top: 56.25%;
							.react-player {
								position: absolute;
								top: 0;
								left: 0;
								border-radius: 24px;
								overflow: hidden;
							}
						`}>
						<ReactPlayer
							url={ videoOrigin == "file" ? video : videoUrl }
							playing={true}
							muted={true}
							loop={true}
							fluid={true}
							width="100%"
							height="100%"
							object-fit="cover"
							className="react-player"
						/>
					</div>
				</Container>
			</Container>
	</Container>
	</>
}

const ContentSlider = ({ title, data }) => {
	return <>
	<Container>
		<Slider slides={ data.slides } />
	</Container> 
	</>
}
const ContentImage  = ({ title, data }) => {
	return <>
	<Container>
		<img src={data.image} tw="w-full h-auto object-cover" />
	</Container> 
	</>
}

const Thumb = ({ title, data }) => {
	return <>
	<Container content-center id="project-page--client-logo" tw="min-h-[25vw] my-16">
			<img src={data.poster} tw="w-full h-auto object-cover" />
	</Container>	
	</>
}

const Gallery = ({ title, data }) => {
	return <>
	<Container tw="flex justify-center items-center pb-60">
		<div tw="grid grid-cols-1 gap-2 px-8 sm:(grid-cols-2) md:(grid-cols-4 gap-4) lg:(grid-cols-4 gap-8)">
			{data.gallery.map( (image, index) => <>
				<div key={`end-gallery-image-${index}`} tw="relative w-full h-fit">
				    <img src={image.url} alt="" tw="w-full h-full object-cover" />
				</div>
			 </>)}
		</div>
	</Container>
	</>
}

export default ProjetoPage;