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
        gallery:        { type: "array",  default: [] },
    },

    layout: [
        {   
            ref: "showEndGallery", 
            label: "Marque essa opção em <strong>sim</strong> caso queira que a galeria de imagens do projeto seja exibida", 
            type: "switcher", 
            title: "Mostrar galeria no final?",
            switcherTrue: "Sim",
            switcherFalse: "Não",
            width: "50%",           
        },  
        {
            ref: "gallery",
            type: "media-gallery",
            title: "Galeria do projeto",
            label: "Conjunto de imagens, mostrada no final da página do projeto, antes do rodapé.",
            icon: "bi:grid-3x2-gap-fill",
            width: "100%",
            addnew: true,
            cols: { sm: 1, md: 2, lg: 4 },
            condition: (attributes) => attributes.showEndGallery 
        },
        
        { 
            ref: "content",    
            title: "Descrição do projeto", 
            label: "Essa descrição é usada para criar a página detalhada do projeto. Você pode utilizar a barra de ferramentas para formatar o texto e inserir imagens, vídeos, etc.",
            type: "richText", 
        },

        { 
            ref: "poster",     
            title: "Poster do projeto",
            label: "Imagem que aparece em links para esse projeto, cabeçalho desse projeto, poster de vídeos (quando o vídeo falha)." ,
            type: "imageSelect", 
         },

        { 
            ref: "logo",  
            title: "Logo do cliente",   
            label: "Logo da empresa contratante desse projeto ou equivalente. Essa imagem só aparece na página de projetos.", 
            type: "imageSelect", 
            width: "100%",
         },
       
        { 
            ref: "category",   
            title: "Categoria do projeto",
            label: "Série de categorias que o projeto pertence. Essa informação é usada para filtrar os projetos.", 
            type: "textControl", 
        },
        
        { 
            ref: "headerType",
            title: "Tipo de header",  
            label: "Selecione o tipo de elemento central no cabeçalho do projeto.", 
            type: "select", 
            options: [ 
                { label: "Imagem", value: "Imagem" },
                { label: "Slides", value: "Slides" },
                { label: "Video", value: "Video" },
            ] 
        },
        
        {   
            ref: "image",      
            title: "Imagem do cabeçalho",
            label: "Essa imagem é utilizada como cabeçalho do projeto e aparece na landing page do site.", 
            type: "imageSelect", 
            width: "clamp(280px, 40vw, 80%",
            condition: (attributes) => attributes.headerType === "Imagem" 
        }, 

        {   
            ref: "slides",     
            title: "Mídia do slider do projeto",
            label: "Selecione a mídia que será usada no slider do projeto. Você pode selecionar imagens, vídeos, etc. <strong>ATENÇÃO</strong>: Muitos vídeos podem comprometer a performance da página.", 
            type: "media-gallery", 
            cols: { sm: 1, md: 2, lg: 4 },
            width: "100%", 
            condition: (attributes) => attributes.headerType === "Slides" 
        },

        {   
            ref: "videoOrigin",
            title: "Origem do vídeo",
            label: "Selecione a origem do vídeo (de onde o vídeo será carregado, se uma URL da web ou um arquivo que você carregou no site).",
            type: "select",
            options: [
                { label: "URL (endereço da web)", value: "url" },
                { label: "Arquivo (upload)", value: "file" },
            ],
            condition: (attributes) => attributes.headerType === "Video"
        },

        {   
            ref: "video",      
            title: "Selecione o vídeo para o cabeçalho", 
            label: "Você pode selecionar um vídeo da galeria ou fazer upload. Observe os limites de tamanho de arquivo antes de enviar o seu vídeo.", 
            type: "videoSelect", 
            condition: (attributes) => attributes.headerType === "Video" && attributes.videoOrigin === "file"
        },
        {
            ref: "videoUrl",
            title: "Cole a URL do vídeo",
            label: "Cole a URL do vídeo que você deseja usar como cabeçalho do projeto.",
            type: "videoUrl",
            condition: (attributes) => attributes.headerType === "Video" && attributes.videoOrigin === "url"
        },        
        {   
            ref: "resumo",     
            title: "Resumo do projeto",
            label: "Resumo do projeto, usado para exibir uma breve descrição para usar em páginas que listam projetos para referência rápida do seu conteúdo.", 
            type: "richText", 
            width: "100%"
        },
    ],

    grid: { 
            cols: { sm: 12, md: 12, lg: 12 },
            rows: "auto",
            items: [
                {
                    id: "grid-separator-1",
                    type: "separator",
                    title: "Informações básicas",
                    icon: "ph:info-bold",
                    pos:   { x1: 1, y: 1, x2: 12, y2: 2 },
                    posmd: { x1: 1, y: 1, x2: 12, y2: 2 },
                    poslg: { x1: 1, y: 1, x2: 12, y2: 2 },
                },
                { 
                    id: "grid-item-1-2",
                    type: "data",
                    icon: "fluent:form-24-filled",
                    pos:   { x1: 1, y1: 1, x2: 5, y2: 2 },
                    posmd: { x1: 1, y1: 1, x2: 5, y2: 2 },
                    poslg: { x1: 1, y1: 1, x2: 5, y2: 2 },
                    layouts: ["poster", "logo"],
                },
                { 
                    id: "grid-item-1-3",
                    type: "data",
                    icon: "fluent:form-24-filled",                    
                    pos:   { x1: 5, y1: 1, x2: 13, y2: 2 },
                    posmd: { x1: 5, y1: 1, x2: 13, y2: 2 },
                    poslg: { x1: 5, y1: 1, x2: 13, y2: 2 },
                    layouts: ["content",  "resumo", "category" ],
                },
                
                {
                    id: "grid-separator-2",
                    type: "separator",
                    title: "Header do post",
                    icon: "ph:info-bold",
                    pos: { x1: 1, y: 1, x2: 12, y2: 2 },
                    posmd: { x1: 1, y: 1, x2: 12, y2: 2 },
                    poslg: { x1: 1, y: 1, x2: 12, y2: 2 },
                },
            
            {
                id: "grid-item-2",
                type: "data",
                pos: { x1: 1, y: 2, x2: 5, y2: 3 },
                posmd: { x1: 1, y: 2, x2: 5, y2: 3 },
                poslg: { x1: 1, y: 2, x2: 5, y2: 3 },
                layouts: [ "headerType", "videoOrigin" ],
                hfit: true,
            },
            {
                id: "grid-item-3",
                type: "data",
                pos: { x1: 5, y: 2, x2:13, y2: 3 },
                posmd: { x1: 5, y: 2, x2:13, y2: 3 },
                poslg: { x1: 5, y: 2, x2:13, y2: 3 },
                layouts: [ "videoUrl", "video", "image", "slides" ],
            },
            {
                id: "grid-item-4",
                type: "data",
                hfit: true,
                pos: { x1: 1, y: 3, x2: 4, y2: 4 },
                posmd: { x1: 1, y: 3, x2: 4, y2: 4 },
                poslg: { x1: 1, y: 3, x2: 4, y2: 4 },
                layouts: ["showEndGallery"],
            },
            {
                id: "grid-item-5",
                type: "data",
                pos: { x1: 4, y: 3, x2: 13, y2: 4 },
                posmd: { x1: 4, y: 3, x2: 13, y2: 4 },
                poslg: { x1: 4, y: 3, x2: 13, y2: 4 },
                layouts: ["gallery"],
            },            
        ]   
    }
}

wp.blocks.registerBlockType(`superblock/${blockOptions.name}`, {
    title: capitalize(blockOptions.name),
    icon: "superhero-alt",
    category: "superblock",
    apiVersion: 2,
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