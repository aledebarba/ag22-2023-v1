import React from 'react';
import { stopScrolling, enableScrolling } from '../utils';

export const useMenuIs = () => {
    
    const [menuIsMobile, setMenuIsMobile] = React.useState(false);
    const [menuIsDesktop, setMenuIsDesktop] = React.useState(true);    
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuIsMobile(false);
                setMenuIsDesktop(true);
                setMenuIsOpen(false);
            } else {
                setMenuIsMobile(true);
                setMenuIsDesktop(false);
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleOpenMenu = () => {
        setMenuIsOpen(true);
        stopScrolling();
    }

    const handleCloseMenu = () => {
        setMenuIsOpen(false);
        enableScrolling();
    }

    return ([ menuIsMobile, menuIsDesktop, menuIsOpen, handleOpenMenu, handleCloseMenu ]);

}