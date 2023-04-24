import "../index.css";
import tw from "twin.macro";
import Switch from 'react-switch';
import ReactPlayer from "react-player/lazy";
import { Icon } from '@iconify/react';
import { Sortable } from "./sortable-grid";
import { RichTextField } from "./rte";
import { useState, useEffect } from "react";
import { CustomVideoSelect, MediaGalleryButton } from "./wpmediagal/media-gallery-button";
import { TextControl, TextareaControl, SelectControl, Button } from "@wordpress/components";
import { createHeadStyles } from "./utils";
import { SelectImageFromWPMediaLib } from "./media-controls";

const RenderInterface = ( props, blockOptions ) => {
    
    const grid = blockOptions.grid 
        ? blockOptions.grid 
        : {        
            cols: 1,
            rows: "auto",
            items: [
                {
                    id: "all-items",
                    pos: { x1: 1, y1: 1, x2: 2, y2: 2 },
                    layouts: blockOptions.layout.map( layout => layout.ref )
                }
            ]
        }

        useEffect(() => {
            const isfixedToolbar = wp.data.select( 'core/edit-post' ).isFeatureActive( 'fixedToolbar' );
            if ( isfixedToolbar ) {
                wp.data.dispatch( 'core/edit-post' ).toggleFeature( 'fixedToolbar');
            }
            wp.data.dispatch( 'core/preferences' ).set("core/edit-post", { "fullScreenMode": false } );
            wp.data.dispatch("core/edit-post").closeGeneralSidebar();
            useFixedToolbar();
        },[]);



    const [ attributes, setAttributes ] = useState( props.attributes );
    useEffect(() => {
        props.setAttributes( attributes );
    }, [ attributes ] );
    
    const onChange = ( attribute, value ) => {
        const newAttributes = { ...attributes, [attribute]: value };
        setAttributes( newAttributes );        
    };
    
    const handleSelectImages = (  attributeName, media  ) => {
        props.setAttributes( { [attributeName]: media.map( mediaItem => {
            return ({ url: mediaItem.url, id: mediaItem.id, alt: mediaItem.alt, type: mediaItem.type })
        } ) });
    }

    if(!attributes) return null;

    return (

    <StyledRenderInterface data-info="content-edit-area" grid={grid}>                   
        { grid.items.map( ( gridItem, index) => 
            <InterfaceItem
                key={`grid-item-key-${index}`}   
                gridItem={gridItem}                                                                  
            >
            { 
                gridItem?.type === "separator" && <div className="separator" >
                    <div>{gridItem.title}</div> 
                </div>
            }
            { gridItem?.type === "data" && gridItem.layouts.map ( ( layoutName, index ) => {

                const layout = blockOptions.layout.find( layout => layout.ref === layoutName );
                const attribute =  layout.ref;
                const attributeValue = attributes[attribute];
                const isActionLayout = layout.type === "switcher" || layout.type === "link" || layout.type === "button" || layout.type === "siteref";

                if( layout === undefined ) return null;
                if( layout.condition !== undefined && !layout.condition(attributes) ) return null;
            
                return <div 
                        css={`
                            animation: fadeIn 0.3s ease-in forwards;
                            @keyframes fadeIn {
                                from { opacity: 0; }
                                to   { opacity: 1; }
                            }
                        `}
                    >
                    <div className="layoutTitle">
                        <div data-info="little dot" tw="w-4 h-4 bg-gradient-to-br from-white/80 to-black/20 bg-blue-500 rounded-full self-start mt-[6px] [flex-shrink: 0]"></div>
                        {layout?.title}
                    </div>

                    <div className="layoutAction" tw="mt-4" onFocus={()=>setToolbar(false)}  >
                        {
                            layout.type === "switcher" 
                            ? <div tw="flex items-center ml-2">
                                <Switch onChange={ ( value ) => onChange( attribute, value ) } checked={ attributeValue } />
                                { layout?.switcherTrue  &&  attribute  && <span tw="ml-2">{ layout.switcherTrue  } </span> }
                                { layout?.switcherFalse && !attribute  && <span tw="ml-2">{ layout.switcherFalse } </span> }
                            </div> 
                            : layout.type === "link"
                            ? <div tw="flex items-center ml-2">
                            </div> 
                            : layout.type === "button"
                            ? <button>Test Button</button>
                            : layout.icon !== undefined
                            ? false && <Icon icon={layout.icon} width="48px" tw="text-gray-600" />
                            : null
                        }         
                    </div>
                    {
                        layout?.label && 
                        <div className="layoutLabel" dangerouslySetInnerHTML={ { __html: layout.label } } />
                    }
                
                    { // Render the data-types that is not resolved as a simple action
                        !isActionLayout && 
                        <div 
                            className="layoutProperty"
                            css={`
                                @media screen and (min-width: 1024px) {
                                    width: ${layout.width ? layout.width : "100%" };
                                }
                                width: 100%;
                            `}
                        >
                        {
                            layout.type === "media-gallery" && 
                                <Sortable.Grid
                                    items = { attributeValue }
                                    onReorder ={ (  list   ) => onChange( attribute, list) }                                
                                    cols={ layout.cols ? layout.cols.lg : 6}
                                    cols-sm={layout.cols ? layout.cols.sm : 6}
                                    cols-md={layout.cols ? layout.cols.md : 6}
                                    addnew={layout.addnew ? layout.addnew : true }
                                    trash                                    
                                />
                        }
    
                        {
                            layout.type === "textControl" && 
                                <TextControl
                                    style={{ fontSize: "1.4rem"}}
                                    value={ attributeValue }
                                    onChange={(value) => onChange(attribute, value)}    
                                    onFocus={()=>setToolbar(false)}                                                    
                                />
                        }

                        {
                            layout.type === "textareaControl" && 
                            <TextareaControl
                                style={{ fontSize: "1.4rem"}}
                                value={attributeValue}
                                onChange={(value) => onChange(attribute, value)}                            
                            />
                        }
    
                        {
                            layout.type === "videoUrl" && 
                            <div>
                                <TextControl
                                    style={{ fontSize: "1.4rem", width: "100%", borderRadius: "4px"}}
                                    value={ attributeValue }
                                    onChange={(value) => onChange(attribute, value) }
                                />
                                <ReactPlayer
                                    url={ attribute }
                                    width="100%"
                                    controls={true}
                                    playing={false}
                                    loop={false}
                                    muted={false}
                                />
                            </div>
                        }
                                        
                        {
                            layout.type === "icon" && 
                            <div tw="flex flex-col gap-2">
                                <Icon
                                    icon={attributeValue}
                                    width="56px"
                                />
                                <TextControl
                                    value={attributeValue}
                                    onChange={(value) =>
                                    onChange(attribute, value)
                                }
                                />
                                <button>
                                    <a
                                        href="https://icon-sets.iconify.design/"
                                        target="_blank"
                                        rel="noreferrer">
                                        Selecione o código do ícone
                                    </a>
                                </button>
                                <button
                                    tw="bg-red-500 text-white p-2 rounded-md"
                                    onClick={() => onChange(attribute, "")}>
                                    Clear
                                </button>
                            </div>
                        }

                        {
                            layout.type === "imageSelect" && 
                                <SelectImageFromWPMediaLib
                                    media={ attributeValue }
                                    onSelect={ (media) => onChange( attribute, media.url) }
                                    onDelete={ () => onChange( attribute, "") }
                                    onPreview={ () => console.log( "open a window modal to preview the image") } 
                                    select delete preview 
                                />                           
                        }
    
                        {
                            layout.type === "videoSelect" && 
                            <CustomVideoSelect
                                media={attribute}
                                setMedia={(media) => onChange(attribute, media.url)}
                                fit="cover"
                                />
                        }
    
                        {
                            layout.type === "select" && 
                            <SelectControl
                                style={ { fontSize: "1.4rem", width: "100%", height: "3rem"} }
                                value={ attributeValue }
                                options={ layout.options }
                                onChange={(value) => onChange( attribute, value) }
                            />
                        }
        
                        { 
                            layout.type === "imageGallery" &&  
                            <div>
                                <div tw="sm:(grid-cols-3) md:(grid-cols-4) w-full min-h-[20vh] p-0 grid grid-cols-2 gap-4 box-border ">
                                    { attributeValue.map( (item, index) => { 
                                    return(
                                    <div key={`item-image-key-${index}`}>
                                        <div css={[`
                                                width: 100%;
                                                padding-top: 100%;
                                                position: relative;   
                                                border: 1px solid #888;
                                                box-sizing: border-box;
                                                border-radius: 4px;                                                                         
                                            `]}>
                                            { item.type == "image" || (item.type == undefined && item.url !== undefined)
                                                ? <div 
                                                style={{ backgroundImage: `url(${item.url})` }} 
                                                alt={item.alt} 
                                                css={`
                                                        background-size: contain;
                                                        background-position: center;
                                                        background-repeat: no-repeat;
                                                        position: absolute;
                                                        top: 0;
                                                        left: 0;
                                                        width: 100%;
                                                        height: 100%;
                                                        transform: scale(0.95);
                                                    `}    
                                                /> 
                                                : item.type == "video"
                                                ? <div tw="absolute top-[25%]">
                                                    <video src={item.url} alt={item.alt} muted controls />
                                                    </div>
                                                : <div>Media Type Error</div>
                                            }
        
                                                <div tw="absolute top-[0.5rem] right-[0.5rem] text-white bg-sky-500 rounded-md shadow-md hover:(bg-sky-600 text-white)">
                                                <Button // delete image button
                                                    tw="text-white hover:(text-white)" 
                                                    icon="trash" 
                                                    text=""
                                                    label="Remover essa imagem"
                                                    onClick={() => {
                                                        let images =  attribute
                                                        //let images = attribute; 
                                                        images.splice(index, 1); 
                                                        handleSelectImages( attribute, images )
                                                    }} />
                                                </div>
                                            </div>
                                        </div>
                                    )})}
                                    <MediaGalleryButton 
                                        media={ props.attribute.map( media => media.id ) }
                                        setMedia={ ( images )=> { handleSelectImages( attribute, images ) }}
                                        multiple={true}
                                        mode="browse"
                                        button="link"
                                        text="+"
                                    />                                
                                </div>                                        
                            </div>
                        }                        
                        {
                            layout.type === "richText" && 
                            <div 
                                css={[
                                    tw`w-full bg-white border border-gray-300 rounded-sm p-4 text-xl text-black`,
                                    `
                                            box-sizing: border-box;
                                            box-shadow: 2px 2px 5px -1px #0003;
                                            height: calc( 100% - 5ch - 4rem );   
                                            min-height: 8rem;  
                                            overflow-y: scroll;  
                                            line-height: 1.4rem;  
                                            
                                            div p { line-height: 1.5em;}
                                            [data-rich-text-placeholder]{
                                                color: #888;
                                            }
                                        `
                                ]}>
                                <RichTextField 
                                    value={attributeValue} 
                                    onChange={ (value) => onChange(attribute, value) }     
                                />
                            </div>
                        }
                        </div> 
                    }
                </div> 
            })}
            </InterfaceItem> 
            )}
    </StyledRenderInterface>       
)};

