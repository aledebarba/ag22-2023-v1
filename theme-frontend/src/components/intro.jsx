import tw from 'twin.macro';
import { Container } from './containers';

export const Intro = () => <Container>
			<section className="intro" tw={"py-20 bg-white grid grid-cols-12 gap-4 "}>
				<div tw="col-start-1 col-span-5 row-span-4 relative">
                    <div tw="absolute top-0 left-0 h-full w-[50vw] bg-secondary-100 z-0 translate-x-[-55%] rounded-2xl"></div>
                </div>
                <div tw="col-start-6 col-span-7" >
					<h2 tw="mt-8">
						<span tw="font-thin">in brand</span><span tw={"text-primary font-black"}> we trust</span>
					</h2>

					<p>
					Sim, nós acreditamos. Nós acreditamos porque somos um time que ama o que faz e acima de tudo acredita que uma marca, um produto, uma empresa pode e deve ser algo mais do que seu preço em si, deve ser algo que possua valor.

					Comunicar vai além de dizer palavras, frases, comunicados.
					Como você é recebido? Como sua mensagem chega?
					Como é sua presença no mercado? Na vida do seu target?
                    </p>

                    <p tw="mt-4">
					Comunicar é saber como chegar.

					Um brainstorm bem feito, uma ação bem planejada, uma marca que ganha vida e voz. É no que somos especialistas.

					Sim nós acreditamos! E você?
					</p>
					<p>
						Comunicar vai além de dizer palavras, frases, comunicados.
						Como você é recebido? Como sua mensagem chega?
						Como é sua presença no mercado? Na vida do seu target?
					</p>

					<h4>
						Comunicar é saber como chegar.
					</h4>

					<p>
						Um brainstorm bem feito, uma ação bem planejada, uma marca que ganha vida e voz. É no que somos especialistas.
					</p>

					<h5 tw="my-8">
                        <span tw={"text-primary font-bold"}>Sim nós acreditamos!&nbsp;</span>
                        <span>E você?</span> 
                    </h5>                   

				</div>

                <div className='col-start-6 col-span-3'>
                        <h4 tw={"text-h4 font-bold text-primary leading-10"}>+10 anos</h4>
                        <h6 tw={"text-h6 text-secondary font-normal"}>no mercado</h6>
                    </div>

                    <div className='col-start-9 col-span-3'>
                        <h4 tw={"text-h4 font-bold text-primary leading-10"}>+50 projetos</h4>
                        <h6 tw={"text-h6 text-secondary font-normal"}>de embalagens, presente na América do Sul</h6>
                    </div>

                    <div className='col-start-6 col-span-3'>
                        <h4 tw={"text-h4 font-bold text-primary leading-10"}>+150 marcas</h4>
                        <h6 tw={"text-h6 text-secondary font-normal"}>criadas e ativas pelo mundo</h6>
                    </div>
                    
                    <div className='col-start-9 col-span-3'>
                        <h4 tw={"text-h4 font-bold text-primary leading-10"}>+1000 horas</h4>
                        <h6 tw={"text-h6 text-secondary font-normal"}>de storytelling criadas</h6>
                    </div>
                    
			</section>
        </Container>