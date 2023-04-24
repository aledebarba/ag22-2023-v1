import RenderInterface from "./components/render";

const blockOptions = {    
        name: "contato",
        attributes: {
            rotulo:     { type: "string", default: "" },
            icone:      { type: "string", default: "" },
            link:       { type: "string", default: "" },  
        },
        layout:[
            { 
                ref: "rotulo",
                type: "textControl",
                title: "Botão",
                label: "O texto que aparece dentro do botão que aciona essa forma de contato"
            },
            { 
                ref: "icone",
                type: "icon",
                title: "Ícone (código)",
                label: "Selecione o código do icone que deve aparecer dentro do btoão"
            },
            { 
                ref: "link",
                type: "textControl",
                title: "Link (URL)",
                label: "O link que deve ser aberto quando o usuário clicar nesse botão. Ex: mailto:'contato@empresa.com'"
            },
        ],  
        grid: { 
            cols: { sm: 12, md: 12, lg: 12 },
            rows: "auto",
            items: [
                {
                    id: "g1-0",
                    type: "separator",
                    title: "Informações Contato",
                    pos:   { x1: 1, x2: 12 },
                    posmd: { x1: 1, x2: 12},
                    poslg: { x1: 1, x2: 12}
                },
                {
                    id: "g2-0",
                    type: "data",                
                    pos:   { x1: 1, x2: 7 },
                    posmd: { x1: 1, x2: 7 },
                    poslg: { x1: 1, x2: 7 },
                    layouts: ["rotulo","link"],
                },
                {
                    id: "g2-0",
                    type: "data",                
                    pos:   { x1: 7, x2: 13 },
                    posmd: { x1: 7, x2: 13 },
                    poslg: { x1: 7, x2: 13 },
                    layouts: ["icone"],
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
    edit: (props) => RenderInterface( props, blockOptions ),
    save: function (props) {
        return null;
    },
});

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}