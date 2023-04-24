//import "./custom-image-select.scss";
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useState } from 'react';
import { Icon } from "@iconify/react"
import tw from "twin.macro"

const CALLBACK = ( media ) => console.log( media );

/**
 * 
 * 
 * 
 * 
 * 
 * It's a button that opens the media library, and when you select an image, it calls the setMedia
 * callback function with the selected image
 * @param {array of strings} ALLOWED_MEDIA_TYPES The media types allowed to be selected. Default is ["images"]
 * @param {function} setMedia The callback function that will be called when an image is selected. Default is console.log
 * @returns A button that opens the media library.
 * @example
 * <MediaGalleyButton setMedia={ ( media ) => setMediaValue( media )} />
 */

export function MediaGalleryButton( { ALLOWED_MEDIA_TYPES=["image","video"], setMedia, media, multiple, mode, text, button } ) {
	if ( ! setMedia ) {
		setMedia = CALLBACK;
		console.error ("setMedia callback function is required, in absence of callback function, console.log will be used")
	}
	
	return (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={ ( media ) => {
					setMedia( media )
				}}
				allowedTypes={ ALLOWED_MEDIA_TYPES }
				value={ media }
				render={ ( { open } ) => (
					<div
						onClick={ open }
						css={[`
							width: 100%;
							padding-top: 100%;
							position: relative;		
							border: 1px solid #ccc;	
							transition-duration: 0.4s;
							&:hover {
								transition-duration: 0.4s;
								background-color: #fff8;
							}				
						`]}
					>
						<Icon 
							icon="material-symbols:add-circle-rounded" 
							tw="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-sky-800 duration-200 hover:(text-sky-500 text-6xl duration-200  ease-in-out)"
							css={`
								&:hover {
									filter:  drop-shadow(20px 20px 3px #0002) drop-shadow(35px 35px 10px #0002);
								}
							`}
							/>
					</div>
				) }
				multiple={ multiple || false }
				mode={ mode || "browse"}
			/>
		</MediaUploadCheck>
	);
}

export function WPMediaGalleryParser( { ALLOWED_MEDIA_TYPES=["image","video"], setMedia, media, multiple, mode, render } ) {
	if ( ! setMedia ) {
		setMedia = CALLBACK;
		console.error ("setMedia callback function is required, in absence of callback function, console.log will be used")
	}


	const buttonRender = render ? render : ( { open } ) => <div
			onClick={ open }
			css={[`
				width: 100%;
				padding-top: 100%;
				position: relative;		
				border: 1px solid #ccc;	
				transition-duration: 0.4s;
				&:hover {
					transition-duration: 0.4s;
					background-color: #fff8;
				}				
			`]}
			>
				<Icon 
					icon="material-symbols:add-circle-rounded" 
					tw="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-sky-800 duration-200 hover:(text-sky-500 text-6xl duration-200  ease-in-out)"
					css={`
						&:hover {
							filter:  drop-shadow(20px 20px 3px #0002) drop-shadow(35px 35px 10px #0002);
						}
					`}
				/>
		</div>
		
	return (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={ ( media ) => {
					setMedia( media )
				}}
				allowedTypes={ ALLOWED_MEDIA_TYPES }
				value={ media }
				render={ buttonRender }
				multiple={ multiple || false }
				mode={ mode || "browse"}
			/>
		</MediaUploadCheck>
	);
}



/**
 * 
 * 
 * 
 * 
 * It's a custom image selector that allows you to select an image from the media library, and it also
 * allows you to preview the image in a modal
 * @returns A component that allows the user to select an image from the media library and set it as
 * the background image of a block.
 */
export function CustomImageSelect( { children, setMedia, media, label="", className="", aspectRatio="1x1", modalPreview=true, fit, mode, allowed } ) {

	const ALLOWED_MEDIA_TYPES=allowed || ["image"];
	const [ image, setImage ] = useState( media );

	if ( ! setMedia ) {
		setMedia = CALLBACK;
		console.error ("setMedia callback function is required, in absence of callback function, console.log will be used")
	}
	
	// handle image remove/trash button
	const handleRemoveImage = () => {
		setImage( "" );
		setMedia( "" );
	};
	
	return <>
		<div 
			tw="relative 
			    w-full
				border border-white rounded-md 
				overflow-hidden 
				box-border 
				grid place-content-center"
		>		
		{ image 
			? <>
				<img 
				src={ image.url || image } 
				alt={ image.alt || "" } 
				tw="relative
					w-full
					top-1/2 left-1/2 
					transform -translate-x-1/2 -translate-y-1/2 
					object-cover rounded shadow-md"
				/>
				<div 
					data-info="trash icon to remove image"
					onClick={ handleRemoveImage }
					tw="absolute
						top-2 right-2
						w-8 h-8 p-1
						grid place-content-center
						bg-sky-500 
						rounded-md 
						text-white 
						shadow-md 
						duration-200 
						cursor-pointer
						hover:(bg-sky-700)" 
					>
					<Icon icon="mdi:trash" size={24} />	
				</div>
			</>
			: <div
				tw="absolute
				    top-1/2 left-1/2
					transform -translate-x-1/2 -translate-y-1/2
					text-gray-500 text-8xl"
				>
				<Icon icon="bi:image"/>
			</div>
		}
		{ label && !children && <div tw="font-sans text-sm text-blue-500">{ label }</div> }	
		</div>		
		<div tw="mt-4 text-sm text-slate-500">
			{ children }
			<MediaUploadCheck className="buttons">
				<MediaUpload				
					onSelect={ ( media ) => {
						setMedia( media );
						setImage( media )
					}}
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					value={ media }
					render={ ( { open } ) => (
							<Button variant="primary" onClick={ open } style={{ marginTop: 8, justifyContent: "center"}}>
								<span>Selecionar Imagem</span>
							</Button>
					) }
					mode={ mode || "browse"}
				/>
			</MediaUploadCheck>		
		</div>
	</>
}

