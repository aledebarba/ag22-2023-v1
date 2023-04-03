import { Container } from './containers'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import tw from 'twin.macro'

export const TextAtLeft = ({title, textMain, tags, image}) => {
	const redBarRef = React.useRef()
	React.useEffect(()=>{
		gsap.registerPlugin(ScrollTrigger)
		gsap.from( redBarRef?.current, {
			duration: 0.8,
			ease: "power4.out",
			x: "100vw",
			scrollTrigger: {
				trigger: redBarRef?.current,
				start: "top 80%",
			},				
		} )
	},[])
	return <>
		<Container fluid id="service-group" tw="h-[33vh] md:h-[25vh] my-32 flex items-center">
			<Container fluid id="sevice-group-text-left" tw="flex flex-nowrap">
				<div tw="w-[50vw] h-[33vh] md:h-[25vh]"></div>
				<div tw="w-[50vw] h-[33vh] md:h-[25vh] ml-32 bg-primary rounded-tl-2xl rounded-bl-2xl">
					<img src={image} tw="h-[90%] w-auto object-cover relative top-1/2 -translate-y-1/2 -translate-x-4 rounded-2xl" ref={redBarRef}/>
				</div>
			</Container>
			<Container absolute center tw="flex">
				<div tw="w-1/2 pl-8 flex flex-col">
					<H2blackDash>{title}</H2blackDash>
					<p tw="mt-4 leading-normal" dangerouslySetInnerHTML={{__html:textMain}}></p>
					<div tw="flex gap-2 mt-2 flex-wrap">
						{ tags ? tags.map( tag => <div tw="text-primary">{tag}</div>) : null }
					</div>
				</div>
			</Container>
		</Container>
	</>
}

export const TextAtRight = ({title, textMain, tags, image}) => { 
	const redBarRef = React.useRef()
	React.useEffect(()=>{
		gsap.registerPlugin(ScrollTrigger)
		gsap.ticker.fps(30)
		gsap.from( redBarRef?.current, {
			duration: 0.8,
			ease: "power4.out",
			x: "-100vw",
			scrollTrigger: {
				trigger: redBarRef?.current,
				start: "top 80%",
			},				
		} )
		return () => { gsap.killTweensOf(redBarRef?.current) }
	},[])
	return <>
		<Container fluid id="service-group" tw="h-[33vh] md:h-[25vh] my-32 flex items-center">
			<Container fluid id="sevice-group-text-right" tw="flex flex-nowrap">
				<div tw="relative w-[50vw] h-[33vh] md:h-[25vh] mr-32 bg-primary rounded-tr-2xl rounded-br-2xl">
					<img src={image} tw="h-[90%] w-auto object-cover absolute top-1/2 -translate-y-1/2 -right-4 rounded-2xl " ref={redBarRef}/>
				</div>
				<div tw="w-[50vw] h-[33vh] md:h-[25vh]"></div>
			</Container>
			<Container absolute center tw="flex">
				<div tw="w-1/2"></div>
				<div tw="w-1/2 pr-8 flex flex-col">
					<H2blackDash>{title}</H2blackDash>
					<p tw="mt-4 leading-normal" dangerouslySetInnerHTML={{__html:textMain}}></p>
					<div tw="flex gap-2 mt-2 flex-wrap">
						{ tags ? tags.map( tag => <div tw="text-primary">{tag}</div>) : null }
					</div>
				</div>
			</Container>
		</Container>
	</>
}


const H2blackDash = ( { children } ) => <div tw="w-fit">
	<h2 tw="text-3xl font-bold text-primary">{children}</h2>
	<div tw="w-[120%] h-2 bg-black -mt-2"></div>
</div>