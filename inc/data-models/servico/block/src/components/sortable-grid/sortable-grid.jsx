import tw, { css } from "twin.macro";
import { useEffect, useState } from "react";
import { ReactSortable } from 'react-sortablejs';
import { Icon } from "@iconify/react"
import { WPMediaGalleryParser } from "../wpmediagal/media-gallery-button";
import { useMediaQuery } from "../utils";
import { MediaControls } from "../media-controls";

export const Grid = ( { 
        items, 
        onReorder, 
        "cols-sm":colssm=1, 
        "cols-md":colsmd=4,
        "cols":colslg=6, 
        title="Selecione uma mídia da galeria", 
        allowedType = ["image", "video"], 
        multiple = true, 
        mode = "edit", 
        children, 
        controls=true,
        trash=true,
        addnew=false,
        onAddNew,
        useGrid=false,
        ...otherprops 
        } ) => {

            if(!items) {return null } 
            if(!onReorder) return null;

            // get a list of items in the form of { url, id, alt, ... } and return a list of grid viable items
            const createListFromItems = ( items ) => {
                return items.map( (item, index) => ({ key: index, value: item, Render: <RenderItem item={item} /> } ) );
            }

            // get the value from the current grid items and return a list of items as is was received
            const createItemsFromList = ( list ) => {
                return list.map( item => item.value );
            }

            const [ gridItems, setGridItems ] = useState();
            useEffect( () => {
                setGridItems( createListFromItems( items ) );
            },[]);

            const onList = ( newList ) => { 
                const reindexedList = newList.map( (item, i) => ({ ...item, key: i }) ); // reindex the list to aavoid key errors               
                setGridItems( reindexedList );
                onReorder( createItemsFromList( newList ));
            }

            const onDragDropEnds = ( oldIndex, newIndex ) => {
                if( oldIndex === newIndex ) return false;
                return newIndex
            }

            const onTrashItem = ( index ) => {
                const erasedList = gridItems.filter( (item, i) => i !== index );                
                const newList = erasedList.map( (item, i) => ({ ...item, key: i }) ); // reindex the list to aavoid key errors
                setGridItems( newList );
                onReorder( createItemsFromList( newList ) );                
            }

            const onSelect = ( media, index ) => {                                
                 const newList = gridItems.map( ( item, i ) => {
                        if( i === index ) {
                            return { ...item, value: {id:media.id, alt:"", url: media.url}, Render: <RenderItem item={{id:media.id, alt:"", url: media.url}} />  };
                        } else {
                            return item;
                        }
                    })
                setGridItems( newList );
                onReorder( newList.map( item => item.value ) );
            }

            const onAddMedia = ( media ) => {
                const currentList = gridItems;
                const listIndex = currentList.length;

                media.forEach( ( item, index ) => currentList.push( { 
                    key:(listIndex + index), 
                    value:{ 
                        id:item.id, 
                        alt:"", 
                        url: item.url
                    }, 
                    Render:<RenderItem item={{
                        id:item.id,
                        alt:"",
                        url: item.url
                    }}/>,
                    chosen: false,
                    selected: false
                } ) );
                setGridItems( currentList );         
                onReorder( createItemsFromList( currentList ) );
            }
            if(!gridItems) return null;

            return (
                <StyledSortableGrid colssm={colssm} colsmd={colsmd} colslg={colslg}>
                <ReactSortable
                    list={ gridItems }
                    setList={ onList }
                    animation={ 200 }
                    handle=".dragHandle"
                    filter=".ignoreDrag"
                    ghostClass="dropArea"  
                    dragClass="dragging"                
                    chosenClass="dragging"                
                    preventOnFilter={true}
                    className="sortable-grid"
                    onEnd={ ({ oldIndex, newIndex } ) => onDragDropEnds(oldIndex, newIndex) }
                    {...otherprops}
                    >
                    { gridItems.map( (item, index) => {
                        return (
                            <div 
                                key={ item.key }                                
                                data-info="sortable-grid-item"
                                className="dragHandle grid-item"
                            >
                                { controls && <ControlButtons onTrash={()=> onTrashItem( index ) } onSelect={ onSelect } trash={trash} index={index} /> }
                                { item.Render }
                            </div> )
                    })}
                    <WPMediaGalleryParser media={[]} setMedia={(media)=> onAddMedia(media) } multiple={ true } render={ ( {open} ) => ( 
                        <div 
                            style={{ display: addnew ? "grid" : "none" }}
                            className="grid-item add-new"
                            onClick={open}
                        >
                            <Icon icon="mingcute:add-circle-line"/>
                        </div> 
                    )}/>
                </ReactSortable>
            </StyledSortableGrid>
        )};

