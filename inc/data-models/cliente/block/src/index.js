//import "./index.css";
import RenderInterface from "./components/render";

const blockOptions = {
        name: "cliente",
        attributes: {
            link:   { type: "string", default: "" },  
            logo:   { type: "string", default: "" },
            info:   { type: "string", default: "" },
        },
        layout:[
            { 
                ref: "link",
                type: "textControl",
                label: "O link para onde o usuário deve seguir caso clique na marca do cliente. (ou deixe vazio para não criar um link)",
                title:"Link" 
            },
            { 
                ref: "logo",
                type: "imageSelect",
                label: "A marca do cliente que vai aparcer na seção de clientes",
                title:"Marca" 
            },
            { 
                ref: "info",
                type: "richText",
                label: "Alguma informação sobre o cliente que vai aparecer quando o usuário passar o mouse por cima da marca",
                title:"Informações" 
            },
        ],
        grid: {
            cols: { sm: 12, md: 12, lg: 12 },
            rows: "auto",
            items: [
                {
                    id: "g1-0",
                    type: "separator",
                    title: "Informações Cliente",
                    pos:   { x1: 1, x2: 12 },
                    posmd: { x1: 1, x2: 12},
                    poslg: { x1: 1, x2: 12}                    
                },
                {
                    id: "g2-0",
                    type: "data",
                    layouts: [ "info", "link" ],
                    pos:   { x1: 1, x2: 7 },
                },
                {
                    id: "g2-1",
                    type: "data",
                    layouts: [ "logo" ],
                    pos:   { x1: 7, x2: 13 },
                }
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