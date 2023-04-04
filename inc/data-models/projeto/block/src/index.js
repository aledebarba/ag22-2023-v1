import RenderInterface from "./components/render";

const blockOptions = {    
    name: "projeto",

    attributes: {        
        content:        { type: "string", default: "" },
        poster:         { type: "string", default: "" },
        logo:           { type: "string", default: "" }, 
        category:       { type: "string", default: "" },
        headerType:     { type: "string", default: "" },
        image:          { type: "string", default: "" },
        videoOrigin:    { type: "string", default: "" },
        video:          { type: "string", default: "" },
        videoUrl:       { type: "string", default: "" },
        slides:         { type: "array",  default: [] },
        resumo:         { type: "string", default: "" },
        showEndGallery: { type: "boolean", default: false },
        gallery:        { type: "array",  default: []  },
    },

    layout:[

        { 
            ref: "content",    
            label: "Conteúdo / Decrição do projeto", 
            type: "richText", 
            width: "25%" 
        },

        { 
            ref: "poster",     
            label: "Imagem que aparece em links para esse projeto, cabeçalho desse projeto, poster de vídeos (quando o vídeo falha)." ,
            type: "imageSelect", 
            width: "25%" 
         },

        { 
            ref: "logo",     
            label: "Logo da empresa contratante desse projeto ou equivalente. Essa imagem só aparece na página de projetos.", 
            type: "imageSelect", 
            width: "25%" 
         },
       
        { 
            ref: "category",   
            label: "Categoria do projeto", 
            type: "textControl", 
            width: "40%" 
        },
        
        { 
            ref: "headerType",  
            label: "Selecione o tipo de cabeçalho do projeto", 
            type: "selectControl", 
            width: "40%", 
            options: [ 
                { label: "Imagem", value: "Imagem" },
                { label: "Slides", value: "Slides" },
                { label: "Video", value: "Video" },
            ] 
        },
        
        {   ref: "image",      
            label: "Imagem principal em destaque do projeto.", 
            type: "imageSelect", 
            width: "40%", 
            condition: (attributes) => attributes.headerType === "Imagem" 
        }, 

        {   ref: "slides",     
            label: "Selecione as imagens para o slideshow do cabeçalho", 
            type: "imageGallery", 
            width: "100%", 
            condition: (attributes) => attributes.headerType === "Slides" 
        },

        {   
            ref: "videoOrigin",
            label: "Origem do vídeo",
            type: "selectControl",
            width: "20%",
            options: [
                { label: "URL (endereço da web)", value: "url" },
                { label: "Arquivo (upload)", value: "file" },
            ],
            condition: (attributes) => attributes.headerType === "Video"
        },

        {   
            ref: "video",      
            label: "Selecione o vídeo para o cabeçalho", 
            type: "videoSelect", 
            width: "70%", 
            condition: (attributes) => attributes.headerType === "Video" && attributes.videoOrigin === "file"
        },
        {
            ref: "videoUrl",
            label: "URL do vídeo",
            type: "videoUrl",
            width: "70%",
            condition: (attributes) => attributes.headerType === "Video" && attributes.videoOrigin === "url"
        },        
        {   
            ref: "showEndGallery", 
            label: "Mostrar galeria de imagens no final do projeto?", 
            type: "switcher", 
            switcherTrue: "Sim",
            switcherFalse: "Não",
            width: "100%",           
        },
        {   ref: "gallery",    
            label: "Galeria de imagens do projeto", 
            type: "imageGallery", 
            width: "100%", 
            condition: (attributes) => attributes.showEndGallery 
        },

        {   
            ref: "resumo",     
            label: "<div>Descrição <strong style='text-decoration: underline;'>sucinta</strong> do projeto (<em>para usar quando ele aparece em listas</em>)</div>", 
            type: "richText", 
            width: "40%" 
    },
    ],        
}

wp.blocks.registerBlockType("superblock/"+blockOptions.name, {
    title: capitalize(blockOptions.name),
    icon: "superhero-alt",
    category: "superblock",
    supports: {
        lock: false,
        html: false,
    },
    attributes: blockOptions.attributes,    
    edit: (props) => RenderInterface( props, blockOptions ),
    save: function (props) {
        return null;
    },
});

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}