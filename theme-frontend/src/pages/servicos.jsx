import tw from 'twin.macro';
import React from 'react';
import apiFetch from "@wordpress/api-fetch";
import { MainMenu } from '../components/header/nav';
import { Footer } from '../components/footer';
import { HeroPageHeader } from '../components/heroheader';
import { getTagsFromText } from '../components/get-tags-from-text';
import { TextAtLeft, TextAtRight } from '../components/service-page-texts'

const Servicos = ( props ) => {

	const[ ourServices, setOurServices ] = React.useState( [] );
	React.useEffect(() => {
		apiFetch({ path: 'database/v1/servicos/' }).then(data => {
			setOurServices( data )
		})
	}, [])

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

	return <>		
			{ position == "left" 
				? <TextAtLeft  title={title} textMain={textMain} tags={tags} image={image}/> 
				: <TextAtRight title={title} textMain={textMain} tags={tags} image={image}/>
			}
	</>
}