const StyledRenderInterface = ( { children, grid } ) => {
    const bg = "#ececec";
    document.body.style.backgroundColor = bg;
    
    //NOTE: This is a hack to remove the default editor styles  
    createHeadStyles( "editor-styles-overrides", `
        .editor-styles-wrapper{ background-color: ${bg} }
        
        .edit-post-visual-editor__post-title-wrapper h1 { 
            color: #282828; 
            line-height: 1.2;
            padding: 12px !important;
        } 
        .edit-post-visual-editor__post-title-wrapper { 
        } 

        .edit-post-header-toolbar .edit-post-header-toolbar__left>.components-button.has-icon, 
        .edit-post-header-toolbar .edit-post-header-toolbar__left>.components-dropdown>.components-button.has-icon {            
            display: none;
        }

        @media (min-width: 640px) {

            .edit-post-visual-editor {
                background-color: transparent!important;
            }

            /* NOTE: Barra de edição topo da tela */
            .edit-post-header {                
                background-color: #ffffff;
                box-shadow:  -3px 5px 10px #8c8c8c;  
            }

            /* NOTE: Barra de edição topo da tela, margem direita não sobrepoe o scroll */
            #editor > div > div.edit-post-layout.is-mode-visual .edit-post-header {
                margin-right: 32px;
                margin-top: 0px;
                margin-left: 24px;
                border-radius: 999px;
            }

            /* NOTE: Aumenta a margen direita quando o usuário abre a barra da direita */
            #editor > div > div.edit-post-layout.is-mode-visual.is-sidebar-opened .edit-post-header {
                margin-right: 300px;
            }

            .interface-navigable-region, 
            .interface-interface-skeleton__header,
            .interface-interface-skeleton__body {
                background-color: transparent !important;
            }

            .interface-interface-skeleton__content {
                padding-top: 52px;
            }

            .interface-interface-skeleton__header{
                height: 0px;               
                border-bottom: 0;
             }
           
        }

        /* NOTE: Lista de advertências */ 
        .components-notice-list {
            display: none;
        }
        
        /* NOTE: Barra de ferramentas de contexto */
        .block-editor-block-contextual-toolbar,
        .block-editor-block-contextual-toolbar .is-fixed,
        .block-editor-block-contextual-toolbar.is-fixed {
           padding-top: 12px;
           border-radius: 999px;
           height: 64px;
           margin: 0 auto;
           box-shadow: 0 4px 8px -2px #0008;
           background-color: #ffffff;
           width: 75%;
       }
       
        /* NOTE: BOTÃO ATUALIZAR */
        .editor-post-publish-button__button[aria-disabled="false"] { 
            opacity: 1;
            background-color: orangered !important; 
        }

        /* NOTE: TITULO DO POST */
        .edit-post-visual-editor__post-title-wrapper { 
            padding-top: 3.5rem;
            margin-bottom: 0rem;
        }
        .edit-post-visual-editor__post-title-wrapper h1 { 
            border-radius: 4px;
            background: white;
            box-shadow: inset 3px 3px 4px #a5a4a4,
                        inset -4px -3px 2px #ffffff;
            padding: 2rem 1rem;
            margin: 0;
            font-weight: 300;
            text-align: left;
            width: 100%;
            position: relative;
        }            

        .edit-post-visual-editor__post-title-wrapper h1:before {
            content: "O título é a informção guia do seu conteúdo e aparece em resultados de busca, listas, páginas, cards, etc.";
            position: absolute;
            line-height: 1.2;
            white-space: wrap;
            font-size: clamp( 10px, 1.8vw, 16px);
            height: min(6ch, 12vw);
            overflow: hidden;
            left: 0.5rem;
            top: -2rem;
        }       
    `);
    
    return (
        <div css={`
            ${tw`
                relative 
                h-fit w-[90%]         
                min-w-[320px]
                max-w-[90vw]
                grid [grid-auto-rows: min-content] [grid-template-columns: repeat(12, 1fr)]
                gap-x-8 gap-y-8 
                mx-auto
            `}
        `}>
            { children }    
        </div>
    )
    
}

