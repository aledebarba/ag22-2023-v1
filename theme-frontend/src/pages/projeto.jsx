import React from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

const ProjetoPage = ( props ) => {
	
	const [searchParams] = useSearchParams();
	let location = useLocation();
	let pageSlug = location.pathname.split('/').filter( ( item ) => item !== '' ).pop()

	return <>
		<div className="projeto">
			<h1>Solicitada página de projeto { pageSlug } </h1>
		</div>
	</> };

export default ProjetoPage;