const ControlButtons = ({ onTrash, onSelect, trash, index }) => {
    return <MediaControls delete select onDelete={ onTrash } onSelect={ onSelect } index={ index } media={[]} />
}

const StyledSortableGrid = ( { children, colslg, colsmd, colssm } ) => {

    const maxw = 50; //NOTE: them maximum width of the unit inside the grid
    const small = useMediaQuery( '(min-width: 420px)' );
    const mediun = useMediaQuery( '(min-width: 768px)' );
    const large = useMediaQuery( '(min-width: 1024px)' );
    const [colWidth, setColWidth] = useState();
    const [ncols, setNcols ] = useState(1);
    
    useEffect( () => {
        
        if ( large  ) {
            setColWidth( maxw / colslg )
            setNcols( colslg );
            return
        };
        if ( mediun ) {
            setColWidth( maxw / colsmd )
            setNcols( colsmd );
            return
        };
        if ( small  ) {
            setColWidth( maxw / colssm )
            setNcols( colssm );
        };
    }, [small, mediun, large] );

    return (
    <div css={`
        .sortable-grid {
            display: grid;
            width: 100%;
            gap: 12px;         
            grid-template-columns: repeat( ${ ncols }, 1fr );
            justify-items: center;          
        }

        .sortable-grid .grid-item {                            
            position: relative;
            border-radius: 8px;          
            /* width: ${ colWidth }vw;
            height: ${ colWidth }vw; */
            width: 100%;
            height: 100%;
            display: flex !important;
            justify-content: center;
            align-items: center;
            font-size: 42px;
            background-color: white;
            box-shadow: 0 0 25px -5px rgba(0,0,0,0.3), 0 0 5px rgba(0,0,0,0.1) ;
            color: white;
            cursor: grab;
            
            &::after {
                position: relative;
                content: "";
                display: block;
                padding-top: 100%;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            }    
            
            
            /* @media(min-width: 560px) {
                width: clamp( 150px, calc( 30vw - 12px), 360px );
                height: clamp( 150px, calc( 30vw - 12px), 360px );
            }

            @media(min-width: 768px) {
                width: clamp( 150px, calc( 18vw - 12px), 360px );
                height: clamp( 150px, calc( 18vw - 12px), 360px );
            }

            @media(min-width: 1024px) {
                width: clamp( 150px, calc( 19vw - 24px ), 360px );
                height: clamp( 150px, calc( 19vw - 24px ), 360px );
            } */

            &.add-new {
                color: #93b2f8;
                background-color: transparent;
                border: 4px dashed #93b2f8;
                border-radius: 12px;
                transform: scale(0.7);
                display: grid;
                place-content: center;
                font-size: clamp( 32px, 8vw, 64px );
                transition: all 0.5s ease-in-out;
                cursor: pointer;
                box-shadow: none;

                &:hover {
                    background-color: #3471ff;
                    color: white;
                    transform: scale(0.8);
                    transition: all 0.2s ease-in-out;
                    border-color: transparent;
                }
                
            }
        }

        .dragging {
            cursor: grabbing;
            overflow: visible;
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
            background-color: #fba7c8;
        } 
`}>
    {children}
</div>)}

const RenderItem = ({ item }) => {

    if( typeof item !== 'object' ) return <div>{item}</div>;
    
    if( item.url ) {
        const url = item.url.replace("http://", "https://");

        const isVideo = url.match(/\.(mp4|mov|avi|webm|ogg|ogv|wmv|flv|mkv)$/i) !== null;
        const isImage = url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i) !== null;

        if( isVideo ) return <div tw="w-full h-full grid place-content-center [transform: scale(0.9)]" data-info="video-container">
            <video src={url} controls playsInline />
        </div>

        if( isImage ) return <div
            style={{ backgroundImage: `url(${url})`, backgroundSize: "contain" }}
            tw="bg-center bg-no-repeat w-full h-full [transform: scale(0.9)]" 
        />
    }

    if( item.Content ) return <div tw="w-full h-full">{item.Content}</div>
}