const InterfaceItem = ({ children, gridItem }) => {
    return <div 
        style={{
           gridColumnStart: `${ gridItem.pos.x1 }`,
           gridColumnEnd: `${ gridItem.pos.x2 }`,
        }}
        css={`
            ${gridItem.type == "data" && tw`
                rounded-[8px] from-gray-300/80 to-white/90 bg-gradient-to-r 
                p-6 
                border-solid
                [box-shadow:  
                    8px 8px 15px #b5b5b5,
                    -8px -8px 15px #ffffff]
                [border-width: 0 0 1px 2px]
                [border-color: transparent transparent #8888 #fff8]
            `}
            ${gridItem.hfit && tw`h-fit`}
            ${gridItem.type == "separator" && tw`
                mt-24 -ml-8 mb-8 pl-8 pb-4 
                border-b-2 border-white 
                text-gray-700
                font-light 
                text-2xl 
                uppercase
                tracking-wide
            `}

            .layoutTitle {
                ${tw`
                    flex items-center justify-start flex-nowrap gap-2 pb-2
                    border-solid border-b-white border-b-2                    
                    text-[clamp(0.88rem,1.3vw,1.3rem)] text-gray-700 
                    uppercase 
                `}
            }
            .layoutLabel {
                ${tw`
                    min-h-[8ch] max-h-[8ch] w-[clamp(50px, 100%, 640px)] overflow-hidden
                    text-gray-500
                    leading-tight
                    text-[clamp(16px,1.1vw,1rem)]
                    my-4
                `}
            }

            .layoutProperty {
                ${tw`
                    mb-8 
                    p-4
                    rounded-[4px]     
                    [background-image: radial-gradient(circle at center, #f8f8f8, #e8e8e8)]
                    [box-shadow:  inset -1px -1px 2px 1px #fff, inset 2px 2px 7px 0px #0008]
                `}                
                
            }
        `}
    >
        { children }
    </div>
}

  const setToolbar = ( visible ) => {  
      const isVisible = wp.data.select( 'core/edit-post' ).isFeatureActive( 'fixedToolbar' );
      
      if( isVisible && visible ) return;
      if( !isVisible && !visible ) return;
      
      wp.data.dispatch( 'core/edit-post' ).toggleFeature( 'fixedToolbar' );
 }

export default RenderInterface

function useFixedToolbar() {
    document.addEventListener('click', e => {
        const dontCloseTollbar = [ ".block-editor-block-contextual-toolbar", ".rich-text-field" ]
        const dontClose = dontCloseTollbar.some( item => e.target.closest( item ) )
        setToolbar( dontClose )        
    }, true )
}