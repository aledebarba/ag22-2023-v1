import { HashLink as Link } from 'react-router-hash-link'
import { Buttonx } from './button'
import { Icon } from '@iconify/react'
import { Container } from './containers'
import { useRect } from './utils'
import { BigRedCircle } from './circles'
import tw, { styled } from 'twin.macro'
import { SectionEnding } from './SectionEnding'

export const HeroHeader = ( props )=> {
 
    const bg = props?.backgroundImage ? props.backgroundImage : 'https://uxdir.com/files/videos/ag22/png/header-image-1x.png';
    
    const textRef = React.useRef()
    const textRect = useRect(textRef)

  return (
   <Container full-screen fluid style={{ backgroundImage: `url(${bg})`}} tw="[background-position:85% bottom] bg-cover">
        <Container full-screen fluid>
            <BigRedCircle style={{ position: "relative", left: textRect?.left - window.innerHeight, top: window.innerHeight/-3.5 }} />
        </Container>

        <Container tw="absolute top-[12vh] md:(top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2)">
          <div tw="w-full pl-8" ref={textRef}>
              <h1
                css={`
                  font-size: clamp(1.8rem, 5vw, 4rem);
                  line-height: 1.2;
                  span {
                    display: block;
                    blank-space: nowrap;
                  }
                `}
              >
                <span tw='text-secondary-50 font-thin'>Marcas Reais</span>
                <span tw='text-primary font-semibold [text-shadow: 2px_2px_4px_#0008] sm:([text-shadow:none])'>
                  Para Clientes Reais
                </span>
                <span tw='text-secondary-50 font-thin'>Com Resultados Reais</span>
              </h1>
              <p tw='text-secondary-50 text-[clamp(12px,1.2vw,2.5rem)] pr-8 md:(w-1/2 pr-2)'>
                Queremos fazer sua marca conquistar o mundo. Mas para isso acontecer
                você precisa saber: se seu cliente vai parar para te ouvir, é melhor
                você ter algo bom para dizer.
              </p>
              <p tw='text-secondary-50 text-[clamp(12px,1.2vw,2.5rem)] pr-8 md:(w-1/2 pr-2)'>
                Faz sentido, não é?
              </p>
                <Link smooth to='#contato'>
                  <Buttonx outline primary>
                    Fale agora com a gente
                  </Buttonx>
                </Link>
          </div>
        </Container>

        <div tw="hidden
                 md:(flex absolute text-white bottom-[88px] text-xl left-1/2 -translate-x-1/2 items-center justify-center gap-4)">
            <Icon icon='bi:mouse' tw='text-4xl' />
            Role para baixo
        </div>

      <SectionEnding />
    </Container>
  )
}

export const HeroPageHeader = () => {
  
  const titleRef = React.useRef()
  const titleRect = useRect(titleRef)

  
  return (
  <header tw='h-[55vh] w-screen overflow-hidden relative border-b-2 border-b-secondary-100 drop-shadow-md'>
    <div
      css={`
        z-index: 1;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: transparent;

        background-image: url('https://ik.imagekit.io/balaban/services-page-bg.jpg?updatedAt=1679540743668');

        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      `}
    />

    <Container id='header-background' tw='absolute top-0 left-0 z-[2]'>
      <BigRedCircle style={{ position: "absolute", top: "-25vh", left: titleRect?.left - window.innerHeight }}/>
    </Container>
    
    <Container absolute center tw="top-0 h-[50vh] z-20">
      <h1 tw="text-white box-content relative top-1/2 -translate-y-1/2 pl-8" ref={titleRef}>
        <span tw={'block font-thin'}>Nossos</span>
        <span tw={'text-primary block font-bold'}>Serviços</span>
      </h1>
    </Container>
    <SectionEnding />
  </header>
)}
