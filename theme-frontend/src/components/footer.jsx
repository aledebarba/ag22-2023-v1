		
import { ReactComponent as Logo } from "../../assets/images/brand-color-negative.svg";
import { HashLink as Link } from "react-router-hash-link";
import { useState, useEffect } from 'react';
import { Icon } from "@iconify/react"
import {_app} from '../utils/functions';
import apiFetch from '@wordpress/api-fetch';
import tw from 'twin.macro';

export const Footer = ({copyright="", devby=""}) => { 

		const [ contatos, setContatos ] = useState();
		const options = _app.options();

		useEffect(()=>{
			apiFetch({ path: 'database/v1/contatos' })
				.then( (data) => {
					const inOrder =  ( data, order ) => order.map( item => {
						let id = item.id;
						let found = data.find( item => item.id === id );
						return( found )
					})
					setContatos( inOrder( data, options.socialOnFooter ) );
				} )
		}, [])

	return (
		<section className="footer" tw={"py-28 bg-secondary-900 text-secondary relative min-h-[33vh] w-screen p-16 text-secondary-50 "}>
			<div 
				tw="grid grid-cols-8 gap-6 w-[60vw] mx-auto "			
				>
				<div tw="col-start-1 col-span-2">
					<div tw="flex flex-col gap-3 w-full">
						<Logo />
						<h5 tw="text-secondary-50 border-b-4 border-b-primary leading-tight tracking-wider font-semibold">
							Nos siga nas<br/>redes sociais
						</h5>
						<div tw="flex flex-nowrap gap-4 text-3xl text-primary">
							{ contatos 
								? contatos.map( ( contato ) => {
									return <a 
										href={ contato.data.link }
										target="_blank"
										noreferrer
										alt={ contato.title }
										title={ contato.title }
									>
										<Icon icon={ contato.data.icone } />										
									</a>
								})
								: <span>Carregando redes...</span>
							}
						</div>
					</div>
				</div>
				<div tw="col-start-5 col-span-2 w-2/3">
					<ul>
						<Li><Link smooth to="/sobre#top">Quem Somos</Link></Li>
						<Li><Link smooth to="/servicos#top">Serviços</Link></Li>
						<Li><Link smooth to="/#cases">Cases</Link></Li>
					</ul>
					<div className="pt-8"><small css="white-space: nowrap;">Copyright 2023 AG22. DevBy AG22</small></div>
				</div>
				<div tw="col-start-7 col-span-2 w-2/3">
					<ul>
						<Li><Link smooth to="/#clientes">Clientes</Link></Li>
						<Li><Link smooth to="/#vagas">Trabalhe conosco</Link></Li>
						<Li><Link smooth to="/#contato">Contatos</Link></Li>
					</ul>								
					<div className="pt-8"><small css="white-space: nowrap; visibility: hidden;">{copyright}&nbsp;{devby}</small></div>
				</div>
			</div>		
		</section>
	)
}

const Li = ({ children }) => {
	return <li tw="py-2 border-b-2 border-primary">
		{children}
	</li>
}