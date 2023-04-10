import tw, {css} from "twin.macro";
import React from 'react';
import SortableGrid from "../sortable-grid";
import { Icon } from '@iconify/react';
import { useState, useEffect } from '@wordpress/element';
import { ModalList } from "./ModalList";
import { newArray } from "../utils";


export const CasesGrid = ( {options, cases, setOptions} ) => {
    
    const gridCells = options.maxCases ? options.maxCases  : 8;
    const grid = newArray( gridCells ).map( i => { return { id: i, content: i } } );

    const [ cell, setCell ] = useState(0);
    const [ modalOpen, setModalOpen ] = useState(false);
      
    useEffect(()=>{
        let newCasesList;
        // if casesList is empty, fill it with empty cases.
        if( !options.casesList || options.casesList.length === 0 ) {
            newCasesList = options.cases ? options.cases.map( (item, index)=> ({
                id: item.id,
                title: item.title,
                data: {
                    image: 'https://placehold.co/600x400',
                    poster: 'https://placehold.co/600x400',
                    link: 'https://placehold.co/600x400',
                }
            }) ) : [...Array( parseInt( gridCells ) ).keys()].map( i => emptyCase() );
        }
        else {
            newCasesList = options.casesList;
            for( let i = 0; i < gridCells; i++ ) {
                if( !newCasesList[i] ) {
                    newCasesList[i] = emptyCase();
                }
            }
            // if casesList is bigger than gridCells, remove extra cases.
            if( options.casesList.length > gridCells ) {
                newCasesList = options.casesList;
                newCasesList.splice( gridCells, newCasesList.length - gridCells );
            }
        }

        setOptions( {...options, casesList: newCasesList} )
        console.log( "newCasesList: ", newCasesList )

    },[ options.casesList, options.MaxCases ])

    const handleSelectCase = ( selectedItem ) => {
        if( !selectedItem || selectedItem.length === 0 ) return; 
        const newCasesList = options.casesList ? options.casesList : [];
        const k = selectedItem.cell;
        const v = selectedItem.item;
        newCasesList[k] = v;
        setOptions( {...options, casesList: newCasesList } ) 
    }
    
    function emptyCase(){

        return {
            id: -1,
            title: '',
            data: {
                image: '',
                poster: '',
                link: '',
            }
        }
    }
  
    const handleReorderCasesList = ( list ) => {
        if( !list || list.length === 0 ) return;
        setOptions( {...options, casesList: list} ) 
    }

    const handleRemove = ( item, index ) => {
        let newCasesList = options.casesList ? options.casesList : [];
        newCasesList[index] = emptyCase();
        setOptions( {...options, casesList: newCasesList} )
    }
 
    console.log( "options.casesList: ", options )
    return ( <>
        
        <SortableGrid 
            items = { options.casesList }
            onReorder = { handleReorderCasesList } 
            tw="grid grid-cols-3 gap-4 auto-rows-auto "
            >
        
        { grid.map( ( item, index ) => {  
            console.log( "here ", item )            
            const caseData = options.casesList 
                ? options.casesList[index] 
                    ? options.casesList[index] 
                    : []
                : []
            return (
                <StyledGridCell
                    className="grid-item" 
                    key={ item.id }                                                                             
                >
                    <CellImage caseData = {caseData}/>
                    <CellTitle caseData = {caseData}/>
                    <GalleryControls 
                        index    = { index } 
                        select   = { (e) => { setCell( index ); setModalOpen(true) } } 
                        remove   = { (e) => { setCell( index ); handleRemove(e, index) } }
                    />
                </StyledGridCell> 
                );
            })}
            </SortableGrid>
            
            { modalOpen && <ModalList 
                listItems={ cases } 
                title="Selecione o case" 
                onSelect = { handleSelectCase } 
                close  = { () => setModalOpen(false) }
                cell={ cell }                  
            />}
                
            </> );
            }
            
    const GalleryControls = ( { index, select, remove } ) => {
        return (
            <div tw="absolute right-0 top-0 grid grid-rows-3 gap-1.5 rounded-xl mt-1 mb-1 mr-1 p-3 bg-yellow-50/60 [backdrop-filter: blur(4px)]  z-30 
            [box-shadow: inset 2px 2px 8px -1px black, inset -2px -2px 8px 1px white]


            ">
                
                <GalleryControlsIcon icon="uil:image-redo" onClick={()=>{ select() }} />
                <GalleryControlsIcon icon="bi:trash" onClick={()=>{ remove() }} />
                <GalleryControlsIcon icon="fluent:drag-24-filled" className="dragHandle" />

            </div>
        )
    }
    
    const GalleryControlsIcon = ( { icon, onClick, ...otherprops } ) => <div 
        tw="
            flex justify-center items-center p-2 
            box-border 
            rounded 
            text-white bg-gray-700 
            [box-shadow: 2px 2px 5px 1px #0004] 
            hover:(bg-slate-600 text-yellow-400 duration-150)"
            onClick={onClick}
            {...otherprops}
        >
        <Icon icon={icon} width="24px"/>
    </div>

        
const CellImage = ({caseData}) => { 
    
    if( caseData === null || caseData.length === 0 ) {
        return <div tw="w-full h-full flex justify-center items-center">
            <Icon icon="carbon:no-image" width="42px" tw="text-slate-500"/>
        </div>
    }
    return <img 
            src={ caseData.data.poster } 
            tw="absolute top-0 left-0 w-full h-full object-cover object-center "
        />
    }
    
    // same for title 
    const CellTitle = ({caseData}) => {
        if( caseData === null || caseData.length === 0 ) {
            return <h2 tw="w-full p-8 text-center opacity-50">SELECIONE UM CASE</h2>
        }
        return <h2 
            tw="z-10 text-white w-1/2 p-2 border-2 border-slate-500 border-solid bg-slate-600/80 blur-2xl text-center absolute bottom-0"
            >
                {caseData.title}
            </h2>
    }

    const StyledGridCell = tw.div`
        relative overflow-hidden rounded-lg 
        [box-shadow: 3px 3px 14px -2px #0008] 
        h-56 w-full flex justify-center items-center        
        first:(col-span-2)
        bg-white/80
        duration-150
        hover:(bg-white/100 duration-150)
    `;