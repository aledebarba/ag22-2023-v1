import "./index.css"
import RenderInterface from "./components/render";

const blockOptions = {    
        name: "contato",
        attributes: {
            rotulo:     { type: "string", default: "" },
            icone:      { type: "string", default: "" },
            link:       { type: "string", default: "" },  
        },
        layout:[
            { ref: "rotulo", type: "textControl", label: "O texto que aparece dentro do botão que aciona essa forma de contato", width:"50%" },
            { ref: "icone", type: "icon", label: "Selecione o código do icone que deve aparecer dentro do btoão", width:"30%" },
            { ref: "link", type: "textControl", label: "O link que deve ser aberto quando o usuário clicar nesse botão. Ex: mailto:'contato@empresa.com'", width:"100%" },
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

