import { useState, useEffect } from 'react';
import { Buttonx } from './button';
import { Card, CardTitle, CardText, CardBox, ServiceListItem, BoxServiceList, ServiceTitle, ServiceText, ServiceImg } from './servicos-cards';
import { Container } from './containers';
import { H2Dash } from './headings';
import apiFetch from '@wordpress/api-fetch';
import { HashLink as Link } from 'react-router-hash-link';
import tw from 'twin.macro';
import { getTagsFromText } from "./get-tags-from-text"

export const Servicos = () => { 
		
		const [ servicos, setServicos ] = useState( [] );
		
		useState(()=>{
			apiFetch({ path: 'database/v1/servicos' })
			.then( (data) => {

				setServicos( data )
			} )
		}, [])
			
			
		return <Container fluid id="servicos" tw="bg-secondary-50 py-14">
		 	<Container id="servicos">
				<H2Dash>Serviços</H2Dash>
				<CardBox>
					{ servicos && servicos.map( (servico) => {
						const [ tags, textMain ] = getTagsFromText( servico.data.desc )
						return <Card>
							<CardTitle>{servico.title}</CardTitle>
							<CardText><div dangerouslySetInnerHTML={ {__html: textMain} }/></CardText>
						</Card>
						})}						
				</CardBox>
			<Link smooth to="/servicos#top"><Buttonx outline center tw="mx-8 md:(mx-auto)">Conheça mais sobre nosso serviços</Buttonx></Link>
		</Container> 
	</Container>
}

export const ServiceLi = () => {
	const [ servicos, setServicos ] = useState( [] );
		useState(()=>{
			apiFetch({ path: 'database/v1/servicos' })
				.then( (data) => {
					setServicos( data )
				} )
		}, [])

		return <section className="servicos" tw={"py-20 bg-gray-100 text-secondary"}>
                <BoxServiceList>
                    { servicos && servicos.map( (servico) => {
                        return <ServiceListItem>
							<div className='servicecontent' tw={"basis-4/12"}>
								<ServiceTitle>{servico.title}</ServiceTitle>
                            <ServiceText>{servico.data.desc}</ServiceText>
							</div>
                            
							<ServiceImg>
							</ServiceImg>
                        </ServiceListItem>
						
                        })}                        
                </BoxServiceList>
    </section>
}

export const Servico = ( { title, text, position } ) => {

	const h = () => (((0.5/(window.innerWidth / 320)) * 25)+20);
	const [ height, setHeight ] = React.useState( h()+"vh" );
	const [ tags, setTags ] = React.useState( [] );
	const [ mainText, setMainText ] = React.useState( "" );

	React.useEffect(()=>{
		window.addEventListener('resize', () => {
			setHeight( h()+"vh" )
		})

		let textArray = text.split(' ')
		let tagsArray = []
		let textMain = ''
		textArray.forEach( (word) => {
			if( word[0] == '#' ) {
				tagsArray.push( word )
			} else if( word[0] !== '#' && word[0] !== ' ' ) {
				textMain = textMain + word + ' '
			} else if( word[0] === ' ' ) {
				textMain = textMain + word 
			}
		})

		setMainText( textMain )
		setTags( tagsArray )
			
	},[])

	return <>
		
			<div style={{ height: height }} tw={"w-full my-[20vh] overflow-visible relative first:(mt-0!)"}>
				
				<div style={{ height: height }} tw={"w-full flex items-center overflow-visible absolute top-0 left-0 gap-8"}>
					<div style={{ height: height }}
						css={[
							tw`w-[20vw] bg-primary sm:(w-[30vw]) md:(w-[40vw]) lg:(w-[50vw])`,	
							position === 'left' ? tw`order-1 rounded-tr-2xl rounded-br-2xl` : tw`order-3 rounded-tl-2xl rounded-bl-2xl`,
						]}/>

					<div style={{ height: height }} tw={"w-[80vw] sm:(w-[70vw]) md:(w-[60vw]) lg:(w-[50vw]) bg-transparent order-2"}></div>
				</div>
				

				<div style={{ height: height }} tw={"w-full flex items-center overflow-visible absolute top-0 left-0 gap-8"}>
					<div style={{ height: height }}
						 tw={"w-[20vw] sm:(w-[30vw]) md:(w-[40vw]) lg:(w-[50vw]) bg-transparent order-2"}></div>
					<div style={{ height: height }}
						 css={[
							tw`w-[80vw] sm:(w-[70vw]) md:(w-[60vw]) lg:(w-[50vw]) bg-transparent`,	
							position === 'left' ? tw`pr-8 order-3` : tw`pr-8 order-1 relative translate-x-[4vw] sm:(translate-x-[15vw]) md:(translate-x-[20vw]) lg:(translate-x-[25vw])`,
						]}>
						<h2 css="font-size: clamp(2rem, 2.5vw, 2.8rem);" tw="text-primary border-b-8 border-b-secondary-900 w-fit -translate-y-3 pb-2">{title}</h2>
						<p tw="w-[50%] min-w-[240px] leading-tight" css="font-size: clamp(1rem, 1.5vw, 1.1rem);">
							<div dangerouslySetInnerHTML={{__html:mainText}}/>
						</p>
						<div tw="flex gap-1 max-w-[60vw] flex-wrap mt-2">
						{ tags && tags.map( (tag) => {
							return <span tw="text-primary text-sm font-bold">{tag}</span>
						} ) }
						</div>
					</div>
				</div>				
			</div>
		
	</>
}