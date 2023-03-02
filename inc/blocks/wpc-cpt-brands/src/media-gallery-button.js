import "./custom-image-select.scss";
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useState } from 'react';
import { Icon, Modal } from "@wordpress/components";


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

export function MediaGalleryButton( { ALLOWED_MEDIA_TYPES=["image"], setMedia, media } ) {
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
					<Button variant="primary" onClick={ open }>Selecionar Imagem</Button>
				) }
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
export function CustomImageSelect( { setMedia, media, label="", className="", aspectRatio="1x1", modalPreview=true } ) {

	const ALLOWED_MEDIA_TYPES=["image"];
	const [ image, setImage ] = useState( media );

	if ( ! setMedia ) {
		setMedia = CALLBACK;
		console.error ("setMedia callback function is required, in absence of callback function, console.log will be used")
	}
	
	// handle image remove/trash button
	const handleRemoveImage = () => {
		setImage( null );
		setMedia( null );
	};
	
	return <div className="custom-image-select">
			<div className="image-container">
			{ image && <>
				<img 
					src={ image.url || image } 
					alt={ image.alt || "" } 
				/>
				<div>
					<Icon icon="trash" onClick={ handleRemoveImage } />
				</div>
			</>
			}
			</div>
			
			<MediaUploadCheck className="buttons">
				<MediaUpload
					onSelect={ ( media ) => {
						setMedia( media, "color" );
						setImage( media )
					}}
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					value={ media }
					render={ ( { open } ) => (
							<Button variant="primary" onClick={ open } style={{ marginTop: 8, justifyContent: "center"}}>
								<span>Selecionar Imagem</span>
							</Button>
					) }
				/>
			</MediaUploadCheck>		
			<div className="label">
				{ label }
			</div>	
		</div>
}
