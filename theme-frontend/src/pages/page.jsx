import React from 'react';
import tw from 'twin.macro'
import apiFetch from '@wordpress/api-fetch';
import styled from 'styled-components';

const SinglePage = ({slug}) => { 
	
	const [pageContent, setPageContent] = React.useState( <p>Loading content...</p> );
	const [page, setPage] = React.useState(null);
	React.useEffect(()=>{
		apiFetch( { path: '/wp/v2/pages?slug='+slug } ).then( ( pageContent ) => {
			setPageContent( pageContent[0].content.rendered );
			setPage( pageContent[0] )
			console.log( pageContent[0] )
		} );
	}, [])
	
	return(
	<StyledSinglePage>
		<div className="single-page-page">
			<div dangerouslySetInnerHTML={{ __html: pageContent }} />
		</div>
	</StyledSinglePage>
)
};

const StyledSinglePage = styled.div`
	${tw`
	min-h-screen
	bg-[#f1efe8]
	p-8`}

	width: clamp( 300px, 80%, 1200px );
	margin: 0 auto;

	h1, h2, h3, h4, h5, h6 {
		font-weight: bold;
		margin: 2rem 0 0 0;		
	}

	h1 { ${tw`text-5xl`} }
	h2 { ${tw`text-4xl`} }
	h3 { ${tw`text-3xl`} }
	h4 { ${tw`text-2xl`} }
	h5 { ${tw`text-xl`} }
	h6 { ${tw`text-lg`} }
	
	p {
		${tw`text-[#0a0a0a] my-2`}
	}
`;

export default SinglePage;
