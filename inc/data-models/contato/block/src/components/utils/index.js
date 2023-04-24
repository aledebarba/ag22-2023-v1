import tw from 'twin.macro';
import { useEffect, useState, useLayoutEffect } from 'react';

export const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);
    
    useEffect(() => {
        const media = window.matchMedia(query);
            if (media.matches !== matches) {
            setMatches(media.matches);
        }
        window.addEventListener('resize', () => setMatches(media.matches));
        return () => window.removeEventListener('resize', () => setMatches(media.matches));
    }, [matches, query]);
    
    return matches;
};

export const createHeadStyles = ( id, rules ) => {
        if( document.getElementById(id) ) return;
        const style = document.createElement('style');
        style.id = id;        
        style.textContent = rules;
        document.head.appendChild(style);            
}

export const useScreenSize = () => {
    const getWindowSizes = () => ({ width: window.innerWidth, height: window.innerHeight });
    const [windowSizes, setWindowSizes] = useState(getWindowSizes());
    useLayoutEffect(() => {
        const handleResize = () => setWindowSizes(getWindowSizes());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSizes;
}