import "./index.css";
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
        { ref: "desc",  type: "richText", label: "Adicione aqui descrição sucinta sobre o serviço.", width:"60%" },
        { ref: "image", type: "imageSelect", label: "Em alguns casos, talvez seja usada uma imagem. Selecione ela aqui.", width:"30%" },
        { ref: "icone", type: "icon", label: "O código do ícone que será usado para representar visualmente o serviço.", width:"30%" },
        { ref: "svg",   type: "textareaControl", label: "Ao invés do ícone, pode-se usar um código SVG.", width:"30%" },
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
    edit: (props) => RenderInterface(props, blockOptions),
    save: function (props) {
        return null;
    },
});

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}