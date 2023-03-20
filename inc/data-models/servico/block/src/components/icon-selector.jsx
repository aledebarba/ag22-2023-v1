import tw from 'twin.macro';
import { useEffect, useState } from 'react';
import { Icon } from "@iconify/react";

export const IconSelector = ( { value="dashicons:superhero", onChange, color="#000" } ) => {
    
    const [icon, setIcon] = useState( value );

    return (
        <div>
            { icon && <Icon icon={icon} size="60" style={{ color: color }}/> }
            <input 
                type="text" 
                value={icon} 
                onChange={ (e) => { 
                    setIcon( e.target.value ) 
                    onChange( e.target.value )
                    }
                }/>
            <button>
                <a href="https://iconify.design/icon-sets/" target="_blank">Procurar código do ícone</a>
            </button>
            <button onClick={setIcon("")}>
                <Icon icon="bi:trash-fill"/>&nbsp;Remover ícone
            </button>
        </div>
    )

}