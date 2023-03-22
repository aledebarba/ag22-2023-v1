import tw from 'twin.macro'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import Switch from 'react-switch'
import { CasesList, SocialList } from './components/dndlist'

const App = () => {

  const [options, setOptions] = useState({
    online: true,
    title: '',
    social: [],
    cases: [],
    maxCases: 5,
    heroImage: '',
    introImage: '',
    aboutImage: '',
    aboutMovie: '',
    favicon: '',
    description: '',
    tags: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    twitterCardText: '',
    twitterCardTitle: '',
    twitterCardAuthor: '',
  })

  return (
    <>
      <h1 tw='text-4xl flex items-center'>
        <Icon icon='dashicons:superhero-alt' tw='text-sky-600 text-6xl' />{' '}
        Administração do site e opções globais
      </h1>
      <Section title='Opções de disponibilidade'>
        <Option label="Online / Offline">
            <div tw='flex items-center gap-2'>
            <Switch onChange={e => setOptions({ ...options, online: e })} checked={options.online} />
            { options.online ? <span tw='text-green-700 font-bold'>O site está online</span> : <span tw='text-red-600 font-bold'>O site está offline</span> }
            </div>
        </Option>
        <Option label="Favicon">
            favicon
        </Option>
       <Option label="Título do site" width="100%">
            <input 
                type="text" 
                placeholder="Título do site"
                value={options.title}
                onChange={e => setOptions({ ...options, title: e.target.value })}
                tw="border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full"
            />
         </Option>
        
      </Section>
      <Section title='Opções da landing page'>
            <Option label="Ordem das redes sociais na seção contatos" width="100%">
                <SocialList />    
            </Option>
            <Option label="Ordem das redes sociais no rodapé" width="100%">
                <SocialList />
            </Option>
            
            <Option label="Ordem dos projetos na seção cases" width="55%">
                <CasesList />                
            </Option>

            <Option label="Quantidade de cases que serão exibidos na seção cases" width="10%">
                <input
                    type="number"
                    min="5"
                    max="20"
                    value={options.maxCases}
                    onChange={e => setOptions({ ...options, maxCases: e.target.value })}
                    tw="border border-slate-200 p-2 rounded-lg bg-white shadow-lg text-xl"
                />
            </Option>
           
            <Option label="Imagem de fundo da seção de introdução" width="100%">
                Select Image 
            </Option>            
      </Section>
      <Section title='Opções da página Sobre Nós'>
        <Option label="Video da seção sobre nós" width="100%">
            Select Video / URL
        </Option>
      </Section>     


      <Section title='Opções de SEO'>


        <Option label="Descrição do site" width="40%">
            <textarea
                placeholder="Descrição do site"
                value={options.description}
                onChange={e => setOptions({ ...options, description: e.target.value })}
                lines={5}
                tw="border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full h-[10ch]"
            />
        </Option>


        <Option label="Tags do site" width="40%">
            <input 
                type="text" 
                placeholder="tags, separadas, por, vírgula"
                value={options.tags}
                onChange={e => setOptions({ ...options, tags: e.target.value })}
                tw="border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full"
            />
        </Option>

        <Line/>
        
        <Option label="Open Graph: Titulo" width="100%">
            <input 
                type="text" 
                placeholder="Titulo de cards compartilhados no Facebook"
                value={options.ogTitle}
                onChange={e => setOptions({ ...options, ogTitle: e.target.value })}
                tw="border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full"
            />
        </Option>

        <Option label="Open Graph: Descrição" width="40%">
            <textarea
                placeholder="Descrição de cards compartilhados no Facebook"
                value={options.ogDescription}
                onChange={e => setOptions({ ...options, ogDescription: e.target.value })}
                lines={5}
                tw="border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full h-[10ch]"
            />
        </Option>

        <Option label="Open Graph: Imagem" width="40%">
            Select Image
        </Option>

        <Line/>

        <Option label="Twitter Card: Título" width="100%">
            <input
                type="text"
                placeholder="Titulo de cards compartilhados no Twitter"
                value={options.twitterCardTitle}
                onChange={e => setOptions({ ...options, twitterCardTitle: e.target.value })}
                tw="border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full"
            />
        </Option>

        <Option label="Twitter Card: Texto" width="40%">
            <textarea
                placeholder="Descrição de cards compartilhados no Twitter"
                value={options.twitterCardText}
                onChange={e => setOptions({ ...options, twitterCardText: e.target.value })}
                lines={5}
                maxLength={250}
                tw="border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full h-[10ch]"
            />
        </Option>

        <Option label="Twitter Card: Autor" width="40%">
            <input
                type="text"
                placeholder="Autor de cards compartilhados no Twitter"
                value={options.twitterCardAuthor}
                onChange={e => setOptions({ ...options, twitterCardAuthor: e.target.value })}
                tw="border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full"
            />
        </Option>

      </Section>

    </>
  )
}

export default App

const Section = ({ title, icon = 'ant-design:control-twotone', children }) => {
  return (
    <section tw='p-4 rounded-lg bg-gray-50/50  my-4 shadow-lg w-full 
    lg:(w-2/3) 2xl:(w-1/2) duration-300 hover:(bg-gray-50 duration-300)'
        css="border: 1px solid white;">
      <h2 tw='text-slate-900 font-normal tracking-wider my-4 flex items-center gap-4'>
        <Icon icon={icon} tw="text-red-500"/> {title}
      </h2>
      <div tw="flex gap-2 flex-wrap">
        {children}
      </div>
    </section>
  )
}

const Option = ({ label, width, children }) => {

    return (
        
        <div css={[
            tw`flex flex-col gap-2 px-2 py-4 bg-white rounded-md shadow-md mb-2 h-fit`,
            'min-width: 240px;',
            'max-width: 40vw;',
            width ? `width: ${width};` : 'width: 20%;',
            ]}>
            <div tw="flex flex w-full items-center gap-1 mb-2">
            <Icon icon="ph:gear-fill" tw="text-red-400"/><small tw="text-red-400 font-bold uppercase">{label}</small>
            </div>
            {children}
        </div>
    )
}

const Line = () => {
    return (
        <div tw="w-full h-[1px] bg-red-300 my-2">            
        </div>
    )
}
