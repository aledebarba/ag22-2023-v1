import { HashLink as Link } from "react-router-hash-link";
import tw from 'twin.macro';
import { Icon } from "@iconify/react";

export const MainMenu = () => {

    const [menuOpen, setMenuOpen] = React.useState(false);
    const [menuDesktop, setMenuDesktop] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuDesktop(true);
                setMenuOpen(false);
            } else {
                setMenuDesktop(false);
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return ( 
        <div fixed menubar with red border at top 
            tw="bg-white/80 border-b-secondary-100 border-b-2 border-t-[10px] border-t-primary pt-2 md:pt-1 z-20"
            css={`
                top: 0;
                left: 0;
                right: 0;                
                height: 10vh;
                width: 100vw;
                position: fixed;
                backdrop-filter: blur(10px);
                box-sizing: border-box;
            `} 
        >
            <div tw="absolute top-[2vh] z-30">
                <Logo width="20vw" height="5vh"/>
            </div>
            { !menuDesktop 
                ? !menuOpen 
                    ?   <div icone menu hamburger
                            tw="absolute top-1/2 right-4 w-fit h-[80%] -translate-y-1/2 z-20"
                            onClick={()=> setMenuOpen( !menuOpen )}>
                            <Icon icon="material-symbols:menu-rounded" tw="text-6xl" />
                        </div>
                    :   <div icone x
                            tw="absolute top-1/2 right-2 w-fit h-[80%] -translate-y-1/2 scale-90 z-20" 
                            onClick={()=> setMenuOpen( !menuOpen )}>
                            <Icon icon="carbon:close" tw="text-6xl" />
                        </div>
                : <></>
            }
            { menuDesktop 
                ? <MenuItems mobile={false} onClick={()=>null} />
                : menuOpen
                    ? <div menu mobile 
                        css={`
                            position: fixed;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background-color: rgba(255,255,255,1);
                            z-index: 10;
                            width: 100vw;
                            height: 100vh;
                            animation: fadein 0.25s forwards ease-in-out;
                            backdrop-filter: blur(10px);

                            @keyframes fadein {
                                0% { scale: 0.95; opacity: 0; }
                                100% { scale: 1; opacity: 1; }
                            }
                            
                        `}>
                        <MenuItems mobile={true} onClick={()=>{ setMenuOpen( false )}} />
                    </div>
                    : <></>
            }
        </div>
    );
}

