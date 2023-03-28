import React from 'react';
import tw from 'twin.macro';
import { MainMenu } from '../components/header/nav';
import { Footer } from '../components/footer';
import { HeroPageHeader } from '../components/heroheader';
import { Servico } from '../components/servicos.jsx';
import apiFetch from "@wordpress/api-fetch";

const Servicos = ( props ) => {

	const[ ourServices, setOurServices ] = React.useState( [] );

	React.useEffect(() => {
		apiFetch({ path: 'database/v1/servicos/' }).then(data => {
			setOurServices( data )
			console.log( data )
		})
	}, [])

return (
	<main tw="w-screen min-h-[200vh] relative">
		<MainMenu />
		<HeroPageHeader />
		{ ourServices.map( ( item, index ) => 
			<Servico 
				position={ index%2===0 ? 'left' : null }
				title={ item.title }
				text={ item.data.desc } 				
			/>
		)}		
		<Footer />
	</main>
)};

export default Servicos;
