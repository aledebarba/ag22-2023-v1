import React from 'react'
import tw from 'twin.macro'
import { MainMenu } from '../components/header/nav'
import { Footer } from '../components/footer'
import { _app } from '../utils/functions'

const SobreNos = props => {
  const options = _app.options()
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
  return (
    <>
      <header tw="h-[70vh] w-screen relative overflow-hidden">
        <img src="https://uxdir.com/files/videos/ag22/png/walpaper-about.png" 
          alt="" 
          tw="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover" 
        />
      <div 
        data-desc="texto e circulo"
        css={[
            `
                position: absolute;
                display: flex;
                top: 0;
                width: 100%;
                height: 100%;
                align-items: center;                
            `
        ]}
        >
            <div 
                data-desc="25% da tela"
                css={[
                    `
                      flex-grow: 0;
                      flex-shrink: 1;
                      flex-basis: 25vw;
                    `
                ]}
                >
                    <div tw="w-[40rem] h-[40rem] border-[6rem] border-primary rounded-[90rem]"
                         css={`
                            bottom: 0;
                            margin-left: calc( 20vw - 40rem );
                            flex: 1 1 25vw;
                         `}
                    />
            </div>
            <div 
                data-desc="50% da tela"
                tw="w-[50vw]"
                >
                   <h1 tw="text-white">
                        <span tw="block text-secondary-50 font-light tracking-wide">Nos somos</span>
                        <span tw="text-secondary-50 font-light tracking-wide">a </span>
                        <span tw="text-primary font-semibold tracking-wide">AG22</span> 
                   </h1>
            </div>           
      </div>
      
      

      </header>
    </>
  )
}

const InBrandWeTrust = () => {
  return (
    <>
      <div>
        <video autoPlay muted loop tw="z-30 w-[calc( 24rem + 24vw )] min-w-[300px] h-[auto] object-cover mx-auto -translate-y-[12vh] rounded-2xl shadow-md">
          <source src="https://uxdir.com/files/videos/ag22/webm/V%c3%addeo%20Linhas%20PPG%20Refinish.webm" type="video/webm" />
          <source src="https://uxdir.com/files/videos/ag22/V%c3%addeo%20Linhas%20PPG%20Refinish.mp4" type="video/mp4" />
        </video>
      </div>

       <section
        css={[
          tw`w-fit p-8 bg-transparent mx-auto`,
          tw`sm:(flex items-center rounded-lg overflow-hidden flex-nowrap h-fit mx-auto)`,
          tw`md:(w-[75%])`,
          tw`lg:(w-[66%])`,
          ``
        ]}
      >        
        <div css={[`
            width: 100%;
            height: 30vh;
            background-image: url(https://uxdir.com/files/videos/ag22/png/logo_page_aboutup.svg);
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;            
        `]}>
           
        </div>
        <div tw='bg-transparent w-[100%] gap-8 flex flex-col p-8 items-center'>
          <h2>
            <span tw='text-secondary-800 font-thin '>in brand </span>
            <span tw='text-primary font-semibold '>we trust</span>
          </h2>
          <p tw='text-lg tracking-wide'>
            Nós acreditamos no poder e valor de uma marca, desde a sua concepção
            até a sua presença diária no mercado. Somos apaixonados pelo que
            fazemos e sempre queremos fazer mais. No dia a dia, criamos
            histórias que se conectam com o propósito. Transformar conceitos em
            ações é a nossa especialidade.
          </p>
        </div>
      </section>
    </>
  )
}

const DezAnos = () => {
  return(
    <div tw="w-full p-8 flex-col">
        <div tw="w-full">
          <div tw="bg-primary w-[60vh] h-[30vh] relative overflow-hidden">
            <div tw="
              text-white
              text-[48vh]
              font-bold tracking-tighter
              absolute top-0 left-0                       
              leading-none
              p-0 m-0
              -translate-x-[4.8vh]
              -translate-y-[8vh]
              "            
              >
                10
              </div>
            <div tw="
              text-ag22Black text-8xl
              tracking-widest font-black
              absolute bottom-2 left-8
              ">anos</div>
          </div>
        </div>
        <div texto>
          <div fundo vermelho/>
          <div paragrafo branco />
        </div>
    </div>
  )
  
}
const DezAnos2 = () => {
  return (
    <>
      <section
        css={[
          tw`w-screen bg-transparent overflow-hidden mx-auto h-[50vh] my-[10vh] relative`,
          tw`md:(w-[75%])`,
          tw`lg:(w-[66%])`,
          `
          box-sizing: border-box;
          `
        ]}
      >
        <div 
            css={`
                position: absolute;
                top: 50%;
                left: 50%;
                width: 100%;
                height: 100%;
                background-image: url('https://uxdir.com/files/videos/ag22/png/10anos.svg');
                background-size: 100% 100%;
                background-repeat: no-repeat;
                transform: translateX(-50%) translateY(-50%) scale(1.05);
            `}
        >
        <div tw='bg-transparent w-[36%] min-w-[300px] absolute left-[60%] top-[50%] -translate-y-1/2'>
          <p tw='tracking-wide text-white '>
            Uma década de comunicação. Uma década criando histórias, ações,
            embalagens, marcas e estratégias.
          </p>
          <p tw='tracking-wide text-white '>
            Hoje podemos dizer que a experiência nos ensinou o que fazer, porque
            fazer e como fazer. Alcançamos essa marca de tempo que é só o começo
            da nossa jornada na publicidade e propaganda brasileira. E que
            venham mais décadas!
          </p>
        </div>
        </div>
      </section>
    </>
  )
}

// create components to InBrandWeTrust and DezAnos
