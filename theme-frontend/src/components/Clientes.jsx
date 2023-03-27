import { useState, useEffect, useRef } from 'react'
import { ContainerFluidH } from './containers'
import { H2Dash } from './headings'
import apiFetch from '@wordpress/api-fetch'
import tw from 'twin.macro'

export const Clientes = () => {
  const [clientes, setClientes] = useState([])
  const logoWidth = window.innerWidth > 768 ? 180 : 100

  useEffect(() => {
    apiFetch({ path: 'database/v1/clientes' }).then(data => {
      const logos = data.map((cliente, index) => cliente.data.logo)
      setClientes([...logos, ...logos, ...logos])
    })
  }, [])

  return (
    <section
      id='clientes'
      className='clientes'
      tw={'py-28 bg-secondary-900 text-secondary'}
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
