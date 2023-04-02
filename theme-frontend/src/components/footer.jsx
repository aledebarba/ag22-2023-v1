import { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { Container } from './containers'
import { Icon } from '@iconify/react'
import { _app } from '../utils/functions'
import apiFetch from '@wordpress/api-fetch'
import Brand from './svg/brand'
import tw from 'twin.macro'

export const Footer = ({ copyright = '', devby = '' }) => {
  
  const options = _app.options()
  const contatos = useContatos()  

  return (
    <Container fluid tw="bg-secondary-900 py-24 z-30">
      <Container tw="flex flex-col px-8 md:(flex flex-row items-center justify-between) lg:(px-0)">
        <div >
          <Brand footer width="40%" height="40%" tw="mx-auto mb-2 md:(mx-0)"/>
          <h4 
            tw="text-white text-center relative w-1/2 leading-tight mx-auto 
                after:(absolute -bottom-4 left-1/2 -translate-x-1/2 w-[120%] h-1 bg-primary)
                md:(text-left mx-0 after:(w-[130%] left-0 translate-x-0))
            ">
            Nos siga nas redes sociais
          </h4>          
          <SocialNetworks social={contatos}/>          
        </div>
        <FooterNav  copyright={copyright} devby={devby}/>
        <p tw="text-white text-center text-sm mt-auto md:(hidden)">
            {copyright}
        </p>
      </Container>
      <Container fluid absolute tw="h-8 bg-primary flex justify-center gap-[16px] top-[16px]">
        <div tw="h-8 border-r-[16px] border-r-white"/>
        <div tw="h-8 border-l-[16px] border-l-white"/>
      </Container>
    </Container>
  )
}

const SocialNetworks = ({ social }) => {
  return <>
    <div tw="flex flex-nowrap h-[4rem] mx-auto my-4 justify-center items-center md:(mx-0 justify-start)">
      {social?.map((item, index) => <>
        <div key={`contact-on-footer-${index}`}>
          <a href={item.data.link} target="_blank" rel="noreferrer">
            <Icon icon={item.data.icone} tw="text-primary text-4xl mx-2"/>
          </a>
        </div>
      </>)}
    </div>
  </>
}

const FooterNav = ( { copyright, devby }) => {
  const items = [
    { label: "Quem Somos", link: "/sobre#top" },
    { label: "Serviços", link: "/servicos#top" },
    { label: "Cases", link: "/#cases" },
    { label: "Clientes", link: "/#clientes" },
    { label: "Trabalhe Conosco", link: "/#vagas" },
    { label: "Contato", link: "/#contato" },        
  ]
  return <>
    <div tw="grid grid-cols-1 grid-flow-row px-16 md:(grid grid-cols-2 grid-rows-[repeat(4,minmax(0,3rem))] gap-x-[8vw] px-2 auto-rows-min)">  
      {items.map((item, index) => (
        <Link to={item.link} tw="text-white mb-6 md:(my-0 py-0)" key={`footer-menu-item-key-${index}`}>
          <h6 tw="text-white leading-tight">{item.label}</h6>
          <div tw="w-full h-1 bg-primary mt-1"/>
        </Link> 
      ))}
      <small tw="hidden text-white mt-8 md:(block mt-4)">
            {copyright}&nbsp;{devby}
      </small>
  </div>
  </>
}

const useContatos = () => {
  
  const [contatos, setContatos] = useState()
  useEffect(() => {
    const options = _app.options()
    apiFetch({ path: 'database/v1/contatos' }).then(data => {
      const inOrder = ( data, order ) =>
        order.map(item => {
          let id = item.id
          let found = data.find(item => item.id === id)
          return found
        })
      setContatos(inOrder(data, options.socialOnFooter))
    })
  }, [])
  return contatos 
}