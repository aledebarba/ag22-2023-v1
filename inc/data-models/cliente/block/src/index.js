import "./index.css";
import RenderInterface from "./components/render";


const blockOptions = {
        name: "cliente",
        attributes: {
            link:   { type: "string", default: "" },  
            logo:   { type: "string", default: "" },
            info:   { type: "string", default: "" },
        },
        layout:[
            { ref: "link", type: "textControl", label: "O link para onde o usuário deve seguir caso clieque na marca do cliente. (ou deixe vazio para não criar um link)", width:"60%" },
            { ref: "logo", type: "imageSelect", label: "A marca do cliente que vai aparcer na seção de clientes", width:"30%" },
            { ref: "info", type: "richText", label: "Alguma informação sobre o cliente que vai aparecer quando o usuário passar o mouse por cima da marca", width:"100%" },
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
    edit: (props) => RenderInterface( props, blockOptions ),
    save: function (props) {
        return null;
    },
});
