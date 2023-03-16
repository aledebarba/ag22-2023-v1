import tw from 'twin.macro'
import apiFetch from '@wordpress/api-fetch'
import { useEffect, useState } from 'react'

const Sandbox = () => {

    const [ projeto, setData ] = useState( null )
    
    useEffect( ()=>{

        apiFetch( { path: 'wp/v2/pages?slug=home' } )
        .then( data => {
            const pageElements = document.createElement( 'div' )
            pageElements.innerHTML = data[0].content.rendered
            const info = JSON.parse( pageElements.querySelector('pre').innerText );
            setData( info )

        } )
        .catch( error => {
            console.log( error )
        } )


    }, [] )

    return (
        <Content css={`

            opacity: 1;
            font-size: 5rem;
            animation: fadein 3s infinite linear;

            /* @keyframes fadein {
                0%   {opacity: 0; transform: scale(0.5); }
                50%  {opacity: 1; transform: scale(2); }
                100%  {opacity: 0; transform: scale(3);}
            } */
        `}>   
        { projeto  && <>
            <Title>
                { projeto.title }
            </Title>
        </> }
        
        </Content>
    )
}

const Title = tw.h1`
    text-white
`
const Content = tw.div`
    bg-ag22Black
    h-screen
    w-[95vw]
    flex
    flex-col
    items-center
    justify-center
    gap-8
    px-16
    mx-auto
    text-4xl
    text-pink-500
    rounded-[100rem]
`

export default Sandbox