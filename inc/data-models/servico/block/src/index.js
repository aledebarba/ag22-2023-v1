import "./index.css";
import tw from "twin.macro";
import { useState, useEffect } from "react";
import { TextControl, TextareaControl, ColorControl } from "@wordpress/components";
import { CustomImageSelect, MediaGalleryButton } from "./components/media-gallery-button";
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Icon } from '@iconify/react';

const blockOptions = {    
    name: "servico",
    attributes: {
        desc:    { type: "string", default: "" },
        image:   { type: "string", default: "" },
        icone:   { type: "string", default: "" },
        svg:     { type: "string", default: "cole aqui o código SVG" },
    },
    layout:[
        { ref: "desc",  type: "textareaControl", label: "Adicione aqui descrição sucinta sobre o serviço.", width:"45%" },
        { ref: "image", type: "imageSelect", label: "Em alguns casos, talvez seja usada uma imagem. Selecione ela aqui.", width:"45%" },
        { ref: "icone", type: "icon", label: "O código do ícone que será usado para representar visualmente o serviço.", width:"30%" },
        { ref: "svg",   type: "textareaControl", label: "Ao invés do ícone, pode-se usar um código SVG.", width:"30%" },
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

                    {/* {layout.type === "richTextEditor" && (
                        <RichText
                            tagName="div"
                            className="richtext_description"
                            value={attributes[attribute]}
                            onChange={(value) => onChange(attribute, value)}
                        />
                    )} */}
                    {layout.type === "textControl" && (
                        <TextControl
                            className="w-full"
                            value={attributes[attribute]}
                            onChange={(value) => onChange(attribute, value)}
                        />
                    )}
                    
                    {   
                        layout.type === "icon" 
                        && <IconSelectControl 
                                icon={attributes[attribute]}
                                onSelect={(value) => onChange( attribute, value) }
                        />
                    }   

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
                            style={ { maxHeight: "100vh" } }
                            value={attributes[attribute]}
                            onChange={(value) => { 
                                onChange(attribute, value)} 
                            }

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


const IconSelectControl = ({ 
    icon, 
    size = "56px", 
    onSelect, 
    label = "Encontre o código do seu ícone", 
    src = "https://icon-sets.iconify.design/", 
    selectLabel = "Pesquisar ícones", 
    selectClearLabel = "Limpar ícone" }) => {

    return <>
        <div tw="flex flex-col gap-2 w-[180px]">
            <Icon
                icon={icon}
                width={size}
            />
            <TextControl
                value={icon}
                onChange={(value)=>onSelect(value) }
            />
            <button>
                <a
                    className="button button-primary primary"
                    href={src}
                    target="_blank"
                    rel="noreferrer"
                >
                    {selectLabel}
                </a>
            </button>
            <button
                tw="bg-red-500 text-white p-2 rounded-md"
                onClick={() => onSelect("") }>
                Limpar ícone
            </button>
        </div>
    </>

}
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