const MenuItems = ( { mobile=true, onClick, menuItems } ) => {
    const items = menuItems ? menuItems : [
        { name: "Quem Somos", link: "/sobre#top" },
        { name: "Serviços", link: "/servicos#top" },
        { name: "Cases", link: "/#cases" },
        { name: "Clientes", link: "/#clientes" },
        { name: "Trabalhe Conosco", link: "/#vagas" },
        { name: "Contato", link: "/#contato" },        
    ]

    return (
        <div css={[
            tw`flex h-full justify-center items-center gap-1`,
            mobile && tw`flex-col text-2xl font-bold gap-8`,
            !mobile && tw`flex-row w-[75vw] mx-auto text-[clamp(16px,1.8vw,1.2rem)] font-light gap-[2vw]`,           

            ]}>
            { items.map( (item, index) => (
                <div key={`menu-item-${index}`} tw="w-fit h-fit">
                    <Link smooth to={item.link}>
                        <div tw="text-center pb-2 relative
                                 after:( absolute content duration-300  bottom-0 left-1/2 w-[1rem] h-[6px] -translate-x-1/2 bg-primary)
                                 hover:(after:(w-[100%]))" 
                              onClick={onClick}
                            >
                            {item.name}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}


export const Logo = ({ width, height }) => {
    return (
       <Link smooth to="/#top">
            <div 
                css={[`
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 210 123'%3E%3Cg%3E%3Cpath d='M77.8116 114.812C77.305 116.191 76.2917 117.321 74.7871 117.321C73.6523 117.321 72.8923 116.69 72.639 115.556C72.3612 114.57 72.208 113.554 72.1831 112.53V91.4534L72.1932 90.0062H47.3967V91.8643H54.193V103.999C54.193 108.358 53.9676 112.392 52.506 115.41C51.0444 118.543 48.1237 120.452 42.7308 120.452C32.9454 120.452 27.3245 115.753 23.9555 108.701C20.5865 101.649 19.5606 92.3635 19.5606 83.2999C19.5606 78.2575 19.7911 71.9949 21.0222 65.7298C22.2659 59.5705 24.2924 53.5323 27.9958 49.0521C31.5953 44.5821 36.7653 41.5567 44.3038 41.5567C56.7768 41.5567 63.8669 47.9378 65.3285 63.6019L65.5818 66.2264H72.0438V37.3135H72.0817C72.0817 23.7849 68.8976 14.2321 63.1399 8.46868C57.3822 2.70526 48.8279 0.110962 37.9002 0.110962C25.374 0.110962 17.415 3.89274 12.6503 8.66281C7.67781 13.4379 5.88691 18.9997 5.88691 22.7814C5.88691 29.1474 11.062 34.5251 17.415 34.5251C23.768 34.5251 29.1509 29.1474 29.1509 22.7814C29.1509 16.4154 23.7832 11.2495 17.415 11.2495C16.4398 11.2495 14.5172 11.4487 13.1341 12.0059C13.1341 12.0059 18.1344 5.22896 34.5843 5.22896C51.0343 5.22896 54.2082 18.2534 54.2082 28.4037V41.1129C50.6592 40.3498 47.038 39.9686 43.4071 39.9759C31.1545 39.9759 20.2496 43.8963 12.5034 51.2783C4.75715 58.6604 0 69.4082 0 82.9469C0 94.9175 4.38479 104.541 11.8042 111.371C19.2237 118.201 29.465 121.997 41.6061 121.997C46.6529 121.949 51.6737 121.271 56.5513 119.981C57.3113 119.779 58.0712 119.552 58.8463 119.312C60.8728 120.848 63.7099 121.955 67.5906 121.955C72.0058 121.955 74.7795 120.694 76.6692 119.199C78.5589 117.815 79.3163 116.31 79.4429 115.432L77.8116 114.812Z' fill='%23413F41' /%3E%3Cpath d='M208 60.9118C208 94.5443 180.609 121.829 146.805 121.829C113.001 121.829 85.6182 94.5443 85.6182 60.9118C85.6182 27.2792 113.009 0 146.805 0C180.602 0 208 27.2666 208 60.9118Z' fill='%23E62337' /%3E%3Cpath d='M102.57 76.6036L122.247 61.6605C127.131 57.8485 129.006 55.3803 129.006 52.2414C129.006 48.9487 126.68 46.9318 123.149 46.9318C119.618 46.9318 116.842 48.9487 112.708 53.6583L102.874 45.5124C108.508 38.2564 114.065 34.3007 124.274 34.3007C135.769 34.3007 143.652 41.1078 143.652 50.9707V51.1169C143.652 59.4923 139.298 63.8212 131.493 69.4283L122.475 75.706H144.184V87.5178H102.57V76.6036Z' fill='white' /%3E%3Cpath d='M149.452 76.6036L169.122 61.6605C174 57.8485 175.875 55.3803 175.875 52.2414C175.875 48.9487 173.552 46.9318 170.018 46.9318C166.485 46.9318 163.716 48.9487 159.577 53.6583L149.749 45.5124C155.372 38.2564 160.935 34.3007 171.151 34.3007C182.638 34.3007 190.526 41.1078 190.526 50.9707V51.1169C190.526 59.4923 186.172 63.8212 178.367 69.4283L169.357 75.706H191.051V87.5178H149.452V76.6036Z' fill='white' /%3E%3C/g%3E%3C/svg%3E");
                    background-repeat: no-repeat no-repeat;
                    background-position: center center;
                    background-size: contain;
                `,
                width  ? `width:  ${width};`   : '',
                height ? `height: ${height};`  : '',
            ]}
            />
       </Link>
    )
}
