import React from 'react';
import { useSearchParams } from 'react-router-dom';

const ContentPage = ( props ) => {
const [searchParams] = useSearchParams();
const id = searchParams.get('id');

return (
	<>
		<div className="content-page">
			<h1>Content Page</h1>
		</div>
	</>
)};

export default ContentPage;
