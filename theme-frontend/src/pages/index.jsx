import tw from 'twin.macro';

const Index = () => {
    
    return (
		<main>
			<Header>
				<Title>Wellcome</Title>
			</Header>

		</main>
    );
};


const Header = tw.header`
	w-screen
	min-h-screen
	overflow-hidden	
	bg-gradient-to-r
	from-blue-400
	to-blue-600
	pt-[30vh]
`

const Title = tw.h1`
	text-5xl
	text-center
	text-white
`
export default Index;
