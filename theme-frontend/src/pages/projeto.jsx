import { useSearchParams, useLocation } from 'react-router-dom';
import { SectionEnding } from '../components/SectionEnding';
import { BigRedCircle } from '../components/circles';
import { Container } from '../components/containers';
import { MainMenu } from '../components/header/nav';
import { Loading } from '../components/loading';
import { useRect } from '../components/utils';
import { Footer } from '../components/footer';
import { Slider } from '../components/slider';
import { Icon } from '@iconify/react';
import { _app } from '../utils/functions';
import ReactPlayer from 'react-player/lazy';
import apiFetch from '@wordpress/api-fetch';
import React from 'react';
import tw from 'twin.macro';

const ProjetoPage = ( props ) => {
	
	const {title, data } = getData();
	const [changeMedia, setChangeMedia] = React.useState( {} );
	
	React.useEffect(()=>{
		window.scrollTo(0,0)						
	},[])
	
	
	const onSlideChange = ( e ) => {
		const slide = data.slides[e.index];
		let video = "";
		let poster = "";
		if( slide.type == "video" ){
			video = slide.url;
		} else if( slide.type = "image" ){
			poster = slide.url;
		}
		setChangeMedia({ video:video, poster:poster, type: slide.type })
	}
	
	if( !data ) return <Loading message="Carregando projeto..." />
	

	return <>
		<Container fluid id="project-page--wrapper">
			<MainMenu/>	
			<Header title={ title } data={ data } changeMedia={changeMedia} />
			
			{ data.headerType == "Video" 
				? <ContentVideo title={ title } data={ data } /> 
				: null 
			}

			{ data.headerType == "Slides"
				? <ContentSlider title={ title } data={ data } onChange={ onSlideChange } />
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
	let location = useLocation();
	let pageSlug = location.pathname.split('/').filter( ( item ) => item !== '' ).pop()
	let basePath = path ? path : '/database/v1/projetos?slug='+pageSlug;
	
	React.useEffect( ()=>{		
		apiFetch( { path: basePath } ).then( ( data ) => {
			let item = data[0]
			const updateUrl = (url) => {
				if( url.indexOf("https") > -1 ) return url;
				if( url.indexOf("http") > -1 ) {
					return url.replace( "http", "https");
				}
				return url
			}
			//update all urls to https
			if(item.data.gallery?.length > 0) item.data.gallery = item.data.gallery.map( (item) => ({...item, url:updateUrl(item.url)}))
			if(item.data.slides?.length > 0) item.data.slides = item.data.slides.map( (item) => ({...item, url:updateUrl(item.url)}))
			if(item.data.image) item.data.image = updateUrl(item.data.image)
			if(item.data.poster) item.data.poster = updateUrl(item.data.poster)
			if(item.data.logo) item.data.logo = updateUrl(item.data.logo)
			if(item.data.videoUrl) item.data.videoUrl = updateUrl(item.data.videoUrl)
			if(item.data.video) item.data.video = updateUrl(item.data.video)
			
			setData( { title: item.title, data: item.data } );
		}).catch( (error) => {
			console.log( "there was an error >", error )
		});
	}, [] );

	return { title, data };
}

const Header = ( { title, data, changeMedia } ) => {

	const headerRef = React.useRef();
	const headerRect = useRect(headerRef);
	const posterRef = React.useRef();
	const videoRef = React.useRef();

	const height = "60vh";
	let { video, videoUrl, poster, videoOrigin, headerType } = {...data};

	const [ videoState, setVideoState ] = React.useState(null)
	const [ posterState, setPosterState ] = React.useState(null)
	
	React.useEffect(()=>{
		
		if ( 
			Object.keys(data).length === 0  && 
			Object.keys(changeMedia).length === 0
		) return;
		
		if( data.headerType == "Slides" && Object.keys(changeMedia).length > 0 ) {
			
			video =    changeMedia.video;
			videoUrl = changeMedia.video;
			poster =   changeMedia.poster;
			
		} 
		if( data.headerType === "Slides" && Object.keys(changeMedia).length === 0 ) {
			video =    data.slides[0].url;
			videoUrl = data.slides[0].url;
			poster =   data.slides[0].url;
		}

		setVideoState( video )
		setPosterState( poster )


		posterRef.current?.getAnimations().forEach((animation) =>  {
			animation.cancel(); animation.play();
		});
		videoRef.current?.getAnimations().forEach((animation) =>  {
			animation.cancel(); animation.play();
		});

		
	},[changeMedia, data])
	
	
	return <>
	<Container fluid id="project-header--main-image" tw="border-b-8 border-b-primary pb-8" style={{height: height}}>
		{ poster || posterState ? 
			<img 
				src={ posterState ? posterState : poster } 
				tw="absolute w-screen overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover" 
				style={{height: height}}	
				ref={posterRef}		
				css={`
					opacity: 0;
					animation: fadeIn 0.5s ease-in-out forwards;
					@keyframes fadeIn {
						0% { opacity: 0; }
						100% { opacity: 1; }
					}
				`}
			/> 
		: null}
			
		{ headerType == "Video" || changeMedia.type == "video" ||  videoState ? 
		 <Container fluid absolute 
			id="project-header--background-video-over-poster" 
			tw="overflow-hidden" 
			style={{height: height}}
			ref={videoRef}
			>
			<ReactPlayer
				url={ videoState || video }
				playing={true}
				muted={true}
				loop={true}
				fluid={true}
				width="100%"
				height="auto"
				object-fit="cover"
				className="absolute scale-[2] top-1/2 -translate-y-1/2 sm:(scale-150) md:(scale-100)"
			/>
						
		</Container> 
		: null }

		<FadeOverlay />

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

const FadeOverlay = tw.div`
	relative w-screen h-full top-0 left-0 bg-black/50 z-0
`
const ContentVideo  = ({ title, data }) => {
	
	const { video, videoUrl, videoOrigin, poster } = {...data};

	return <>
	<Container fluid id="project-video--content-wrapper" tw="z-20 -mt-[128px]" >
			<Container id="project-video--wrapper" tw="relative origin-top scale-90 md:scale-75">
				<div id="project-video--video-wrapper--shadow-handler"
					tw="
						absolute						
						bg-gradient-to-b from-primary-800 to-red-800
						rounded-2xl
						w-[85%] left-1/2 -translate-x-1/2
						pt-[56.25%]
						[box-shadow: 0px 30px 40px -5px red]
					" 
					>
					<h4 
						tw="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center justify-center space-y-8 text-center leading-8" 
						>
						<Icon icon="svg-spinners:ring-resize" width={64}/>
						<span>Carregando video</span>
					</h4>
					</div>
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

const ContentSlider = ({ title, data, onChange }) => {
	return <>
	<Container>
		<Slider slides={ data.slides } onChange={ onChange } />
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
			<img src={data.logo} tw="w-full h-auto object-cover" />
	</Container>	
	</>
}

const Gallery = ({ title, data }) => {
	return <>
	<Container tw="flex justify-center items-center pb-20">
		<div tw="grid grid-cols-1 gap-16 px-8 sm:(grid-cols-2) md:(grid-cols-4 gap-4) lg:(grid-cols-4 gap-8)">
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