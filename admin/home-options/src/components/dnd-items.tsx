import React from "react"
import {DndContext, useDroppable, useDraggable} from "@dnd-kit/core"
import tw from "twin.macro"

export const DragAndDropItems = ( { draggableItems, droppedList, onDrop } ) => {
    if (!draggableItems) return <></>
    return (
    <DndContext>
        <div tw="flex gap-4">
            <div tw='flex flex-col gap-2'>
                { draggableItems.map( ( item, index ) => <Draggable title={item.title} id={`${item.title}--${index}`} /> ) }
            </div>
            <Droppable />
        </div>
    </DndContext>
    )
}

const Droppable = ( props ) => {
    const { isOver, setNodeRef } = useDroppable({
        id: "droppable"
    });
    const style={
        color: isOver ? "green" : "darkslategray",
        width: "100%",
        height: "10vh",
        border: "2px solid red"
    }

    return (
        <div ref={setNodeRef} style={style}>
            { props.children }
        </div>
    )
}

const Draggable = ( props  ) =>{
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
      id: props.id,
    });

    const style = transform ? {
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;
  
    
    return (

      <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
        <div tw="w-full h-full cursor-move">
            {props.title}       
        </div>
      </button>
    );
  }