import { useEffect } from "react";
import { useState } from "react"
import apiFetch from "@wordpress/api-fetch";
import { ReactSortable } from "react-sortablejs";
import tw from "twin.macro";

export const ServicesList = ( { options, setOptions } ) => {
 
    const [ serviceList, setServiceList ] = useState( [] );

    useEffect(()=> {

        if( options.ServicesList === undefined || options.ServicesList.length === 0 ) {
            const newServicesList = getServices().then( (data) => data );
            setServiceList( newServicesList )
        } else {
            const dataBase = getServices().then( (data) => {
                const newServicesList = combineArrays( options.ServicesList, data );
                setServiceList( newServicesList )            
            })
        }
    },[])

    const handleChangeOrder = (newList) => {
        setServiceList( newList );
        setOptions( {...options, ServicesList: newList } )
    }

    if( serviceList === undefined || serviceList.length === 0 ) return <>Loading...</>;



    return <div 
                css={`
                    .dropArea {
                        position: relative;
                    }

                    .dropArea::before {
                        content: '';
                        position: absolute;
                        z-index: 1;
                        width: 100%;
                        height: 100%;
                        background-color: darkred;
                    }  
                `}
         >
         <ReactSortable
            list={ serviceList }
            setList={ handleChangeOrder }
            animation={150}
            ghostClass="dropArea"
            handle=".dragHandle"
            filter=".ignoreDrag"
            preventOnFilter={true}
            className="sortable-grid"
            tw="grid grid-cols-4 gap-8 auto-rows-auto"
            >
            { serviceList.map( (item, index) => {
                //upgrade the image to https
                const itemImage = `url(${item.data.image.replace("http://", "https://")})`
                return (
                    <div key={item.id} className="relative grid-item dragHandle grid place-content-center place-items-center">
                        <div 
                             tw="box-border h-40 bg-gray-200 bg-no-repeat bg-center rounded-lg cursor-grab [box-shadow: 3px 3px 10px -3px black] grid place-content-center"
                             style={{ backgroundImage: itemImage, backgroundSize: "cover", outline: index < 4 ? "3px solid tomato" : "none" }}
                        >
                            <div tw="text-white bg-gray-500/80 py-2 px-4 text-2xl rounded border-solid border-2 border-gray-200">
                                {item.title}
                            </div>
                        </div>
                    </div> 
                )})}                    
        </ReactSortable>
    </div>
}

function getServices() {
    const path="database/v1/servicos";    
    const servicesList = apiFetch({path}).then( (data) => {
        return data
    });
    return servicesList
}

function combineArrays (options, database) {
    console.log( options, database )
    let dbIds = database.map(item => item.id)
    let inter = options.filter(item => dbIds.includes(item.id))
    let interIds = inter.map(item => item.id)
    let diff = database.filter(item => !interIds.includes(item.id))
    let result = [...inter, ...diff]
    return result
  
  }