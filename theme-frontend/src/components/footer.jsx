import { ReactComponent as Logo } from '../../assets/images/brand-color-negative.svg'
import { HashLink as Link } from 'react-router-hash-link'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { _app } from '../utils/functions'
import apiFetch from '@wordpress/api-fetch'
import tw from 'twin.macro'

export const Footer = ({ copyright = '', devby = '' }) => {
  const [contatos, setContatos] = useState()
  const options = _app.options()

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })


  useEffect(() => {
    apiFetch({ path: 'database/v1/contatos' }).then(data => {
      const inOrder = (data, order) =>
        order.map(item => {
          let id = item.id
          let found = data.find(item => item.id === id)
          return found
        })
      setContatos(inOrder(data, options.socialOnFooter))
    })

    // update the state with the window size on resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    // call the handler right away so state gets updated with initial window size
    handleResize()
    // remove the event handler when the component is unmounted
    return () => window.removeEventListener('resize', handleResize)    
  }, [])

  return (
    <section
      tw={
        'py-28 bg-secondary-900 relative min-h-[33vh] w-screen p-8 text-secondary-50 md:(p-16)'
      }
    >
      <div tw='sm:(grid grid-cols-1 w-[90vw]) md:(grid grid-cols-8 gap-6 w-[75vw] mx-auto) '>
        <div tw='col-start-1 sm:(col-start-1 col-span-2)'>
          <div tw='flex flex-col gap-3 w-full'>
            <Logo />
            <h5 tw='text-secondary-50 border-b-4 border-b-primary leading-tight tracking-wider font-semibold'>
              <span css={`font-size: clamp(16px, 1.5vw, 2rem)`}>Nos siga nas</span>
              <span css={`font-size: clamp(16px, 1.5vw, 2rem)`}>redes sociais</span>
            </h5>
            <div tw='flex flex-nowrap gap-4 text-3xl text-primary'>
              {contatos ? (
                contatos.map(contato => {
                  return (
                    <a
						href={contato.data.link}
						target='_blank'
						alt={contato.title}
						title={contato.title}
						tw="text-6xl mb-8"
						noreferrer
                    >
                      <Icon icon={contato.data.icone} />
                    </a>
                  )
                })
              ) : (
                <span>Carregando redes...</span>
              )}
            </div>
          </div>
        </div>

        <div tw='col-start-5 col-span-2 w-2/3'>
          <ul>
            <Li>
              <Link smooth to='/sobre#top'>
                Quem Somos
              </Link>
            </Li>
            <Li>
              <Link smooth to='/servicos#top'>
                Serviços
              </Link>
            </Li>
            <Li>
              <Link smooth to="/#cases">
                Cases
              </Link>
            </Li>
          </ul>
          { windowSize.width > 768             
            ? <div tw='pt-8'>
                <small css='white-space: nowrap;'>
                {copyright || options.copyright }&nbsp;{devby || options.devby}
                </small>
              </div>
            :<></>
        }
        </div>

        <div tw='col-start-7 col-span-2 w-2/3'>
          <ul>
            <Li>
              <Link smooth to='/#clientes'>
                Clientes
              </Link>
            </Li>
            <Li>
              <Link smooth to='/#vagas'>
                Trabalhe conosco
              </Link>
            </Li>
            <Li>
              <Link smooth to='/#contato'>
                Contatos
              </Link>
            </Li>
          </ul>
          { windowSize.width <= 768 
            
              ? <div tw='pt-8'>
                  <small css='white-space: nowrap;'>
                      {copyright || options.copyright }&nbsp;{devby || options.devby}
                  </small>
                </div>
              :<></>
          }
        </div>
      </div>
    </section>
  )
}

const Li = ({ children }) => {
  return <li tw='pt-4 pb-1 border-b-2 border-primary whitespace-nowrap'>{children}</li>
}
