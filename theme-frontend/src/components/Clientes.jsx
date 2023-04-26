import tw from 'twin.macro'
import apiFetch from '@wordpress/api-fetch'
import { _app } from '../utils/functions'
import { H2Dash } from './headings'
import { Container, ContainerFluidH } from './containers'
import { useState, useEffect } from 'react'

export const Clientes = ( { brandsList } ) => {
	return <div id="cases" tw="relative w-screen min-h-screen h-fit overflow-hidden">
		<Container data-info="background-container" tw="absolute w-screen min-h-screen h-full top-0 left-0 overflow-hidden blur-[100px] bg-[#F5F3F5]">
			<AnimatedCircle bottom left />
			<AnimatedCircle top right />
    </Container>
    <Container data-info="brands-container" tw="min-h-screen pt-20">
        <H2Dash>Cases</H2Dash>
        <div 
          data-info="brands-grid"
          tw="grid grid-cols-2 gap-5 px-8 md:(grid-cols-4) py-10"
          >
          {brandsList && brandsList.map((item, index) => (
            <div  data-info="brand-item" key={`case-brand-${index}`} 
                  tw="relative [aspect-ratio: 245 / 184] border-solid border-secondary border bg-white/80
                      [background: linear-gradient(298.85deg, rgba(255, 255, 255, 0.688) 2.01%, rgba(255, 255, 255, 0) 98.27%)]
                      [border: 2px solid #B2B0B2]
                      [backdrop-filter: blur(20px)]
                      [border-radius: 16px]    
                  "
              >
              <img src={item.data.logo} alt={item.title} tw="w-[70%] h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
            </div>
          ))}
        </div>
      </Container>
	</div>
}

const Circle = tw.div`absolute bg-primary w-[50vw] h-[50vw] [border-radius: 999rem]`
const AnimatedCircle = ({ top, bottom, left, right }) => {
	return <Circle 
				data-info="animated-circle"	
				css={`
					${top && `top: -25vw;`}
					${bottom && `bottom: -25vw;`}
					${left && `left: -25vw;`}
					${right && `right: -25vw;`}

					${bottom && `animation: smooth-diagonal-1 15s ease-in infinite;`}
					${top && `animation: smooth-diagonal-2 15s ease-out infinite;`}
          transform-origin: center;
          opacity: 0.5;
					
          @keyframes smooth-diagonal-1 {
						0%, 100% {
							transform: translate(0, 0);
						}
						50% {
							transform: translate(25vw, 25vh);
						}
          }

          @keyframes smooth-diagonal-2 {
						0%, 100% {
							transform: translate(25vw, 25vh);
						}
						50% {
							transform: translate(0vw, 0vw);
						}
					}
				`}
			/>
}

export const Clientes2 = () => {
  const [clientes, setClientes] = useState([])
  const logoWidth = window.innerWidth > 768 ? 333 : 240
  const options = _app.options();

  useEffect(() => {
    if(!options.BrandsList || options.BrandsList.length === 0) {
      apiFetch({ path: 'database/v1/clientes' }).then(data => {
        const logos = data.map((cliente, index) => cliente.data.logo.replace('http://', 'https://'))
        setClientes([...logos, ...logos, ...logos])
      })
    } else {
      const logos = options.BrandsList.map((cliente, index) => cliente.data.logo.replace('http://', 'https://'))
      setClientes([...logos, ...logos, ...logos])
    }
  }, [])

  return (
    <section
      id='clientes'
      className='clientes'
      tw={'py-20 bg-secondary-900 text-secondary'}
    >
      <ContainerFluidH css='min-height: 50vh;'>
        <H2Dash tw='text-secondary-100'>Clientes</H2Dash>
        <Scroller clientes={clientes} logoWidth={logoWidth} speed={360} />
      </ContainerFluidH>
    </section>
  )
}

const Scroller = ({ clientes, logoWidth, speed = 360 }) => {
  return (
    <div
      css={[
        tw`my-8 w-full h-full relative`,
        'margin-top: 8rem;',
        `min-height: ${logoWidth * 0.666 * 2.4}px;`
      ]}
    >
      <div
        tw='flex flex-nowrap py-2 w-fit h-fit absolute'
        css={`
          animation: scrollToLeft ${speed}s linear infinite;
          @keyframes scrollToLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(${(clientes.length * logoWidth) / -1.25}px);
            }
          }
        `}
      >
        {clientes &&
          clientes.map((cliente, index) => (
            <Logo logo={cliente} width={logoWidth} />
          ))}
      </div>

      <div
        tw='flex flex-nowrap py-2 w-fit h-fit absolute bottom-0 right-0'
        css={`
          animation: scrollToRight ${speed}s linear infinite;
          @keyframes scrollToRight {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(${(clientes.length * logoWidth) / 1.25}px);
            }
          }
        `}
      >
        {clientes &&
          clientes.map((cliente, index) => (
            <Logo logo={cliente} width={logoWidth} />
          ))}
      </div>
    </div>
  )
}

const Logo = ({ logo, width }) => (
  <div
    css={`
      width: ${width}px;
      height: ${width * 0.666}px;
      background-image: url(${logo});
      background-size: 80%;
      background-repeat: no-repeat;
      background-position: center;
      margin: 0 ${width * 0.1}px;
      background-color: white;
      overflow: hidden;
      border-radius: 8px;
    `}
  ></div>
)
