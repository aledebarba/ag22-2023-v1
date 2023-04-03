import { MenuCloseIcon } from './MenuCloseIcon'
import { MenuOpenIcon } from './MenuOpenIcon'
import { HashLink as Link } from "react-router-hash-link";
import { Container } from "../containers";
import { Logo } from "./MenuLogo";
import { useMenuIs } from './useMenuIs';
import tw from 'twin.macro';

export const MainMenu = () => {

    const [ menuIsMobile, menuIsDesktop, menuIsOpen, handleOpenMenu, handleCloseMenu ] = useMenuIs();

    return ( 
            <Container fixed fluid
                tw="bg-white/90 pt-2 md:pt-1 z-50 border-t-[12px] border-t-primary border-b-2 [backdrop-filter:blur(4px)]"
                > 
                <Container tw="flex justify-between px-8 items-center h-16">
                    <Logo menu/>      
                    { menuIsMobile ? 
                        menuIsOpen
                            ? <MenuItems mobile onClose={ handleCloseMenu } />
                            : <MenuOpenIcon     onClick={ handleOpenMenu }  /> 
                        : <MenuItems desktop />
                    }            
                </Container>       
            </Container>
    );
}



const MenuItems = ( { mobile, onClose, menuItems } ) => {
    
    const items = menuItems ? menuItems : [
        { label: "Quem Somos", link: "/sobre#top" },
        { label: "Serviços", link: "/servicos#top" },
        { label: "Cases", link: "/#cases" },
        { label: "Clientes", link: "/#clientes" },
        { label: "Trabalhe Conosco", link: "/#vagas" },
        { label: "Contato", link: "/#contato" },        
    ]

    return (
        <>
            <div css={[
                tw`flex flex-col md:(flex-row) gap-4 md:(gap-[2.5vw])`,
                mobile && tw`fixed top-0 left-0 w-screen h-screen bg-white/70 z-20 flex-col justify-center items-center text-3xl gap-10`,
                mobile && `
                    animation: zoomFadeIn 0.3s ease-in-out;
                    @keyframes zoomFadeIn {
                        0% {
                            opacity: 0;
                            left: 80vw;
                        }
                        100% {
                            opacity: 1;
                            left: 0;
                        }
                    }
                    &:after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: -1;
                        backdrop-filter: blur(5px);
                    }
                `
                ]}>
                { mobile && <div tw="absolute z-30 top-4 right-6 w-fit h-fit">
                    <MenuCloseIcon onClick={ onClose }/>
                </div> 
                }
                { items.map( (item, index) => (
                    <div key={`menu-item-${index}`} tw="w-fit h-fit">
                        <Link smooth to={item.link}>
                            <div tw="text-center pb-2 relative [font-stretch:120%] [font-size:0.87rem]
                                    after:( absolute duration-300 bottom-0 left-1/2 w-[0.5rem] h-[4px] -translate-x-1/2 bg-primary)
                                    hover:( text-primary after:(w-[100%]))"
                                    onClick={ onClose }
                                >
                                {item.label}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>  
    )
}



