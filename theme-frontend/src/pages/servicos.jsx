import React from 'react';
import { useSearchParams } from 'react-router-dom';
import tw from 'twin.macro';
import { PageMenu } from '../components/header/nav';
import { Footer } from '../components/footer';
import { HeroPageHeader } from '../components/heroheader';
import { ServiceLi } from '../components/servicos.jsx';

const Servicos = ( props ) => {
	
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id');
	
	const wrapper = React.useRef(null);
	const content = React.useRef(null);
	
	const ref = React.useRef(null);
	React.useEffect(() => {
		ref.current.scrollIntoView()
	}, []);

return (
	<main tw="w-screen min-h-[200vh] relative" ref={ref}>
		<PageMenu />
		<div ref={content} id="smooth-content">
			<HeroPageHeader />
			<ServiceLi/>
			<Footer />
		</div>
	</main>
)};

export default Servicos;
