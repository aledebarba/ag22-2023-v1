import React from 'react'
import tw, { theme } from 'twin.macro'
import { MainMenu } from '../components/header/nav'
import { Container } from '../components/containers'
import { Footer } from '../components/footer'
import { _app } from '../utils/functions'
import logoDez, { ReactComponent as LogoDez } from './assets/dezanos.svg'
import { BigRedCircle } from "../components/circles";
import { SectionEnding } from "../components/SectionEnding";
import { useRect } from '../components/utils'

const SobreNos = props => {
  const options = _app.options()  
  console.log( _app )
  const ref = React.useRef()

  return (
    <main tw='w-screen min-h-[200vh] relative' ref={ref}>
      <MainMenu />
      <AbouUsHeroHeader />
      <InBrandWeTrust />
      <DezAnos />
      <Footer />
    </main>
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
  return(
    <Container fluid center tw="box-border relative left-1/2 -translate-x-1/2">
      <Container tw="
        grid grid-rows-2 mb-40 gap-8 
        sm:( grid-cols-2 grid-rows-1 items-center 
             bg-primary h-fit 
             overflow-hidden 
             rounded-2xl box-border 
        shadow-[0_0_1px_25px_white] )
      ">
      <div 
        tw="
          w-full h-full relative 
          md:(overflow-visible)
          " 
      >
        <LogoDez
          tw="
            w-full h-full            
            md:(border-none)"
          css={`
            position: relative;
            transform: scale(1.08);
          `}
        />
      </div>
      <p tw='text-lg md:text-sm text-secondary-50 tracking-wide'>
        Hoje podemos dizer que a experiência nos ensinou o que fazer, porque fazer e como fazer. Alcançamos essa marca de tempo que é só o começo da nossa jornada na publicidade e propaganda brasileira. E que venham mais décadas!
      </p>
      </Container>
    </Container>
  )
  
}
