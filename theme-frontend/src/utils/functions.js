import { useState, useEffect } from 'react';
import { ScrollSmoother } from './scroll';

export const _app = {
	pages: () => {
		let instance = document.querySelector( getWPChunkElementAttr() ).dataset.instance;
		let name = document.querySelector( getWPChunkElementAttr() ).dataset.wpchunk;
		let dataElement = JSON.parse(
			document.querySelector(
				`pre[class="${ name }"][instance="${ instance }"]`
			).textContent
		);
		return dataElement.pages;
	},
	params: () => {
		let instance = document.querySelector( getWPChunkElementAttr() ).dataset.instance;
		let name = document.querySelector( getWPChunkElementAttr() ).dataset.wpchunk;
		let dataElement = JSON.parse(
			document.querySelector(
				`pre[class="${ name }"][instance="${ instance }"]`
			).textContent
		);
		return dataElement.params[ 0 ];
	},
	adminUrl: () => {
		let instance = document.querySelector( getWPChunkElementAttr() ).dataset.instance;
		let name = document.querySelector( getWPChunkElementAttr() ).dataset.wpchunk;
		let dataElement = JSON.parse(
			document.querySelector(
				`pre[class="${ name }"][instance="${ instance }"]`
			).textContent
		);
		return dataElement.adminUrl;
	},
	themeUrl: () => {
		let instance = document.querySelector( getWPChunkElementAttr() ).dataset.instance;
		let name = document.querySelector( getWPChunkElementAttr() ).dataset.wpchunk;
		let dataElement = JSON.parse(
			document.querySelector(
				`pre[class="${ name }"][instance="${ instance }"]`
			).textContent
		);
		return dataElement.themeUrl;
	},
	primaryMenu: () => {
		let instance = document.querySelector( getWPChunkElementAttr() ).dataset
			.instance;
		let name = document.querySelector( getWPChunkElementAttr() ).dataset
			.wpchunk;
		let dataElement = JSON.parse(
			document.querySelector(
				`pre[class="${ name }"][instance="${ instance }"]`
			).textContent
		);
		return dataElement.primaryMenu;
	},
};

export const Styles = ( { css } ) => <style>{ css }</style>;

export function getWPChunkElementName() {
	const getCurrentScript = () => {
		if ( document.currentScript && document.currentScript.src !== '' )
			return document.currentScript.src;
		var scripts = document.getElementsByTagName( 'script' ),
			str = scripts[ scripts.length - 1 ].src;
		if ( str !== '' ) return str;
		return new Error().stack.match( /(https?:[^:]*)/ )[ 0 ];
	};

const getCurrentScriptPath = () => {
	var script = getCurrentScript(),
		path = script.substring( 0, script.lastIndexOf( '/' ) );
	return path;
};

const pathElements = getCurrentScriptPath().split( '/' );

	return 'wpchunk-' + pathElements[ pathElements.length - 2 ];
}

export function getWPChunkElementAttr() {
	return `[${ getWPChunkElementName() }]`;
}

export const TextFill = React.forwardRef( ( props, ref ) => {

	const [ fontSize, setFontSize ] = useState(0);
	const fill = props.fill ? props.fill : props.width ? props.width : window.innerWidth;	
	const adjust = props.adjust ? props.adjust : 2;
	const vw = props.pixels ? 1 : window.innerWidth / 100;

	useEffect(()=>{
		const textSize = props.children.length;
		const windowSize = fill;
		const textWidth = (windowSize / textSize) * adjust;
		const sizeInVw = textWidth / vw;
		setFontSize( `${sizeInVw}${vw==1?"px":"vw"}` );
	},[])
	
	return (
		<div className={props.className} ref={ref ? ref : null}>
			<div style={{ fontSize: fontSize }}>{props.children}</div>
		</div>
	)
})

//--- create a custom refs hook
export function useRefArray() {
    const refs = []
    return [refs, el => el && refs.push(el)]
}

//--- split words into spans
export const Words = ( props ) => {
    return props.children.split(" ").map((word, index) => (
        <span text-part="word" className={`words__word ${props.className}`} key={index}>
            {word}
        </span>
    ));
};

//--- pause scrolling for a given time
export function pauseScroll( time ) {
	const scroller = ScrollSmoother.get();
	scroller.paused(true);
	if (time == undefined) return
	setTimeout(()=>{
		scroller.paused( false )
	}, time)
}

//--- restore scroll 
export const restoreScroll = () => { ScrollSmoother.get().paused(false); }
export const resumeScroll = () => { ScrollSmoother.get().paused(false); }

//--- listen to wheel events and call the callback function if the wheel stopped
export function createWheelStopListener(element, callback, timeout) {
	let handle = null;
	let onScroll = function() {
		if (handle) {
			clearTimeout(handle);
		}
		handle = setTimeout(callback, timeout || 200); 
	};
	element.addEventListener('wheel', onScroll);
	return function() {
		element.removeEventListener('wheel', onScroll);
	};
}