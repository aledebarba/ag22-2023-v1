import React from 'react';
import { useSearchParams } from 'react-router-dom';

const ProjetosPage = ( props ) => {
	
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id');
	console.log( id )

return (
	<>
		<div className="projetos">
			<h1>Página de Projetos</h1>
		</div>
	</>
)};

export default ProjetosPage;
