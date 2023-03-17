import { LogoSite } from "../../pages/assets/brand";
import { ContainerFluidH } from "../containers";

import tw from 'twin.macro';

export const HeaderMenu = (props) => {
    return (
            <div
                id="header-menu"
                tw="bg-white/80 border-b-secondary-100 border-b-2 border-t-[10px] border-t-primary pt-2 z-20"

                css={`
                    height: 10vh;
                    width: 100vw;
                    position: fixed;
                    backdrop-filter: blur(10px);
                `}
                >
                <ContainerFluidH>
                    {props.children}  
                </ContainerFluidH>
            </div>
    )
}


export const Logo = (props) => {
    return (
        <LogoSite {...props}/>
    )
}

export const Nav = {
    ul: ( props ) => (
        <ul tw={"flex flex-nowrap h-fit items-center gap-6 font-semibold font-sans sm:text-sm md:text-base lg:text-lg text-secondary"}
            {...props}
        >
            {props.children}
        </ul> ),
    li: ({children}) => ( 
            <li 
                tw="py-4 relative after:(bg-primary) hover:(text-primary) text-secondary-700 font-semibold text-[0.975rem]"
                css={`
                    
                    transition: all 0.3s ease-in-out;
                    cursor: pointer;     

                    &:after {
                        content: '';
                        position: absolute;
                        bottom: 10px;
                        left: 50%;
                        transform: translateX(-50%);                        
                        width: 8px;
                        height: 4px;          
                        transition: all 0.3s ease-in-out;              
                    }

                    &:hover {                        
                        transition: width 0.3s ease-in-out;
                        &:after {
                            width: 100%;
                        }                        
                    }
                `}

            >{(children)}</li>
            )
}