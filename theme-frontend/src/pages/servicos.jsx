import tw from 'twin.macro';
import React from 'react';
import { MainMenu } from '../components/header/nav';
import { Footer } from '../components/footer';
import { HeroPageHeader } from '../components/heroheader';
import { getTagsFromText } from '../components/get-tags-from-text';
import { TextAtLeft, TextAtRight, MobileLeft, MobileRight } from '../components/service-page-texts'
import { _app } from '../utils/functions'
import { useScreenSize } from '../components/utils';

const Servicos = ( props ) => {

	const list = _app.options().ServicesList;
	const[ ourServices, setOurServices ] = React.useState( list );	
	console.log( 'verificação de reset ')
	var global_exposed_app = _app
	
return (
	<main tw="w-screen min-h-[200vh] relative">
		<MainMenu />
		<HeroPageHeader />
		<div id="lista--de--serviços" tw="my-8">
			{ ourServices.map( ( item, index ) => 
				<Servico 
					position={ index%2===0 ? 'left' : null }
					title={ item.title }
					text={ item.data.desc } 	
					image={ item.data.image }			
				/>
			)}		
		</div>
		<Footer />
	</main>
)};

export default Servicos;

const Servico = ( { title, text, position, image } ) => {

	const [ tags, textMain ] = getTagsFromText( text )
	const { width, height } = useScreenSize();
	const isMobile = width < 768;
	
	if (!isMobile) { return <>		
			{ 
				position == "left" 
				? <TextAtLeft  title={title} textMain={textMain} tags={tags} image={image}/> 
				: <TextAtRight title={title} textMain={textMain} tags={tags} image={image}/>
			}
	</> }

	return <>
		{
			position == "left"
			? <MobileLeft  title={title} textMain={textMain} tags={tags} image={image}/>
			: <MobileRight title={title} textMain={textMain} tags={tags} image={image}/>
		}
	</>
}
