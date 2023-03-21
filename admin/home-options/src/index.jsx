import tw from 'twin.macro'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import Toggle from 'react-toggle'

const App = () => {
  const [options, setOptions] = useState({
    online: true,
    title: '',
    social: [],
    cases: [],
    heroImage: '',
    introImage: '',
    aboutImage: '',
    aboutMovie: ''
  })

  return (
    <>
      <h1 tw='text-4xl flex items-center'>
        <Icon icon='dashicons:superhero-alt' tw='text-sky-600 text-6xl' />{' '}
        Administração do site e opções globais
      </h1>
      <Section title='Opções de disponibilidade'>
       <div className="option">
        <Toggle
            id='online-offline'
            defaultChecked={options.online}
            aria-labelledby='biscuit-label'
            onChange={e => setOptions({ ...options, online: e.target.checked })}
            />
        <span id='online-offline-label'>O site está online.</span>
       </div>
       <div className="option">
            <input 
                type="text" 
                placeholder="Título do site"
                value={options.title}
                onChange={e => setOptions({ ...options, title: e.target.value })}
                tw="border border-slate-200 p-2 rounded-lg bg-white my-4 shadow-lg w-2/3"
            />
         </div>
        
      </Section>
      <Section title='Opções de contatos e redes sociais'>
      </Section>
      <Section title='Opções da landing page'>
      </Section>
      <Section title='Opções da página Sobre Nós'>
      </Section>
      <Section title='Opções da página Sobre Nós'>
      </Section>
      <Section title='Opções de SEO'>

      </Section>

    </>
  )
}

export default App

const Section = ({ title, icon = 'ant-design:control-twotone', children }) => {
  return (
    <section tw='p-4 rounded-lg bg-gray-50 border border-4 border-white my-4 shadow-lg w-full sm:(w-2/3)'>
      <h2 tw='text-slate-900 font-normal tracking-wider my-2 flex items-center gap-4'>
        <Icon icon={icon} tw="text-red-500"/> {title}
      </h2>
      {children}
    </section>
  )
}
