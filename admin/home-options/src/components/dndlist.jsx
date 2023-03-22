import React, { useEffect, useState } from "react"
import tw from "twin.macro"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Icon } from '@iconify/react';

export const CasesList = () => {

    const [projetos, setProjetos] = useState([])
    const [maxitems, setMaxitems] = useState(5)
     
    useEffect(() => {
        let url = `${window.location.origin}/wp-json/database/v1/projetos`
        fetch(url)
        .then(res => res.json())
        .then(data => { 
            setProjetos(  data ) 
        })
    }, [])
    
    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(projetos);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setProjetos(items);
    }      

    const handleMaxItems = (e) => {
        // update the maxitems state then update the projetos state to have the same number of items of maxitems, if it has less, complete with empty items
        setMaxitems(e.target.value)
        if (e.target.value > projetos.length) {
            let newProjetos = projetos
            for (let i = projetos.length; i < e.target.value; i++) {
                newProjetos.push({ id: i, title: '' })
            }
            setProjetos(newProjetos)
        } else {
            setProjetos(projetos.slice(0, e.target.value))
        }


    }

    return (
        <DragDropContext
                onDragEnd={handleDragEnd}
             >
              <Droppable droppableId="cases-list">
                {(provided)=>(
                    <div
                        {...provided.droppableProps} 
                        {...provided.placeholder}
                        ref={provided.innerRef} 
                        css={[
                            tw`flex flex-col p-4 gap-2 text-black w-full h-[40vh] overflow-hidden border border-black rounded-lg shadow-lg bg-gray-100 `,
                            `
                                border: 1px solid lightgray;
                                box-sizing: border-box;
                            
                            `
                        ]}
                        
                        >
                    { 
                        projetos 
                        ? projetos.map( ( item, index )=>{ 
                            return (
                                <Draggable key={item.id} draggableId={`id-${item.id}`} index={index} >
                                {provided => (
                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                                        css={[
                                            "box-sizing: border-box;",
                                            tw`flex p-2 gap-1 text-black w-full h-[3rem] bg-gray-200 items-center overflow-hidden border-gray-200 rounded-md`,
                                            "border-width: 4px; border-style: solid;",
                                            "box-shadow: 0 0 0 1px #bbb"
                                        ]}>
                                        <span 
                                            tw="grid place-content-center w-6 h-6 text-gray-500 font-bold text-lg"                                            
                                            >
                                            <Icon icon="ic:twotone-drag-indicator" />
                                        </span>
                                        <span tw="text-lg whitespace-nowrap">{item.title}</span>
                                    </div> 
                                )}
                                </Draggable>
                            )}) 
                        : <></> 
                    }
                </div>
                )}
              </Droppable>
        </DragDropContext>        
  
        )
}
export const SocialList = () => {

    const [projetos, setProjetos] = useState([])
    const [maxitems, setMaxitems] = useState(5)
     
    useEffect(() => {
        let url = `${window.location.origin}/wp-json/database/v1/contatos`
        fetch(url)
        .then(res => res.json())
        .then(data => { 
            setProjetos(  data ) 
        })
    }, [])
    
    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(projetos);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setProjetos(items);
    }      

    const handleMaxItems = (e) => {
        // update the maxitems state then update the projetos state to have the same number of items of maxitems, if it has less, complete with empty items
        setMaxitems(e.target.value)
        if (e.target.value > projetos.length) {
            let newProjetos = projetos
            for (let i = projetos.length; i < e.target.value; i++) {
                newProjetos.push({ id: i, title: '' })
            }
            setProjetos(newProjetos)
        } else {
            setProjetos(projetos.slice(0, e.target.value))
        }


    }

    return (
        <DragDropContext
                onDragEnd={handleDragEnd}
             >
              <Droppable droppableId="cases-list">
                {(provided)=>(
                    <div
                        {...provided.droppableProps} 
                        {...provided.placeholder}
                        ref={provided.innerRef} 
                        css={[
                            tw`flex flex-col p-4 gap-2 text-black w-full h-[40vh] overflow-hidden border border-black rounded-lg shadow-lg bg-gray-100 `,
                            `
                                border: 1px solid lightgray;
                                box-sizing: border-box;
                            
                            `
                        ]}
                        
                        >
                    { 
                        projetos 
                        ? projetos.map( ( item, index )=>{ 
                            return (
                                <Draggable key={item.id} draggableId={`id-${item.id}`} index={index} >
                                {provided => (
                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                                        css={[
                                            "box-sizing: border-box;",
                                            tw`flex p-2 gap-1 text-black w-full h-[3rem] bg-gray-200 items-center overflow-hidden border-gray-200 rounded-md`,
                                            "border-width: 4px; border-style: solid;",
                                            "box-shadow: 0 0 0 1px #bbb"
                                        ]}>
                                        <span 
                                            tw="grid place-content-center w-6 h-6 text-gray-500 font-bold text-lg"                                            
                                            >
                                            <Icon icon="ic:twotone-drag-indicator" />
                                        </span>
                                        <span tw="text-lg whitespace-nowrap">{item.title}</span>
                                    </div> 
                                )}
                                </Draggable>
                            )}) 
                        : <></> 
                    }
                </div>
                )}
              </Droppable>
        </DragDropContext>        
  
        )
}

