import { LogoSite } from "../../pages/assets/brand";
import { ContainerFluidH } from "../containers";
import { HashLink as Link } from "react-router-hash-link";
import tw from 'twin.macro';

export const MainMenu = () => <HeaderMenu>
    <Logo  tw="absolute"/>
    <Nav.ul tw="w-full justify-center flex-nowrap">
        <Nav.li><Link smooth to="/sobre#top">Quem Somos</Link></Nav.li>
        <Nav.li><Link smooth to="/servicos#top">Serviços</Link></Nav.li>
        <Nav.li><Link smooth to="/#cases">Cases</Link></Nav.li>
        <Nav.li><Link smooth to="/#clientes">Clientes</Link></Nav.li>
        <Nav.li><Link smooth to="/#vagas">Trabalhe Conosco</Link></Nav.li>
        <Nav.li><Link smooth to="/#contato">Contato</Link></Nav.li>
    </Nav.ul>
</HeaderMenu>

export const PageMenu = () => <HeaderMenux>
    <Logo  tw="absolute"/>
    <Nav.ul tw="w-full justify-center flex-nowrap">
        <Nav.li><Link smooth to="/sobre#top">Quem Somos</Link></Nav.li>
        <Nav.li><Link smooth to="/servicos#top">Serviços</Link></Nav.li>
        <Nav.li><Link smooth to="/#cases">Cases</Link></Nav.li>
        <Nav.li><Link smooth to="/#clientes">Clientes</Link></Nav.li>
        <Nav.li><Link smooth to="/#vagas">Trabalhe Conosco</Link></Nav.li>
        <Nav.li><Link smooth to="/#contato">Contato</Link></Nav.li>
    </Nav.ul>
</HeaderMenux>

export const HeaderMenu = (props) => {
    return (
            <div
                id="header-menu"
                tw="bg-white/80 border-b-secondary-100 border-b-2 border-t-[10px] border-t-primary pt-2 md:pt-1 z-20"

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

export const HeaderMenux = (props) => {
    return (
            <div
                id="header-menu"
                tw="bg-white border-b-secondary-100 border-b-2 border-t-[10px] border-t-primary pt-2 md:pt-1 z-20"

                css={`
                    height: 10vh;
                    width: 100vw;
                    position: fixed;
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
       <Link smooth to="/#top"><LogoSite {...props}/></Link>
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