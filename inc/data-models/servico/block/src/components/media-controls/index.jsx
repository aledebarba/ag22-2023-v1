import tw from "twin.macro";
import { Icon } from '@iconify/react';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

export const MediaControls = ( { "delete":del, addnew, select, preview, onDelete, onAddNew, onSelect, onPreview, media, index } ) => {
    return (
        <div tw="absolute 
                 top-[8px] right-[8px] p-[clamp(4px, 0.5vw, 16px)]
                 flex flex-col gap-[8px] 
                 rounded-[99px]
                 z-50
                 "

                 css={`
                    background-image: linear-gradient( to bottom right, #fffd, #ccca );
                    backdrop-filter: blur(4px);
                    /* box-shadow: inset 2px 2px 4px -1px #444, inset -2px -2px 4px 1px #fff, 4px 4px 8px -2px #444; */
                    box-shadow: -1px -1px 2px 2px #fffd, 1px 2px 4px 1px #888;
                    transition: all 0.2s ease-in-out ;
                    
                    &:hover {
                        background-color: #fffe;
                    }

                    .hovergrow {
                        transition: all 0.2s ease-in-out;
                        filter: drop-shadow(0 0 14px #fff);
                        &:hover {
                            transform: scale(1.5);
                        }
                    }
                 `}
            >
            { (del && onDelete) && 
            <button onClick={ () => onDelete( index ? index : null ) } className="hovergrow" tw="text-red-600">
                <Icon icon="mdi:delete" tw="text-3xl" />
            </button> 
            }           
            { (select && onSelect )&& 
              <SelectIcon onSelect={ onSelect } media={ media } index={index}/>
            }
            { (preview && onPreview ) &&
            <button tw="text-purple-500" className="hovergrow" onClick={ onPreview }>
                <Icon icon="mdi:eye" tw="text-3xl" />
            </button>
            }
        </div>
    )
}

const SelectIcon = ( { onSelect, media, index } ) => {
    if( !onSelect ) return null;
    return <WordPressMediaLibSelector 
        onSelect = { (media) => onSelect( media, index ) }
        media = { media }
        render = { 
            ( { open } ) => ( 
            <Icon  
                className="hovergrow"
                tw="text-3xl text-blue-500"
                icon="mdi:image-refresh"
                onClick = { open }
            /> 
        )}
    />
}

export const ImagePlaceholderAddNew = ( { onSelect, small, mediun, large, media } ) => {
    const size = small ? "32px" : mediun ? "64px" : large ? "128px" : "48px";
    if( !onSelect ) return null;
    return <WordPressMediaLibSelector 
        onSelect = { onSelect }
        media = { media }
        render = { 
            ( { open } ) => ( 
            <div 
                css={`
                    position: relative;
                    width: calc( ${ size } * 2 );
                    height:calc( ${ size } * 2 );
                    border-width: 2px;
                    border-style: dashed;
                    border-color: dodgerblue;
                    border-radius: 8px;
                    margin: 8px auto;
                    transition: all 0.2s ease-in-out;
                    cursor: pointer;
                `}
            >
                <Icon  
                tw="absolute
                    top-1/2 left-1/2
                    transform -translate-x-1/2 -translate-y-1/2
                    text-blue-500"
                width={ size }
                height={ size }
                icon="mdi:plus-circle"
                onClick = { open }
            /> 
            </div>
        )}
    />
}

export const SelectImageFromWPMediaLib = ( { media, onSelect, onDelete, onPreview, title, "delete":del, select, preview } ) => {
    if( media === "" ) return <ImagePlaceholderAddNew onSelect={ onSelect } />
    return (
        <div tw="relative w-full h-fit">
            <img
                src={ media?.url || media }
                alt={ media?.alt || "" }
                tw="relative
                    w-full
                    object-cover
                    rounded
                    "
            />
            <MediaControls
                delete={del} select={select} preview={preview}
                onDelete={ onDelete }
                onSelect={ onSelect }
                onPreview={ onPreview }
            />
            { title && <div tw="bg-white p-1 text-blue-500 absolute bottom-[8px] left-[8px]">{ title }</div> }
        </div>
    )
}

export const WordPressMediaLibSelector = ( { onSelect, render, media } ) => {
    if( !onSelect ) return null;
    if( !render ) return null;

return <MediaUploadCheck>
        <MediaUpload				
            onSelect={ ( media ) => onSelect( media ) }
            allowedTypes={ [ 'image' ] }
            value={ media }
            mode={ "browse" }            
            render = { render }
        />
    </MediaUploadCheck>	
}
