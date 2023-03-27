import "../index.css";
import tw from "twin.macro";
import { useState, useEffect } from "react";
import{ RichTextField } from "./rte";
import { TextControl, TextareaControl, ColorControl, SelectControl, Button } from "@wordpress/components";
import { CustomImageSelect, CustomVideoSelect, MediaGalleryButton } from "./wpmediagal/media-gallery-button";
import { Icon } from '@iconify/react';
import Switch from 'react-switch';
import ReactPlayer from "react-player/lazy";

const RenderInterface = ( props, blockOptions ) => {

    const [attributes, setAttributes] = useState(props.attributes);
    const isfixedToolbar = wp.data.select( 'core/edit-post' ).isFeatureActive( 'fixedToolbar' );
    
    useEffect(() => {
        setAttributes(props.attributes);
    }, [props.attributes]);

    useEffect(() => {
        if ( !isfixedToolbar ) {
            wp.data.dispatch( 'core/edit-post' ).toggleFeature( 'fixedToolbar' );   
        }
    },[]);

    
    const onChange = (attribute, value) => {
        props.setAttributes({ [attribute]: value });
    };
    
    const handleSelectImages = (  attributeName, images  ) => {
        console.log( attributeName, images )
        props.setAttributes( { [attributeName]: images.map( image => {
            return ({ url: image.url, id: image.id, alt: image.alt })
        } ) });
    }

    return <>    
        <div tw={"w-[full] h-fit overflow-visible relative"} >            
            <div css={[
                tw`left-1/2 -translate-x-1/2 absolute top-0 p-4 bg-blue-100/30 h-fit flex gap-8 flex-wrap border-b-[10vh] border-b-white box-border`,
                tw`w-screen sm:(w-[95vw]) md:(w-[80vw] lg:(w-[65vw]))`
                ]}
            >
            { Object.keys(props.attributes).map( (attribute, index) => {
            
            // find the layout for this attribute
                const layout = blockOptions.layout.find( (layout) => layout.ref === attribute );

                if( !layout ) return null;

                // se a condição para exibir o layout não for verdadeira, não renderiza
                // isso permite renderizar uma parte do layout em função de um atributo, função ou condição específica
                // ex: se a moeda for Dólar, não renderiza o campo de valor em reais             
                if( layout.condition !== undefined ) {
                    if( !layout.condition(attributes) ) return null;
                }
                // render the layout
                return (
                    <div
                        css={`
                            flex: 1 0 ${layout.width};
                        `}
                        key={`key-${index}`} >
                        
                        { 
                            layout.label 
                            ? <div css={
                                [
                                    tw`text-sky-700 text-sm py-4 pl-0`,
                                    layout?.top === "line" ? tw`border-t border-sky-700` : null
                                ]
                            }>
                                <div tw="pl-2 border-l border-l-blue-500 h-[5ch] border-dashed grid items-center max-h-[5ch] overflow-y-hidden">
                                    <div dangerouslySetInnerHTML={ { __html: layout.label } } />                            
                                </div>
                            </div>
                            : null 
                        }

                        {layout.type === "textControl" && (
                            <TextControl
                                className="w-full"
                                value={attributes[attribute]}
                                onChange={(value) => onChange(attribute, value)}
                            />
                        )}

                        {layout.type === "videoUrl" && (<>
                            <TextControl
                                className="w-full"
                                value={attributes[attribute]}
                                onChange={(value) => onChange(attribute, value)}
                            />
                                <ReactPlayer
                                    url={attributes[attribute]}
                                    width="100%"
                                    controls={true}
                                    playing={false}
                                    loop={false}
                                    muted={false}
                                />
                        </>)}
                                    
                        {layout.type === "icon" && (
                            <>
                                <div tw="flex flex-col gap-2">
                                    <Icon
                                        icon={attributes[attribute]}
                                        width="56px"
                                    />
                                    <TextControl
                                        value={attributes[attribute]}
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
                            </>
                        )}


                        {layout.type === "imageSelect" && (
                            <CustomImageSelect
                                media={attributes[attribute]}
                                setMedia={(media) => onChange(attribute, media.url)}
                                fit="cover">                           
                            </CustomImageSelect>
                        )}

                        {layout.type === "videoSelect" && (
                            <CustomVideoSelect
                                media={attributes[attribute]}
                                setMedia={(media) => onChange(attribute, media.url)}
                                fit="cover"
                                >
                            </CustomVideoSelect>
                        )}

                        {layout.type === "colorControl, SelectControl" && (
                            <ColorControl
                                className="w-full"
                                value={attributes[attribute]}
                                onChange={(value) => onChange(attribute, value)}
                            />
                        )}

                        {layout.type === "selectControl" && (
                            <SelectControl
                                className="w-full"
                                value={attributes[attribute]}
                                onChange={(value) => onChange(attribute, value)}
                                options={attributes[attribute].options}
                            />
                        )}

                        {layout.type === "textareaControl" && (
                            <TextareaControl
                                value={attributes[attribute]}
                                onChange={(value) => onChange(attribute, value)}
                            />
                        )}


                        { layout.type === "imageGallery" && (<>
                            <div tw="sm:(grid-cols-3) md:(grid-cols-4) w-full min-h-[20vh] p-0 grid grid-cols-2 gap-4 box-border ">
                                { attributes[attribute].map( (item, index) => (
                                <div key={`item-image-key-${index}`}>
                                    <div css={[`
                                        width: 100%;
                                        padding-top: 100%;
                                        position: relative;   
                                        border: 1px solid #888;
                                        box-sizing: border-box;
                                        border-radius: 4px;                                 
                                    `]}>
                                        <img src={item.url} alt={item.alt} 
                                            css={`
                                                width: 90%;
                                                height: 90%;
                                                object-fit: cover;
                                                position: absolute;
                                                top: 50%; left: 50%;
                                                transform: translate(-50%, -50%);
                                                box-sizing: border-box;
                                            `}    
                                        />
                                        <div tw="absolute top-[0.5rem] right-[0.5rem] text-white bg-sky-500 rounded-md shadow-md hover:(bg-sky-600 text-white)">
                                            <Button // delete image button
                                                tw="text-white hover:(text-white)" 
                                                icon="trash" 
                                                text=""
                                                label="Remover essa imagem"
                                                onClick={() => {
                                                    let images =  attributes[attribute]
                                                    //let images = attribute; 
                                                    images.splice(index, 1); 
                                                    handleSelectImages( attribute, images )
                                                }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}                                
                                    <MediaGalleryButton 
                                        media={ props.attributes[attribute].map( media => media.id ) }
                                        setMedia={ ( images )=> { handleSelectImages( attribute, images ) }}
                                        multiple={true}
                                        mode="browse"
                                        button="link"
                                        text="+"
                                    />
                                
                            </div>                                        
                        </>)}

                        { 
                            layout.type === "switcher" && <div tw="flex items-center ml-2">
                                <Switch onChange={(value) => onChange(attribute, value)} checked={attributes[attribute]} />
                                { layout?.switcherTrue  && attributes[attribute]  && <span tw="ml-2">{ layout.switcherTrue  } </span> }
                                { layout?.switcherFalse && !attributes[attribute] && <span tw="ml-2">{ layout.switcherFalse } </span> }
                            </div>
                        }                                                        
                        
                        { layout.type === "selectControl" && <>
                            <SelectControl
                                className="w-full"
                                value={attributes[attribute]}
                                onChange={(value) => onChange(attribute, value)}
                                options={ layout.options }
                            />
                        </>}



                        {layout.type === "richText" && (
                            <div 
                                css={[
                                    tw`w-full bg-white border border-gray-300 rounded-sm p-4 text-xl text-black`,
                                    `
                                        box-sizing: border-box;
                                        box-shadow: 2px 2px 5px -1px #0003;
                                        height: calc( 100% - 5ch - 4rem );   
                                        min-height: 8rem;  
                                        overflow-y: scroll;  
                                        line-height: 1.8em;  
                                        
                                        
                                        div p { line-height: 1.5em;}
                                        [data-rich-text-placeholder]{
                                            color: #888;
                                        }
                                    `
                                ]}>
                                <RichTextField value={attributes[attribute]} onChange={ (value) => onChange(attribute, value) } />
                            </div>
                        )}


                        <div
                            css={[
                                layout?.bottom === "line" ? tw`border-b border-sky-700 my-4` : null,
                            ]}
                        ></div>
                    </div>
                );})}
            </div>                      
        </div>       
    </>       
};

export default RenderInterface