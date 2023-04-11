import tw from 'twin.macro'
import Switch from 'react-switch'
import ReactPlayer from 'react-player'
import apiFetch from '@wordpress/api-fetch'
import { Icon } from '@iconify/react'
import { useState, useEffect } from 'react'
import { DndList } from './components/dndlist'
import { fetchOptions, saveOptions } from './components/options'
import { MediaBtn,MediaSelectBox } from './components/wpmediagal/media-gallery-button'
import { Section, Panel, Row, Col, Option } from './components/options-layout-grid'
import { CasesGrid } from './components/cases-grid'
import { BrandsList } from './components/brands-list'

const App = () => {
  const [ optionsChanged, setOptionsChanged] = useState(false)
  const [ readedOptions, setReadedOptions] = useState()
  const [ rawCases, setRawCases ] = useState([]);
  const [ firstTime, setFirstTime] = useState(true)

  const [ options, setOptions ] = useState({
    online: true,
    offlineMessage: '',
    title: '',
    socialOnContact: [],
    socialOnFooter: [],
    cases: [],
    casesList: [],
    brandsList: [],
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
    ogUrl: '',
    twitterCardText: '',
    twitterCardTitle: '',
    twitterCardAuthor: '',
    telefone: '',
    endereco: '',
    bairro: '',
    cidade: '',
    estado: '',
    emailPrincipal: '',
    emailVagas: '',
    copyright: '',
    devby: ''
  })

  useEffect(() => {
    if (!firstTime) {
      setOptionsChanged(options !== readedOptions)
    }
  }, [options] )

  useEffect(() => {
      fetchOptions().then(res => {
        if (res.error && res.code !== 404 ) {
          console.error(res.message)
          console.error("A aplicação não pode se recuperar desse erro.")
          return
        }

        let data = res?.code == 404 ? options : res
        let cases = getCases()
        let socials = getSocials()
        let rCases = getRawCases()

        Promise.all([cases, socials, rCases]).then(values => {
          data.cases =
            data.cases.length == 0
              ? (data.cases = values[0])
              : combineArrays(data.cases, values[0])
          data.socialOnContact =
            data.socialOnContact?.length == 0
              ? values[1]
              : combineArrays(data.socialOnContact, values[1])
          data.socialOnFooter =
            data.socialOnFooter?.length == 0
              ? values[1]
              : combineArrays(data.socialOnFooter, values[1])

          setOptions(data)
          setReadedOptions(data)
          setFirstTime(false)
          setRawCases(rCases)

        })
    })
  }, [])

  const handleSaveOptions = () => {
    saveOptions(options).then(result => {
      if (result.success) {
        setOptionsChanged(false)
        setReadedOptions(options)
      }
      if (result.error) {
        console.error(result.message)
      }
    })
  }

  if (firstTime) {
    return <h1>Loading...</h1>
  }
  
  return (
    <Panel id='wellcome-page--main-options'>
      {optionsChanged ? ( // mostra o aviso de opções alteradas e o botão de salvar
        <div
          css={[
            tw`fixed top-[2.2rem] right-[0.5rem] z-50 w-fit h-fit bg-slate-700/70 box-border flex gap-4 py-0.5 px-6 shadow-lg rounded-md `,
            `
              backdrop-filter: blur(4px);
              box-shadow: 3px 3px 10px -2px #000;
            `
          ]}
        >         
          <button
            tw='relative bg-red-500 text-white font-bold p-2 w-fit shadow-lg my-4 mx-auto duration-200 cursor-pointer border-transparent outline-transparent text-lg rounded-md hover:(bg-red-800 duration-200 text-xl) active:(bg-red-500 duration-200 text-xl)'
            onClick={handleSaveOptions}
          >
            Salvar opções
          </button>         
        </div>
      ) : null}

      <h1 tw='flex flex-col font-thin lowercase text-[42px] text-center md:(flex flex-row) items-center mt-[3.5rem] mx-auto w-fit tracking-normal leading-normal'>
        <Icon icon='dashicons:superhero-alt' tw='text-sky-600 text-[72px]' />{' '}
        <div>
          <span tw='text-[50px] -mt-1'>A</span>dministração do site e opções
          globais
        </div>
      </h1>
      <div tw='font-normal text-center w-fit mx-auto grid place-content-center place-items-center'>
        <a
          href='https://ag22.uxdir.com/'
          target='_blank'
          tw='text-sky-600 font-bold text-lg'
        >
          <Icon icon="fa-link"/> ag22.uxdir.com
        </a>
      </div>

      <Section title='Opções de disponibilidade'>
        <Row>
          <Col>
            <Option label='Favicon'>
              <MediaSelectBox
                onSelect={image =>
                  setOptions({ ...options, favicon: image[0].url })
                }
                onClear={() => setOptions({ ...options, favicon: '' })}
              >
                {options.favicon ? (
                  <div
                    id='favicon-container'
                    css={`
                      position: relative;
                      display: block;
                      width: 100%;
                    `}
                  >
                    <img
                      src={options.favicon}
                      css={`
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                      `}
                    />
                  </div>
                ) : null}
              </MediaSelectBox>
            </Option>
          </Col>

          <Col>
            <Option label='Online / Offline'>
              <div tw='flex items-center gap-2'>
                <Switch
                  onChange={e => setOptions({ ...options, online: e })}
                  checked={options.online}
                />
                {options.online ? (
                  <span tw='text-green-700 font-bold'>O site está online</span>
                ) : (
                  <span tw='text-red-600 font-bold'>O site está offline</span>
                )}
              </div>
            </Option>

            <Option label='Offline message'>
              <h2 tw='font-light flex gap-4'>
                <Icon icon='nimbus:edit' width='40px' />
                Digite uma mensagem explicando porque o seu site está offline.
              </h2>
              <input
                type='text'
                placeholder='Mensagem de status do site'
                value={options.offlineMessage}
                onChange={e =>
                  setOptions({ ...options, offlineMessage: e.target.value })
                }
                tw='border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full'
              />
            </Option>
          </Col>
        </Row>
        <Row>
          <Col full>
            <Option label='Título do site'>
              <input
                type='text'
                placeholder='Título do site'
                value={options.title}
                onChange={e =>
                  setOptions({ ...options, title: e.target.value })
                }
                tw='border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full'
              />
            </Option>
          </Col>
        </Row>
      </Section>

      <Section title='Opções da landing page'>
        <Row>
          <Option
            label='Ordem das redes sociais na seção contatos'
            width='100%'
          >
            {options.socialOnContact && (
              <DndList
                items={options.socialOnContact}
                id='social_list_on_contact_section'
                onChange={list => {
                  setOptions({ ...options, socialOnContact: list })
                }}
              />
            )}
          </Option>
          <Option label='Ordem das redes sociais no rodapé' width='100%'>
            {options.socialOnFooter && (
              <DndList
                items={options.socialOnFooter}
                id='social_list_on_contact_section'
                onChange={list =>
                  setOptions({ ...options, socialOnFooter: list })
                }
              />
            )}
          </Option>
            <Option
              label='Quantidade de cases que serão exibidos na seção cases'
              width='10%'
            >
              <input
                type='number'
                min='5'
                max='20'
                value={options.maxCases}
                onChange={e =>
                  setOptions({ ...options, maxCases: e.target.value })
                }
                tw='border border-slate-200 p-2 rounded-lg bg-white shadow-lg text-xl'
              />
            </Option>
          </Row>
        </Section>
          
       <Section title="Seção de cases/projetos" tw="w-full">
            <Option label="Organize os cases">
                { rawCases 
                    ? <CasesGrid  
                          options     = { options }
                          cases       = { rawCases }
                          setOptions  = { setOptions }
                      />
                  : <h2>Loading...</h2> 
                }
              </Option>
         
        
        <Option label='Imagem de fundo da seção de introdução'>
          <MediaSelectBox
            onSelect={image =>
              setOptions({ ...options, introImage: image[0].url })
            }
            onClear={() => setOptions({ ...options, introImage: '' })}
          >
            {options.introImage ? (
              <div
                id='introImage-container'
                css={`
                  position: relative;
                  display: block;
                  width: 100%;
                `}
              >
                <img
                  src={options.introImage}
                  css={`
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                  `}
                />
              </div>
            ) : null}
          </MediaSelectBox>
        </Option>
      </Section>
      
      <Section title="Seção de marcas na home page" tw="w-full">
        <Option label="Organize as marcas de acordo com a ordem em que devem aparecer">
          <BrandsList setOptions = { setOptions } options = { options } />
        </Option>
      </Section>
      <Section title='Opções da página Sobre Nós'>
        <Option label='Video da seção sobre nós' width='50vw'>
          {options.aboutMovie !== '' ? (
            <div tw='relative w-[100%] min-w-[300px] h-fit min-h-[300px] overflow-hidden rounded-md before:(pt-[70%])'>
              <div
                css={`
                  width: auto;
                  height: auto;

                  .player {
                    position: relative;
                    padding-top: 56.25%;
                  }

                  .player div {
                    position: absolute !important;
                    top: 0;
                  }

                  .player video {
                    top: 0;
                    position: absolute;
                  }
                `}
              >
                <ReactPlayer
                  url={options.aboutMovie}
                  width='100%'
                  height='100%'
                  controls={true}
                  playing={false}
                  className='player'
                />
              </div>
            </div>
          ) : null}
          <input
            type='text'
            placeholder='Digite a url do video ou clique no botão abaixo para selecionar/enviar um novo video'
            value={options.aboutMovie}
            onChange={e =>
              setOptions({ ...options, aboutMovie: e.target.value })
            }
            tw='border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full'
          />

          <MediaBtn
            type={['video']}
            onSelect={e => {
              setOptions({ ...options, aboutMovie: e[0].url })
            }}
          />
        </Option>
      </Section>

      <Section title='Opções de SEO'>
        <Option label='Descrição do site' width='40%'>
          <textarea
            placeholder='Descrição do site'
            value={options.description}
            onChange={e =>
              setOptions({ ...options, description: e.target.value })
            }
            lines={5}
            tw='border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full h-[10ch]'
          />
        </Option>

        <Option label='Tags do site' width='40%'>
          <input
            type='text'
            placeholder='tags, separadas, por, vírgula'
            value={options.tags}
            onChange={e => setOptions({ ...options, tags: e.target.value })}
            tw='border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full'
          />
        </Option>

        <Line />

        <Option label='Open Graph: Titulo' width='40%'>
          <input
            type='text'
            placeholder='Titulo de cards compartilhados no Facebook'
            value={options.ogTitle}
            onChange={e => setOptions({ ...options, ogTitle: e.target.value })}
            tw='border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full'
          />
        </Option>

        <Option label='Open Graph: URL' width='40%'>
          <input
            type='text'
            placeholder='URL de destino dos cards'
            value={options.ogUrl}
            onChange={e => setOptions({ ...options, ogUrl: e.target.value })}
            tw='border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full'
          />
        </Option>

        <Option label='Open Graph: Descrição' width='40%'>
          <textarea
            placeholder='Descrição de cards compartilhados no Facebook'
            value={options.ogDescription}
            onChange={e =>
              setOptions({ ...options, ogDescription: e.target.value })
            }
            lines={5}
            tw='border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full h-[10ch]'
          />
        </Option>

        <Option label='Open Graph: Imagem' width='40%'>
          <MediaSelectBox
            onSelect={image =>
              setOptions({ ...options, ogImage: image[0].url })
            }
            onClear={() => setOptions({ ...options, ogImage: '' })}
          >
            {options.ogImage ? (
              <div
                data-desc='wrapper do preview da imagem'
                css={`
                  position: relative;
                  display: block;
                  width: 100%;
                `}
              >
                <img
                  src={options.ogImage}
                  css={`
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                  `}
                />
              </div>
            ) : null}
          </MediaSelectBox>
        </Option>

        <Line />

        <Option label='Twitter Card: Título' width='100%'>
          <input
            type='text'
            placeholder='Titulo de cards compartilhados no Twitter'
            value={options.twitterCardTitle}
            onChange={e =>
              setOptions({ ...options, twitterCardTitle: e.target.value })
            }
            tw='border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full'
          />
        </Option>

        <Option label='Twitter Card: Texto' width='40%'>
          <textarea
            placeholder='Descrição de cards compartilhados no Twitter'
            value={options.twitterCardText}
            onChange={e =>
              setOptions({ ...options, twitterCardText: e.target.value })
            }
            lines={5}
            maxLength={250}
            tw='border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full h-[10ch]'
          />
        </Option>

        <Option label='Twitter Card: Autor' width='40%'>
          <input
            type='text'
            placeholder='Autor de cards compartilhados no Twitter'
            value={options.twitterCardAuthor}
            onChange={e =>
              setOptions({ ...options, twitterCardAuthor: e.target.value })
            }
            tw='border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full'
          />
        </Option>
      </Section>

      <Section title='Informações de Contato'>
        <Row>
          <Col>
            <Option label='Telefone' width='40%'>
              <input
                type='text'
                placeholder='Telefone'
                value={options.telefone}
                onChange={e => setOptions({ ...options, telefone: e.target.value })}
                tw='border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full'
              />
            </Option>
            <Option label='Endereço' width='40%'>
              <input
                type='text'
                placeholder='Endereço'
                value={options.endereco}
                onChange={e => setOptions({ ...options, endereco: e.target.value })}
                tw='border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full'
              />
            </Option>
            <Option label='Bairro' width='40%'>
              <input
                type='text'
                placeholder='Bairro'
                value={options.bairro}
                onChange={e => setOptions({ ...options, bairro: e.target.value })}
                tw='border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full'
              />
            </Option>
            <Option label='Cidade' width='40%'>
              <input
                type='text'
                placeholder='Cidade'
                value={options.cidade}
                onChange={e => setOptions({ ...options, cidade: e.target.value })}
                tw='border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full'
              />
            </Option>
            <Option label='Estado' width='40%'>
              <input
                type='text'
                placeholder='Estado'
                value={options.estado}
                onChange={e => setOptions({ ...options, estado: e.target.value })}
                tw='border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full'
              />
            </Option>
          </Col>
          
      
        <Col fill>
          <Option label='Email Principal' width='40%'>
            <input
              type='email'
              placeholder='Email Principal'
              value={options.emailPrincipal}
              tw='border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full'
              onChange={e =>
                setOptions({ ...options, emailPrincipal: e.target.value })
              }
            />
          </Option>
          <Option label='Email para Vagas' width='40%'>
            <input
              type='email'
              placeholder='Email para Vagas'
              value={options.emailVagas}
              tw='border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full'
              onChange={e =>
                setOptions({ ...options, emailVagas: e.target.value })
              }
            />
          </Option>
          <Option label='Copyright' width='40%'>
            <input
              type='text'
              placeholder='Copyright'
              value={options.copyright}
              onChange={e =>
                setOptions({ ...options, copyright: e.target.value })
              }
              tw='border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full'
            />
          </Option>
          <Option label='Desenvolvido por' width='40%'>
            <input
              type='text'
              placeholder='Desenvolvido por'
              value={options.devby}
              onChange={e => setOptions({ ...options, devby: e.target.value })}
              tw='border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full'
            />
          </Option>
        </Col>
        </Row>
      </Section>
    </Panel>
  )
}

export default App

const Line = () => {
  return <div tw='w-full h-[1px] bg-red-300 my-2'></div>
}

function combineArrays (options, database) {
  let dbIds = database.map(item => item.id)
  let inter = options.filter(item => dbIds.includes(item.id))
  let interIds = inter.map(item => item.id)
  let diff = database.filter(item => !interIds.includes(item.id))
  let result = [...inter, ...diff]
  return result
}

const getCases = () => {
  return apiFetch({
    path: '/database/v1/projetos/',
    method: 'GET'
  }).then(response => {
    let casesOrder = response.map((item, index) => {
      return { id: item.id, title: item.title }
    })
    return casesOrder
  })
}

const getRawCases = () => {
  return apiFetch({
    path: '/database/v1/projetos/',
    method: 'GET'
  }).then( response => response )
}

const getSocials = () => {
  return apiFetch({
    path: '/database/v1/contatos/',
    method: 'GET'
  }).then(response => {
    let contactsOrder = response.map((item, index) => {
      return { id: item.id, title: item.title }
    })
    return contactsOrder
  })
}