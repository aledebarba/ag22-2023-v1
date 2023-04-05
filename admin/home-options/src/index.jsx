import tw from 'twin.macro'
import Switch from 'react-switch'
import ReactPlayer from 'react-player'
import apiFetch from "@wordpress/api-fetch";
import { Icon } from '@iconify/react'
import { useState, useEffect } from 'react'
import { DndList } from './components/dndlist'
import { fetchOptions, saveOptions } from './components/options';
import { MediaBtn, MediaSelectBox }    from './components/wpmediagal/media-gallery-button'

const App = () => {
 
    const [ optionsChanged, setOptionsChanged ] = useState( false );
    const [ readedOptions, setReadedOptions ] = useState();
    const [ firstTime, setFirstTime ] = useState( true );

    const [options, setOptions] = useState({
        online: true,
        offlineMessage: '',
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
        endereco: '',
        bairro: '',
        cidade: '',
        estado: '',        
        emailPrincipal: '',
        emailVagas: '',
        copyright: '',
        devby: ''
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
        <main id="wellcome-page--main-options" tw="relative">
            { optionsChanged // mostra o aviso de opções alteradas e o botão de salvar
            ? <div css={[
                    tw`fixed top-[3rem] right-4 z-50 w-[320px] h-fit bg-red-200/70 box-border grid place-content-center p-4 shadow-lg rounded-lg`,
                    `                
                        backdrop-filter: blur(4px);                `
                    
                    ]}>
                    <button 
                        tw="relative bg-red-500 text-white font-bold p-2 w-fit shadow-lg my-4 mx-auto duration-200 cursor-pointer border-transparent outline-transparent text-lg rounded-md hover:(bg-red-800 duration-200 text-xl) active:(bg-red-500 duration-200 text-xl)"
                        onClick={ handleSaveOptions }
                        >
                        Salvar opções
                    </button>
                    <p tw="font-bold mb-4">Você alterou as opções do site e elas só serão gravadas quando você clicar no botão acima.</p>
                </div>
            : null }


        <h1 tw='flex flex-col font-thin lowercase text-[42px] text-center md:(flex flex-row) items-center mt-[3.5rem] mx-auto w-fit tracking-normal leading-normal' >
            <Icon icon='dashicons:superhero-alt' tw='text-sky-600 text-[72px]' />{' '}
            <div><span tw="text-[50px] -mt-1">A</span>dministração do site e opções globais</div>
        </h1>
        <div tw="font-normal text-center w-fit mx-auto grid place-content-center place-items-center">
            <a href="https://ag22.uxdir.com/" target="_blank" tw="text-sky-600 font-bold text-lg">http://ag22.uxdir.com</a>
        </div>

        <Section title='Opções de disponibilidade'>

            <Option label="Favicon" width="27%">
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

            <Option label="Online / Offline" width="27%">
                <div tw='flex items-center gap-2'>
                <Switch onChange={e => setOptions({ ...options, online: e })} checked={options.online} />
                { options.online ? <span tw='text-green-700 font-bold'>O site está online</span> : <span tw='text-red-600 font-bold'>O site está offline</span> }
                </div>
                <h2 tw="font-light mt-8 mb-1 flex gap-4"><Icon icon="nimbus:edit" width="40px"/>Digite uma mensagem explicando porque o seu site está offline.</h2>
                <input 
                    type="text" 
                    placeholder="Mensagem de status do site"
                    value={options.offlineMessage}
                    onChange={e => setOptions({ ...options, offlineMessage: e.target.value })}
                    tw="border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full"
                />
            </Option>


            <Option label="Título do site" width="27%">
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
                    onChange={(list) => { setOptions( {...options, socialOnContact: list } ) }} />}
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
            <Option label="Video da seção sobre nós" width="50vw">
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

       <Section title='Informações de Contato'>
            <Option label="Telefone" width="40%">
                <input 
                type="text" 
                placeholder="Telefone"
                value={options.telefone}
                onChange={e => setOptions({ ...options, telefone: e.target.value })}
                tw="border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full"
                />
            </Option>
            <Option label="Endereço" width="40%">
                <input 
                type="text" 
                placeholder="Endereço"
                value={options.endereco}
                onChange={e => setOptions({ ...options, endereco: e.target.value })}
                tw="border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full"
                />
            </Option>
            <Option label="Bairro" width="40%">
                <input 
                type="text" 
                placeholder="Bairro"
                value={options.bairro}
                onChange={e => setOptions({ ...options, bairro: e.target.value })}
                tw="border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full"
                />
            </Option>
            <Option label="Cidade" width="40%">
                <input 
                type="text" 
                placeholder="Cidade"
                value={options.cidade}
                onChange={e => setOptions({ ...options, cidade: e.target.value })}
                tw="border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full"
                />
            </Option>
            <Option label="Estado" width="40%">
                <input 
                type="text" 
                placeholder="Estado"
                value={options.estado}
                onChange={e => setOptions({ ...options, estado: e.target.value })}
                tw="border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full"
                />
            </Option>
            <Option label="Email Principal" width="40%">
                <input 
                type="email" 
                placeholder="Email Principal"
                value={options.emailPrincipal}
                onChange={e => setOptions({ ...options, emailPrincipal: e.target.value })}
                tw="border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full"
                />
            </Option>
            <Option label="Email para Vagas" width="40%">
                <input 
                type="email" 
                placeholder="Email para Vagas"
                value={options.emailVagas}
                onChange={e => setOptions({ ...options, emailVagas: e.target.value })}
                tw="border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full"
                />
            </Option>
            <Option label="Copyright" width="40%">
                <input 
                type="text" 
                placeholder="Copyright"
                value={options.copyright}
                onChange={e => setOptions({ ...options, copyright: e.target.value })}
                tw="border border-slate-200 p-2 rounded-lg bg-white shadow-lg w-full"
                />
            </Option>
            <Option label="Desenvolvido por" width="40%">
                <input 
                type="text" 
                placeholder="Desenvolvido por"
                value={options.devby}
                onChange={e => setOptions({ ...options, devby: e.target.value })}
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
    <section tw="p-4 rounded-lg bg-gray-50/50 mx-auto my-4 shadow-lg w-[clamp(300px, 80%, 1024px)]
                 duration-300 hover:(bg-gray-50 duration-300) grid place-content-center place-items-center"
             css="border: 1px solid white;"
            >
        <h2 tw='text-slate-900 font-thin mt-4 mb-12 flex items-center gap-4 text-3xl lowercase [text-shadow: 2px 2px 5px white;]'>
            <Icon icon={icon} tw="text-red-500" width="40px"/> {title}
        </h2>
        <div tw="flex flex-row flex-wrap gap-2">
            {children}
        </div>
    </section>
  )
}

const Option = ({ label, width, children }) => {
    return (
        <div css={[
                tw`flex flex-col gap-2 px-6 py-4 bg-white rounded-md shadow-md mb-2 h-fit min-w-[250px]`,
            ]}
            style={{width: width ? width : '27%'}}
            >
            <div tw="flex w-full items-center gap-1 mb-2">
                <Icon icon="fa:cog" tw="text-red-400" width="24px"/><p tw="text-red-400 font-bold uppercase">{label}</p>
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
  