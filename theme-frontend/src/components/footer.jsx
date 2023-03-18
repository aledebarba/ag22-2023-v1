		
import { useState, useEffect } from 'react';
import { ContainerFluidH } from './containers';
import { H2Dash } from './headings';
import tw from 'twin.macro';

export const Footer = () => { 
		
	return <section className="footer" tw={"pt-0 pb-28 bg-secondary-900 text-secondary relative"}>
			<ContainerFluidH>
			<div css={
				`
					box-sizing: border-box;
					position: absolute;
					margin-top: 1rem;
					height: 40px;
					left: 0px;
					width: 100%;
					background-color: var(--primary);
					z-index: 4;
					display: flex;
					justify-content: center;
					gap: 1rem;            
				`}
			>
				<div tw='w-1/4 border-r-[16px] border-white'/>
				<div tw='w-1/4 border-l-[16px] border-white'/>
			</div>
				<div>logo + redes sociais</div>
				<div>menu</div>
			</ContainerFluidH> 
	</section>
}