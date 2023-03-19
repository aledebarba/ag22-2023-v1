import "./index.css";
import tw from "twin.macro";
import { useState, useEffect } from "react";
import { TextControl, TextareaControl, ColorControl } from "@wordpress/components";
import { CustomImageSelect, MediaGalleryButton } from "./components/media-gallery-button";
import { Icon } from '@iconify/react';

const blockOptions = {    
    name: "projeto",
    attributes: {        
        category: { type: "string", default: ""},
        content: { type: "string", default: "" },
        resumo: { type: "string", default: "" },
        image: { type: "string", default: "" },
        poster: { type: "string", default: "" },
    },
    layout:[
        { ref: "category", label: "Categoria do projeto", type: "textControl", width: "100%" },
        { ref: "content", label: "Conteúdo / Decrição do projeto", type: "textareaControl", width: "40%" },
        { ref: "resumo", label: "Descrição sucinta do projeto, para mostrar quando ele aparecem em listas.", type: "textareaControl", width: "40%" },
        { ref: "image", label: "Imagem principal em destaque do projeto.", type: "imageSelect", width: "40%" }, 
        { ref: "poster", label: "Imagem do projeto para quando ele aparece em listas.", type: "imageSelect", width: "40%" },
    ],        
}

wp.blocks.registerBlockType("superblock/"+blockOptions.name, {
    title: "Data Model",
    icon: "superhero-alt",
    category: "superblock",
    supports: {
        lock: false,
        html: false,
    },
    attributes: blockOptions.attributes,    
    edit: (props) => RenderInterface(props),
    save: function (props) {
        return null;
    },
});


const RenderInterface = ( props ) => {
    
    const [attributes, setAttributes] = useState(props.attributes);
    
    useEffect(() => {
        setAttributes(props.attributes);
    }, [props.attributes]);
    
    const onChange = (attribute, value) => {
        props.setAttributes({ [attribute]: value });
    };
    
    return <div tw={"w-full p-4 bg-blue-100 h-fit rounded-2xl flex gap-8 flex-wrap"}>            
        { Object.keys(props.attributes).map( (attribute, index) => {
            // find the layout for this attribute
            const layout = blockOptions.layout.find( (layout) => layout.ref === attribute );
            if( !layout ) return null;

            // render the layout
            return (
                <div
                    css={`
                        flex: 1 0 ${layout.width};
                    `}
                    key={index}>
                    <div tw={"text-cyan-600 uppercase  text-sm py-4 pl-0"}>{layout.label}</div>

                    {layout.type === "textControl" && (
                        <TextControl
                            className="w-full"
                            value={attributes[attribute]}
                            onChange={(value) => onChange(attribute, value)}
                        />
                    )}
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
                            <p className="font-sans">
                                Selecione uma imagem da galeria ou faça upload
                                de uma nova.
                            </p>
                        </CustomImageSelect>
                    )}
                    {layout.type === "colorControl" && (
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
                    {layout.type === "imageGallery" && (
                        <>
                            <h3>Imagens extras</h3>
                            <div className="flex flex-wrap">
                                {attributes[attribute].map((item, index) => (
                                    <div className="extra-image" key={index}>
                                        <div className="image-container">
                                            <img
                                                src={item.url}
                                                alt={item.alt}
                                            />
                                            <div className="image-actions">
                                                <Button
                                                    icon="trash"
                                                    text=""
                                                    label="Remove essa imagem da lista"
                                                    onClick={() => {
                                                        let images =
                                                            props.attributes
                                                                .images;
                                                        images.splice(index, 1);
                                                        handleSelectImages(
                                                            images
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <MediaGalleryButton
                                    media={attributes[attribute].map(
                                        (media) => media.id
                                    )}
                                    setMedia={
                                        (media) => media.map( item => ({ id: item.id, url: item.url, alt: item.alt }) )
                                    }
                                    multiple={true}
                                    mode="browse"
                                    button="link"
                                    text="+ Adicionar Imagem Extra"
                                />
                        </>
                    )}
                </div>
            );})}
    </div>                 
};

const GalleryOfImages = ( props ) => {
    return <>
        <h3>Imagens extras</h3>
        <div className="flex flex-wrap">
            { props.attributes.images.map( (item, index) => (
                <div className="extra-image" key={index}>
                    <div className="image-container">
                        <img src={item.url} alt={item.alt} />
                        <div className="image-actions">
                            <Button 
                                icon="trash" 
                                text=""
                                label="Remove essa imagem da lista"
                                onClick={() => {
                                    let images = props.attributes.images;
                                    images.splice(index, 1); 
                                    handleSelectImages( images )
                                }} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="grid w-full h-20 text-white bg-white rounded shadow-lg place-content-center">
            <MediaGalleryButton 
                media={ props.attributes.images.map( media => media.id ) }
                setMedia={ handleSelectImages }
                multiple={true}
                mode="browse"
                button="link"
                text="+ Adicionar Imagem Extra"
            />
        </div>
    </>
}