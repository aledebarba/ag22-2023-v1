import React from 'react';
import tw from 'twin.macro'
import apiFetch from '@wordpress/api-fetch';
import styled from 'styled-components';

/**
 * This function is used to render the single page content WHEN the page does not have a JSX file to render it.
 * Notes: 
 * 			- This function is called by _app.jsx to create routes for all pages that do not have a JSX file.
 * 			- Probably the only motive to even touch this file is to add custom styling to the page.
 * @name SinglePage
 * @param {string} slug
 * @returns jsx
 * 
 */
const SinglePage = ({slug}) => { 
	
	const [pageContent, setPageContent] = React.useState( <p>Loading content...</p> );
	const [page, setPage] = React.useState(null);
	React.useEffect(()=>{
		apiFetch( { path: '/wp/v2/pages?slug='+slug } ).then( ( pageContent ) => {
			setPageContent( pageContent[0].content.rendered );
			setPage( pageContent[0] )
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

// basic styling system for the page
const StyledSinglePage = styled.div`
	${tw`
		min-h-screen
		bg-[#f1efe8]
		p-8
	`}

	width: clamp( 300px, 80%, 1200px );
	margin: 0 auto;

	h1, h2, h3, h4, h5, h6 {
		font-weight: bold;
		margin: 2rem 0 0 0;		
	}

	h1 {  
		${tw`text-4xl`}
	}
	
	h2 {
		${tw`text-3xl`}
	}

	h3 {
		${tw`text-2xl`}
	}

	h4 {
		${tw`text-xl`}
	}

	h5 {
		${tw`text-lg`}
	}

	h6 {
		${tw`text-base`}
	}

	p {
		${tw`text-[#0a0a0a] my-2`}
	}

	bold {
		${tw`font-bold`}		
	}
`;

export default SinglePage;
