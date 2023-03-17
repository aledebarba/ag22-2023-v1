
import { Button } from './button';
import { Card, CardTitle, CardText, CardBox } from './cards';
import { Container } from './containers';


	export const Servicos = () => <Container>
		<section className="servicos" tw={"py-20 bg-gray-100 text-secondary"}>
		<div tw={"lg:w-10/12 md:w-11/12 mx-auto gap-16 flex flex-col items-center"}>
			<h1 tw={"text-h1 font-bold text-center"}>Serviços</h1>
			<CardBox>
				<Card>
					<CardTitle>Branding</CardTitle>
					<CardText>
						Você compra um produto pelo que ele faz, você escolhe uma marca pelo que ela significa. Produtos podem ser copiados, marcas são únicas.
					</CardText>
				</Card>

				<Card>
					<CardTitle>Social Media</CardTitle>
					<CardText>
						Falamos fluentemente a língua do algoritmo. Sabemos chegar e como chegar.
						Temos resultados quali e quantitativos.
						Quer bons leads? Fale com a gente
					</CardText>
				</Card>

				<Card>
					<CardTitle>Planning</CardTitle>
					<CardText>
						Saber o quê, porque, quando e como são os pilares de um bom planejamento. Entender para atender. Prever e criar para ser desejado.
					</CardText>
				</Card>

				<Card>
					<CardTitle>Packing</CardTitle>
					<CardText>
						Um produto excelente precisa de uma "roupa" a sua altura. Desenvolvemos embalagens com um simples objetivo: evidenciar seu produto na gôndola.
					</CardText>
				</Card>
			</CardBox>

			<Button>Conheça mais sobre nosso serviços</Button>
		</div>
		</section>
</Container>
