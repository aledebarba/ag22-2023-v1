import { LogoSite } from "../../pages/assets/brand";

import tw from 'twin.macro';

export const HeaderMenu = ({ children }) => {
    return (
        <nav  
            css={`
                ${tw`
                    mx-0
                    box-content
                    flex
                    flex-row
                    justify-center
                    backdrop-blur-xl
                    bg-white/90
                    fixed
                    w-full
                    h-28
                    border-b-2
                    border-b-gray-300`
                }				
        `}>
            
            {children}

        </nav>
    )
}


export const Logo = ({children}) => {
    return (
        <LogoSite/>
    )
}

export const Nav = {
    ul: ({children}) => (
        <ul tw={"flex gap-6 font-semibold font-sans sm:text-sm md:text-base lg:text-lg tracking-wide text-secondary"}>
            {children}
        </ul> ),
    li: ({children}) => <li>{(children)}</li>
}