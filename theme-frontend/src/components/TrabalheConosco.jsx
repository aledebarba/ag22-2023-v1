import { ContainerFluidH, Container } from './containers';
import { H2Dash } from './headings';
import { Buttonx } from './button';
import tw from 'twin.macro';

export const TrabalheConosco = () => { 
		
	return <section tw={"py-28 bg-white text-secondary "}>
			<ContainerFluidH>
				<div tw="h-fit">
				<H2Dash>Trabalhe Conosco</H2Dash>
				<div tw="mt-8 grid grid-cols-8 gap-4 justify-between outline-red-500">
					<div tw="col-span-3">
						<h2>
							<span tw="block text-secondary font-thin">Bora</span>
							<span tw="block text-primary font-bold">trabalhar</span>
							<span tw="text-secondary font-thin">na&nbsp;</span>
							<span tw="text-primary font-bold">AG?</span>
						</h2>
					</div>
					<div tw="col-span-5">
						<p>
						Acreditamos que cada um deve ser reconhecido por aquilo que é, mesmo porque no final das contas todos somos seres humanos.
						</p>
						<p tw="my-8">
						Envie seu currículo para nosso banco de talentos:	
						</p>
						<Buttonx link primary>
							<div onClick={()=>{ navigator.clipboard.writeText("email@eamil.com"); console.log("copiado")	}}>
								Enviar Curriculo
							</div>
						</Buttonx>
					</div>
				</div>
				</div>
			</ContainerFluidH> 
	</section>
}