export function CustomVideoSelect( { children, setMedia, media, label="", className="", aspectRatio="1x1", modalPreview=true, fit, mode, allowed } ) {

	const ALLOWED_MEDIA_TYPES=allowed || ["video"];
	const [ image, setImage ] = useState( media );

	if ( ! setMedia ) {
		setMedia = CALLBACK;
		console.error ("setMedia callback function is required, in absence of callback function, console.log will be used")
	}
	
	// handle image remove/trash button
	const handleRemoveImage = () => {
		setImage( "" );
		setMedia( "" );
	};
	
	return <>
		<div tw="relative w-full pt-[55%] border border-gray-500 rounded-md overflow-hidden box-border grid place-content-center" >		
			{ image 
				? <>
				  <video  
					src={ image.url } 
					tw="absolute w-[90%] h-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover rounded-md shadow-md"
					muted
					controls
					/>
					<div 
						css={[
							tw`bg-sky-500 p-1 rounded-md text-white grid place-content-center shadow-md duration-200 hover:(bg-sky-700)`, 
							`
							cursor: pointer;
							width: 2rem;
							height: 2rem;
							position: absolute;
							top: 0.5rem;
							right: 0.5rem;
						`]}
						onClick={ handleRemoveImage }
						>
						<Icon icon="mdi:trash" size={24} />	
					</div>
					</>
				: <div
					css={[
						tw`text-gray-500 text-8xl`,
						`
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(-50%, -50%);
						
						`]}
					>
					<Icon icon="vscode-icons:file-type-video"/>
				</div>
			}
			{ label && !children && <div tw="font-sans text-sm text-blue-500">{ label }</div> }	
		</div>		
		<div tw="mt-4 text-sm text-slate-500">
			{ children }
			<MediaUploadCheck className="buttons">
				<MediaUpload				
					onSelect={ ( media ) => {
						setMedia( media );
						setImage( media )
					}}
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					value={ media }
					render={ ( { open } ) => (
							<Button variant="primary" onClick={ open } style={{ marginTop: 8, justifyContent: "center"}}>
								<span>Selecionar Video</span>
							</Button>
					) }
					mode={ mode || "browse"}
				/>
			</MediaUploadCheck>		
		</div>
	</>
}


export const ImageSelect = ({ setMedia, media, title  }) => {

	const ALLOWED_MEDIA_TYPES=allowed || ["image"];
	const [ image, setImage ] = useState( media );

	if ( ! setMedia ) {
		setMedia = CALLBACK;
		console.error ("setMedia callback function is required, in absence of callback function, console.log will be used")
	}
	
	// handle image remove/trash button
	const handleRemoveImage = () => {
		setImage( "" );
		setMedia( "" );
	};
	
	return (
	<div 
		tw="relative 
			grid place-content-center
			box-border 
			w-full min-h-[64px] min-w-[64px]
			border-solid border-white rounded 
			overflow-hidden"
	>		
		{ 
			image ? 
		  	<div>
				<img 
					src={ image.url || image } 
					alt={ image.alt || "" } 
					tw="relative
						w-[95%]
						top-1/2 left-1/2 
						transform -translate-x-1/2 -translate-y-1/2 
						object-cover rounded shadow"
					/>
					<MediaControls 
						delete select preview 
						onDelete={ handleRemoveImage }
						onSelect={ () => {} }
						onPreview={ () => {} }
					/>
				</div>
			: <AddNew onClick={ () => {} } />
		}		
		{ ( title && image !== "" ) && 
			<div 
				tw="text-sm text-blue-500"
				>
				{ label }
			</div> 
		}	
		
	</div>	
)}	
