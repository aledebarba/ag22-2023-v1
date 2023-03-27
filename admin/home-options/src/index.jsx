import tw from 'twin.macro'
import Switch from 'react-switch'
import ReactPlayer from 'react-player'
import apiFetch from "@wordpress/api-fetch";
import { Icon } from '@iconify/react'
import { useState, useEffect } from 'react'
import { DndList } from './components/dndlist'
import { fetchOptions, saveOptions } from './components/options';
import { MediaBtn, MediaSelectBox, CustomImageSelect, MediaGalleryButton }    from './components/wpmediagal/media-gallery-button'

const App = () => {
 
    const [ optionsChanged, setOptionsChanged ] = useState( false );
    const [ readedOptions, setReadedOptions ] = useState();
    const [ firstTime, setFirstTime ] = useState( true );

    const [options, setOptions] = useState({
        online: true,
        title: '',
        socialOnContact: [],
        socialOnFooter: [],
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
        ogUrl: '',
        twitterCardText: '',
        twitterCardTitle: '',
        twitterCardAuthor: '',
        telefone: '',
        email: '',
        endereco: ''
    })

    useEffect(()=>{
        if ( !firstTime ) { 
            setOptionsChanged( options !== readedOptions );
        }        
    }, [options]);

    useEffect(()=>{   
        
        const getCases = () => {
            return (
                apiFetch({ 
                    path: '/database/v1/projetos/' ,
                    method: 'GET',
                }).then( response => {
                    let casesOrder = response.map( (item, index ) => { return { id: item.id, title: item.title } })
                    return casesOrder
                })
            )
           }
    
            const getSocials = () => {
                return (
                    apiFetch({ 
                        path: '/database/v1/contatos/' ,
                        method: 'GET',
                    }).then( response => {
                        let contactsOrder = response.map( (item, index ) => { return { id: item.id, title: item.title } })
                        return contactsOrder
                    })
                )
            }

                 
        fetchOptions().then( res => { 
            if ( !res.error || ( res.error && res.code == 404 ) ) {

                let data;
                console.log( res )

                if( res?.code == 404 ) {
                    data = options;
                } else {
                    data = res;
                }

                let cases = getCases();
                let socials = getSocials();

                Promise.all([cases, socials]).then( values => {
                    data.cases = data.cases.length == 0 ? data.cases = values[0] : combineArrays( data.cases, values[0] );
                    data.socialOnContact = data.socialOnContact?.length == 0 ? values[1] : combineArrays( data.socialOnContact, values[1] );
                    data.socialOnFooter = data.socialOnFooter?.length == 0 ? values[1] : combineArrays( data.socialOnFooter, values[1] );
                    setOptions( data );
                    setReadedOptions( data );
                    setFirstTime( false );
                })
            }
        });
    }, []);

    const handleSaveOptions = () => {
        saveOptions( options ).then( result => {
            if( result.success ) {
                setOptionsChanged( false );
                setReadedOptions( options );
            }
            if ( result.error ) {
                console.error( result.message );
            }
        })
    }

    if( firstTime ) {
        return <h1>Loading...</h1>
    } 

    return (
        <main id="wellcome-pate--main-options" tw="relative">
            { optionsChanged // mostra o aviso de opções alteradas e o botão de salvar
            ? <div css={[
                    tw`fixed top-[3rem] right-4 z-50 w-[320px] h-fit bg-red-200/70 box-border grid place-content-center p-4 shadow-lg rounded-lg`,
                    `                
                    backdrop-filter: blur(4px);                `
                    
                    ]}>
                    <button 
                        tw="relative bg-red-500 text-white font-bold p-2 w-fit rounded-sm shadow-lg my-4 mx-auto duration-200 cursor-pointer border-transparent outline-transparent text-lg rounded-md hover:(bg-red-800 duration-200 text-xl) active:(bg-red-500 duration-200 text-xl)"
                        onClick={ handleSaveOptions }
                        >
                        Salvar opções
                    </button>
                    <p tw="font-bold mb-4">Você alterou as opções do site e elas só serão gravadas quando você clicar no botão acima.</p>
                </div>
            : null }


        <h1 tw='text-4xl flex items-center mt-[3.5rem]'>
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
                <MediaSelectBox 
                    onSelect={ image => setOptions({...options, favicon: image[0].url })}
                    onClear={ () => setOptions({...options, favicon: '' }) }
                    >
                        {
                            options.favicon 
                            ? <div id="favicon-container"
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
                            : null
                        }
                    </MediaSelectBox>
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
                { options.socialOnContact && <DndList 
                    items={options.socialOnContact} 
                    id="social_list_on_contact_section"
                    onChange={(list) => { setOptions( {...options, socialOnContact: list } ); console.log( list )}} />}
            </Option>

            <Option label="Ordem das redes sociais no rodapé" width="100%">
               { options.socialOnFooter && <DndList 
                    items={options.socialOnFooter} 
                    id="social_list_on_contact_section" 
                    onChange={(list) => setOptions( {...options, socialOnFooter: list } )}
                    />}
            </Option>
            
            <Option label="Ordem dos projetos na seção cases" width="55%">
                { options.cases && <DndList 
                    items={options.cases}
                    id="cases_list_on_contact_section"
                    onChange={(list) => setOptions( {...options, cases: list } )}
                />  }          
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
            <MediaSelectBox 
                    onSelect={ image => setOptions({...options, introImage: image[0].url })}
                    onClear={ () => setOptions({...options, introImage: '' }) }
                    >
                        {
                            options.introImage 
                            ? <div id="introImage-container"
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
                            : null
                        }
                    </MediaSelectBox>
            </Option>  

        </Section>

        <Section title='Opções da página Sobre Nós'>
            <Option label="Video da seção sobre nós" width="100%">
                { options.aboutMovie !=="" 
                    ? <div tw="relative w-[100%] min-w-[300px] h-fit min-h-[300px] overflow-hidden rounded-md before:(pt-[70%])">
                       <div css={`
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
                       `}>
                        <ReactPlayer 
                                url={options.aboutMovie} 
                                width="100%"
                                height="100%"
                                controls={true}
                                playing={false}
                                className="player"                            
                            />
                       </div>
                      
                    </div>
                    : null
                }
                <input
                    type="text"
                    placeholder="Digite a url do video ou clique no botão abaixo para selecionar/enviar um novo video"
                    value={options.aboutMovie}
                    onChange={e => setOptions({ ...options, aboutMovie: e.target.value })}
                    tw="border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full"
                />

                <MediaBtn type={["video"]} onSelect={(e)=> { setOptions({...options, aboutMovie: e[0].url })} }/>

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
            
            <Option label="Open Graph: Titulo" width="40%">
                <input 
                    type="text" 
                    placeholder="Titulo de cards compartilhados no Facebook"
                    value={options.ogTitle}
                    onChange={e => setOptions({ ...options, ogTitle: e.target.value })}
                    tw="border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full"
                />
            </Option>

            <Option label="Open Graph: URL" width="40%">
                <input 
                    type="text" 
                    placeholder="URL de destino dos cards"
                    value={options.ogUrl}
                    onChange={e => setOptions({ ...options, ogUrl: e.target.value })}
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
                <MediaSelectBox 
                    onSelect={ image => setOptions({...options, ogImage: image[0].url })}
                    onClear={ () => setOptions({...options, ogImage: '' }) }
                    >
                        {
                            options.ogImage
                            ? <div data-desc="wrapper do preview da imagem"
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
                            : null
                        }
                </MediaSelectBox>
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

        </main>
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


function combineArrays(options, database) {
    let dbIds = database.map( item => item.id )
    let inter = options.filter( item => dbIds.includes(item.id) )
    let interIds = inter.map( item => item.id )
    let diff = database.filter( item =>  !interIds.includes( item.id ))
    let result = [...inter, ...diff]
    return result;
}
  