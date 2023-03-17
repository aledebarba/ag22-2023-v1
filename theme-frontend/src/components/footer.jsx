		
import { useState, useEffect } from 'react';
import { ContainerFluidH } from './containers';
import { H2Dash } from './headings';
import tw from 'twin.macro';

export const Footer = () => { 
		
	return <section className="footer" tw={"py-20 bg-gray-100 text-secondary"}>
			<ContainerFluidH>
				<div>logo + redes sociais</div>
				<div>menu</div>
			</ContainerFluidH> 
	</section>
}