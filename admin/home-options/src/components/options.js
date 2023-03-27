import apiFetch from "@wordpress/api-fetch";

export const fetchOptions = async () => {
    try {
        const response = await apiFetch({ 
            path: '/database/v1/global-options/' ,
            method: 'GET',
        })
        return (JSON.parse(response)); 
    } catch (error) {
        console.error("ocorreu um erro ao tentar ler as opções do site, por favor informe ao time de desenvolvimento ::: ", error); 
        return ({error: true, message: error, data: null});
    }
}

export const saveOptions = ( options ) => {
    return (
        apiFetch({ 
            path: '/database/v1/global-options/',
            method: 'POST',
            data: options
        })
        .then( onfulfilled => {
            return ( { success: true, error: false, message: "opções salvas com sucesso" } )
        })
        .catch( onrejected => {
            console.error( "ocorreu um erro ao tentar salvar as opções do site, por favor informe ao time de desenvolvimento ::: ", onrejected);
            return{ 
                error: true, 
                message: "ocorreu um erro ao tentar salvar as opções do site, por favor informe ao time de desenvolvimento"
            }
        })
    )
}

