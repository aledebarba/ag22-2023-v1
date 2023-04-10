import React, { useState, useEffect } from 'react';
import { ReactSortable } from 'react-sortablejs';
import tw from 'twin.macro'


/**
 * Grid of items that can be sorted by drag and drop.
 * receive props as jsx attributes:
 * @param items {Object[]} items - The array of items to be rendered id and content ex: [{id:1, content: "item 1"}, {id:2, content: "item 2"}]
 * @param cols {number} number of columns in the grid (when using items prop)
 * @param children {jsx} element where each element is a grid item with an id and content (and evetually a dragHandle or ignoreDrag class)
 * @param onChange {callback} function called when the list is changed, it returns the new list.
 */
export default function SortableGrid({ children, items, onReorder, cols, ...otherprops }) {

    const onChangeOrder = onReorder || ( (value) => { console.warn( "list changed: please provide callback function to update values " )});
    
    const [gridItems, setGridItems] = useState([]);
    
    useEffect(() => {        
       setGridItems(items);
    }, []);

    const onDragDropEnds = ( oldIndex, newIndex ) => {
        //console.log( oldIndex, newIndex );
    }

    const onList = ( newList ) => {        
       setGridItems(newList);
       onChangeOrder(newList);
    }
   
    return (<>
        { !children && 
            <StyledSortableGrid>
                <ReactSortable
                    list={ gridItems }
                    setList={ onList }
                    animation={150}
                    ghostClass="dropArea"
                    handle=".dragHandle"
                    filter=".ignoreDrag"
                    preventOnFilter={true}
                    className="sortable-grid"
                    onEnd={({ oldIndex, newIndex }) => onDragDropEnds(oldIndex, newIndex)}
                    
                    {...otherprops}
                    >
                    { gridItems.map( item => <div key={item.id} className="grid-item dragHandle">{item.content}</div> ) }                    
                </ReactSortable>
            </StyledSortableGrid> 
        }
        { children && 
            <div 
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
                    list={ gridItems }
                    setList={ onList }
                    animation={150}
                    ghostClass="dropArea"
                    handle=".dragHandle"
                    filter=".ignoreDrag"
                    preventOnFilter={true}
                    className="sortable-grid"
                    //onEnd={({ oldIndex, newIndex }) => onDragDropEnds(oldIndex, newIndex)}
                    {...otherprops}
                    >
                    { children }                  
                </ReactSortable>
            </div>
        }
    </>);
}

const StyledSortableGrid = ({cols, children}) => (
    <div
      css={[
        `
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
        }   
    `,
    ]}
    >
      {children}
    </div>
);
