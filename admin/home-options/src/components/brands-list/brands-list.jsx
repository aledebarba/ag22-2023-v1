import { useEffect } from "react";
import { useState } from "react"
import apiFetch from "@wordpress/api-fetch";
import { ReactSortable } from "react-sortablejs";
import tw from "twin.macro";

export const BrandsList = ( { options, setOptions } ) => {
 
    const [ brandList, setBrandList ] = useState( [] );
    useEffect(()=>{
        if( options.BrandsList === undefined || options.BrandsList.length === 0 ) {
            const path="database/v1/clientes";
            apiFetch({path}).then( (data) => {
                console.log( data );
                setBrandList( data )

            } );    
        } else {
            setBrandList( options.BrandsList )
        }
    },[])

    const handleChangeOrder = (newList) => {
        setBrandList( newList );
        setOptions( {...options, BrandsList: newList } )
    }

    if( brandList === undefined || brandList.length === 0 ) return <>Loading...</>;

    return <div>
         <ReactSortable
            list={ brandList }
            setList={ handleChangeOrder }
            animation={150}
            ghostClass="dropArea"
            handle=".dragHandle"
            filter=".ignoreDrag"
            preventOnFilter={true}
            className="sortable-grid"
            tw="grid grid-cols-4 gap-4 auto-rows-auto"
            >
            { brandList.map( item => <div key={item.id} className="relative grid-item dragHandle grid place-content-center place-items-center">
                    <div tw="box-border h-40 bg-gray-200 bg-no-repeat [background-size:80%] bg-center rounded-lg cursor-grab [box-shadow: 3px 3px 10px -3px black]"
                    style={{ backgroundImage: `url(${item.data.logo})`}}/>
            </div> ) }                    
        </ReactSortable>
    </div>

}