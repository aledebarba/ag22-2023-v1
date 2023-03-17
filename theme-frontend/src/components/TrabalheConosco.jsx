import { useState, useEffect } from 'react';
import { ContainerFluidH } from './containers';
import { H2Dash } from './headings';
import tw from 'twin.macro';

export const TrabalheConosco = () => { 
		
	return <section className="trabalhe__conosco" tw={"py-20 bg-gray-100 text-secondary"}>
			<ContainerFluidH>
				<H2Dash>Trabalhe Conosco</H2Dash>
			</ContainerFluidH> 
	</section>
}