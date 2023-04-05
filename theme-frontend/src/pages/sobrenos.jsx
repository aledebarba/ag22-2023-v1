import tw, { theme } from 'twin.macro'
import React from 'react'
import { _app } from '../utils/functions'
import { Footer } from '../components/footer'
import { useRect } from '../components/utils'
import { MainMenu } from '../components/header/nav'
import { Container } from '../components/containers'
import { BigRedCircle } from "../components/circles";
import { SectionEnding } from "../components/SectionEnding";
import { ReactComponent as LogoDez } from './assets/dez-anos.svg'

const SobreNos = props => {
  const options = _app.options()  
  console.log( _app )
  const ref = React.useRef()

  return (
    <Container fluid tw="overflow-hidden" id="clintes">
      <MainMenu />
      <AbouUsHeroHeader />
      <InBrandWeTrust />
      <DezAnos />
      <Footer />
    </Container>
  )
}

export default SobreNos

const AbouUsHeroHeader = () => {

  const titleRef = React.useRef()
  const titleRect = useRect(titleRef);

  return <>
      <Container fluid tw="h-[70vh] w-screen relative overflow-hidden">
        <img 
          src="https://uxdir.com/files/videos/ag22/png/walpaper-about.png" 
          tw="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover" 
          alt="" 
        />
        <BigRedCircle style={{ position: "absolute", top: "-25vh", left: titleRect?.left - window.innerHeight }} />
        <Container absolute center tw="h-[70vh] px-8 flex items-center">
            <h1 tw="text-white" ref={titleRef}>
                <span tw="block text-secondary-50 font-light tracking-wide">Nos somos</span>
                <span tw="text-secondary-50 font-light tracking-wide">a </span>
                <span tw="text-primary font-semibold tracking-wide">AG22</span> 
            </h1>
        </Container>      
    </Container>
    <SectionEnding/>
    </>
}

const InBrandWeTrust = () => {
  console.log( _app.options() )
  return (
    <>
      <div tw="relative">
        <video autoPlay muted loop controls 
          tw="scale-90 w-[calc( 24rem + 24vw )] min-w-[280px] h-[auto] object-cover mx-auto -translate-y-[12vh] rounded-2xl md:(scale-100)"           
        >
          <source src={_app.options().aboutMovie} type="video/webm" />
          <source src="https://uxdir.com/files/videos/ag22/V%c3%addeo%20Linhas%20PPG%20Refinish.mp4" type="video/mp4" />
        </video>
        <div id="video-about-us--shadow"
          tw="w-[75vw] -top-[26vh] sm:w-[65vw] md:(w-[calc(20rem+20vw)] -top-[24vh])"
          css={`
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            height: 10vh;
            box-shadow: 0 35px 30px -1px red;
            z-index: -1;
          `}
        />
      </div>

       <Container tw="relative -top-[12vh] flex flex-col px-8 md:(flex flex-row items-center)"
        >        
        <div id="logo-about-us"     
          //TODO: fix-image-loading from external server               
              tw="w-full h-[15vh] bg-no-repeat bg-center bg-contain [background-image: url(https://uxdir.com/files/videos/ag22/png/logo_page_aboutup.svg)] md:(h-[35vh])" 
          />           
        <div tw='bg-transparent w-[100%] gap-8 flex flex-col py-8 items-start md:p-8'>
          <h2 tw="hidden md:(flex flex-col)">
            <span tw='text-secondary-800 font-thin '>in brand </span>
            <span tw='text-primary font-semibold '>we trust</span>
          </h2>
          <h1 tw="flex flex-col md:(hidden)">
            <span tw='text-secondary-800 font-thin '>in brand </span>
            <span tw='text-primary font-semibold '>we trust</span>
          </h1>
          <p tw='text-lg md:text-sm text-secondary-900 tracking-wide'>
            Nós acreditamos no poder e valor de uma marca, desde a sua concepção
            até a sua presença diária no mercado. Somos apaixonados pelo que
            fazemos e sempre queremos fazer mais. No dia a dia, criamos
            histórias que se conectam com o propósito. Transformar conceitos em
            ações é a nossa especialidade.
          </p>
        </div>
      </Container>
    </>
  )
}

const DezAnos = () => {
  return <>
      <Container fluid id="dez-anos-wrapper" tw="flex justify-center px-4">
        
        <Container 
            id="dez-anos-content"  
            tw="overflow-hidden mx-auto my-20 md:(flex items-center bg-primary rounded-lg overflow-hidden max-w-4xl pl-0 pr-8 justify-between)"
            css={`outline: 10px solid white; outline-offset: -3px;`}
            >
          <LogoDez/>
          <p tw="text-black ml-2 text-lg my-8 px-8 md:(flex-[1 0 50%] my-0 text-sm px-8 text-white)">
            Hoje podemos dizer que a experiência nos ensinou o que fazer, porque fazer e como fazer. 
            Alcançamos essa marca de tempo que é só o começo da nossa jornada 
            na publicidade e propaganda brasileira. 
            E que venham mais décadas!
          </p>
      </Container>
    </Container>
</>  
}
