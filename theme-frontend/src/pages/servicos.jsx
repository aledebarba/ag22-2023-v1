import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Servicos = ( props ) => {
	
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id');
	console.log( id )

return (
	<>
		<div className="servicos">
			<h1>Pagina de servicos</h1>
		</div>
	</>
)};

export default Servicos;
