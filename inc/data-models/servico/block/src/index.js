//import "./index.css";
import RenderInterface from "./components/render";

const blockOptions = {    
    name: "servico",
    attributes: {
        desc:    { type: "string", default: "" },
        image:   { type: "string", default: "" },
        icone:   { type: "string", default: "" },
        svg:     { type: "string", default: "cole aqui o código SVG" },
    },
    layout:[
        { 
            ref: "desc",  
            type: "richText", 
            title: "Descrição",
            label: "Adicione aqui descrição sucinta sobre o serviço.", 
        },
        { 
            ref: "image", 
            type: "imageSelect", 
            title: "Imagem",
            label: "Em alguns casos, talvez seja usada uma imagem. Selecione ela aqui.", 
        },
        { 
            ref: "icone", 
            type: "icon", 
            title: "Ícone",
            label: "O código do ícone que será usado para representar visualmente o serviço.", 
        },
        { 
            ref: "svg",   
            title: "Imagem SVG",
            type: "textareaControl", 
            label: "Ao invés do ícone, pode-se usar um código SVG.", 
        },
    ],        
    grid: { 
        cols: { sm: 12, md: 12, lg: 12 },
        rows: "auto",
        items: [
            {
                id: "g1-0",
                type: "separator",
                title: "Informações do serviço",
                pos:   { x1: 1, x2: 12 },
                posmd: { x1: 1, x2: 12},
                poslg: { x1: 1, x2: 12}
            },
            {
                id: "g2-0",
                type: "data",                
                pos:   { x1: 1, x2: 13 },
                posmd: { x1: 1, x2: 13 },
                poslg: { x1: 1, x2: 13 },
                layouts: ["desc"],
            },
            {
                id: "g3-0",
                type: "data",                
                pos:   { x1: 1, x2: 5 },
                posmd: { x1: 1, x2: 5 },
                poslg: { x1: 1, x2: 5 },
                layouts: ["image"],
            },
            {
                id: "g3-0",
                type: "data",                
                pos:   { x1: 5, x2: 9 },
                posmd: { x1: 5, x2: 9 },
                poslg: { x1: 5, x2: 9 },
                layouts: ["icone"],
            },
            {
                id: "g3-0",
                type: "data",                
                pos:   { x1: 9, x2: 13 },
                posmd: { x1: 9, x2: 13 },
                poslg: { x1: 9, x2: 13 },
                layouts: ["svg"],
            },
        ]
    }
}

wp.blocks.registerBlockType("superblock/"+blockOptions.name, {
    title: capitalize(blockOptions.name),
    icon: "superhero-alt",
    category: "superblock",
    apiVersion: 2,
    supports: {
        lock: false,
        html: false,
    },
    attributes: blockOptions.attributes,    
    edit: (props) => RenderInterface(props, blockOptions),
    save: function (props) {
        return null;
    },
});

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}