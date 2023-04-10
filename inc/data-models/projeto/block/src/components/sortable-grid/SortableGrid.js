import React, { useState, useEffect } from 'react';
import { ReactSortable } from 'react-sortablejs';

export default function SortableGrid( props ) {
    let { children, items, onChange, cols, itemBackGroundColor="#08a", ...otherprops } = props;
    onChange = onChange || function( value ){ console.log( "list changed: please provide callback function to update values " )};
    
    const [gridItems, setGridItems] = useState([]);
    
    useEffect(() => {
        setGridItems(items);
    }, []);

    const onDragDropEnds = (oldIndex, newIndex) => {
        //console.log( oldIndex, newIndex );
    }

    const onList = (newList) => {
       setGridItems(newList);
       onChange(newList);
    }

    return <div>
        <style>{`
            .sortable-grid {
                display: grid;
                grid-template-columns: repeat( ${cols}, 100px);
                grid-auto-rows: 100px;
                grid-gap: 5px;
            }
            .sortable-grid div {
                border-radius: 8px;
                width: 95px;
                height: 95px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 42px;
                background-color: ${itemBackGroundColor};
                color: white;
                cursor: pointer;
                
            }
            .sortable-grid div:first-child {
                grid-column: 1 / 3;
                width: 195px;
            }
            
            .dropArea {
                position: relative;
            }

            .dropArea::before {
                content: '';
                position: absolute;
                z-index: 1;
                width: 100%;
                height: 100%;
                background-color: #ff60a0;
                filter: blur(10px);
            }              
        `}</style>

        <ReactSortable
            list={gridItems}
            setList={ onList }
            animation={150}
            ghostClass="dropArea"
            handle=".dragHandle"
            filter=".ignoreDrag"
            preventOnFilter={true}
            className="sortable-grid"
            onEnd={({ oldIndex, newIndex }) => onDragDropEnds(oldIndex, newIndex)}
            >
            { gridItems.map( item => <div key={item.id} className="grid-item dragHandle">{item.content}</div> ) }
        </ReactSortable>
    </div>
}