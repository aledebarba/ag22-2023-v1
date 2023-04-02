import { useState, useEffect } from 'react';
import { ScrollSmoother } from '../utils/scroll';
import tw from 'twin.macro';

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

export const toPixels = ( w, h ) => { 
	const width = w ? w : '100%';
	const height = h ? h : '100%';
	
	const widthPx = width.includes('px') ? parseFloat(width) : 
	width.includes('vw') ? parseFloat(width) * window.innerWidth / 100 :
	width.includes('vh') ? parseFloat(width) * window.innerHeight / 100 :
	width.includes('%') ? parseFloat(width) * window.innerWidth / 100 :
	width.includes('rem') ? parseFloat(width) * parseFloat(window.getComputedStyle(document.documentElement).fontSize) :
	width.includes('ch') ? parseFloat(width) * parseFloat(window.getComputedStyle(document.documentElement).fontSize) :
	width.includes('rm') ? parseFloat(width) * parseFloat(window.getComputedStyle(document.documentElement).fontSize) :
	width.includes('vmin') ? parseFloat(width) * Math.min(window.innerWidth, window.innerHeight) / 100 :
	width.includes('vmax') ? parseFloat(width) * Math.max(window.innerWidth, window.innerHeight) / 100 :
	width.includes('vmin') ? parseFloat(width) * Math.min(window.innerWidth, window.innerHeight) / 100 :
	width.includes('vmax') ? parseFloat(width) * Math.max(window.innerWidth, window.innerHeight) / 100 :
	width.includes('em') ? parseFloat(width) * parseFloat(window.getComputedStyle(document.documentElement).fontSize) :
	parseFloat(width);

	// detect the mesure unit of the height (px, vw, %, rem, rm, ch) and properly convert it to a number equivalent to px
	const heightPx = height.includes('px') ? parseFloat(height) : 
	height.includes('vw') ? parseFloat(height) * window.innerWidth / 100 :
	height.includes('vh') ? parseFloat(height) * window.innerHeight / 100 :
	height.includes('%') ? parseFloat(height) * window.innerWidth / 100 :
	height.includes('rem') ? parseFloat(height) * parseFloat(window.getComputedStyle(document.documentElement).fontSize) :
	height.includes('ch') ? parseFloat(height) * parseFloat(window.getComputedStyle(document.documentElement).fontSize) :
	height.includes('rm') ? parseFloat(height) * parseFloat(window.getComputedStyle(document.documentElement).fontSize) :
	height.includes('vmin') ? parseFloat(height) * Math.min(window.innerWidth, window.innerHeight) / 100 :
	height.includes('vmax') ? parseFloat(height) * Math.max(window.innerWidth, window.innerHeight) / 100 :
	height.includes('vmin') ? parseFloat(height) * Math.min(window.innerWidth, window.innerHeight) / 100 :
	height.includes('vmax') ? parseFloat(height) * Math.max(window.innerWidth, window.innerHeight) / 100 :
	height.includes('em') ? parseFloat(height) * parseFloat(window.getComputedStyle(document.documentElement).fontSize) :
	parseFloat(height);

	return { width: widthPx, height: heightPx }

}


export const SaneSvg = ( { width="100%", height="100%", style={}, className="", css="", children } ) => {
    
    const w = toPixels(width, height).width;
	const h = toPixels(width, height).height;

    return (
        <div style={{
			position: 'absolute',
            top: 0,
            left: 0,
            width: w,
            height: h,
            zIndex: 0,
            pointerEvents: 'none',		
            
        }}
		
		css={css}

		>    
            <svg height="100%" width="100%" viewBox="0 0 100 100" className={className}>
                { children }               
            </svg>  
        </div>
    )
}

export const stopScrolling = () => {
  // Create a style sheet we will only use to disable scrolling :
  let scroll_style_element = document.createElement('style')
  scroll_style_element.id = 'handle-scroll-style'
  document.head.appendChild(scroll_style_element)
  const scroll_style_sheet = scroll_style_element.sheet
  scroll_style_sheet.insertRule(
    `html{height:100%;overflow-y:hidden;}`,
    scroll_style_sheet.cssRules.length
  )
}

export const enableScrolling = () => {
  const scroll_style_element = document.getElementById('handle-scroll-style')
  if (scroll_style_element) document.head.removeChild(scroll_style_element)
}

export const useRect = ref => {
	if( !ref ) { console.error( "Ref must pe passed to the leftPostionOf component" ); return null; }

	const [rect, setRect] = useState();

	useEffect(() => {
		const updateRect = () => {
			setRect(ref.current.getBoundingClientRect());
		}
		updateRect();
		window.addEventListener("resize", updateRect);
		return () => window.removeEventListener("resize", updateRect);
	}
	, []);

	return rect;
}