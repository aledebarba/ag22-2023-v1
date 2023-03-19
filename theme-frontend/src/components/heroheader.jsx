import { Buttonx } from './button';
import { Icon } from '@iconify/react';
import { Container } from './containers';
import { HeaderMenu, Logo, Nav } from './header/nav';
import { SaneSvg } from './utils'
import tw from 'twin.macro';

export const HeroHeader = () => (
    <header tw="h-screen w-screen overflow-hidden relative border-b-2 border-b-secondary-100">
        <div 
            css={`
                z-index: 1;
                position:absolute;
                width: 25vw;
                height: 25vw;
                top: 20%;
                left: 62%;
                transform: scale(0.1);
                background-color: transparent;

                animation: popin 500ms cubic-bezier(.12,.94,.4,1.37) forwards;

                @keyframes popin {
                    0% {
                        transform: scale(0.1);
                    }
                    100% {
                        transform: scale(1.2);
                    }
                }
                
                background-image: url("data:image/svg+xml,%3Csvg width='749' height='747' viewBox='0 0 749 747' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M748.019 373.377C748.019 579.537 580.606 746.784 373.991 746.784C167.376 746.784 0.00927734 579.537 0.00927734 373.377C0.00927734 167.216 167.422 0 373.991 0C580.559 0 748.019 167.139 748.019 373.377Z' fill='%23E62337'/%3E%3Cpath d='M103.617 469.564L223.886 377.967C253.736 354.6 265.193 339.47 265.193 320.229C265.193 300.046 250.98 287.682 229.398 287.682C207.815 287.682 190.846 300.046 165.578 328.915L105.475 278.982C139.908 234.504 173.877 210.256 236.272 210.256C306.532 210.256 354.713 251.983 354.713 312.44V313.337C354.713 364.676 328.099 391.211 280.397 425.581L225.279 464.063H357.965V536.466H103.617V469.564Z' fill='white'/%3E%3Cpath d='M390.169 469.564L510.391 377.967C540.211 354.6 551.668 339.47 551.668 320.229C551.668 300.046 537.47 287.682 515.872 287.682C494.274 287.682 477.352 300.046 452.053 328.915L391.981 278.982C426.352 234.504 460.352 210.256 522.793 210.256C593.006 210.256 641.219 251.983 641.219 312.44V313.337C641.219 364.676 614.605 391.211 566.903 425.581L511.831 464.063H644.424V536.466H390.169V469.564Z' fill='white'/%3E%3C/svg%3E");

                background-repeat: no-repeat;
                background-size: cover;

            `}
        />
        <Container 
            id="header-background" 
            tw="absolute top-0 left-0 z-[2]"
            >
            
            <SaneSvg>
                <circle cx="12.5%" cy="25%" r="50%" fill="white"
                    style={{
                        filter: "drop-shadow(0.5px 0px 1px rgba(0, 0, 0, 0.25))",
                    }}
                />
                <circle cx="-12%" cy="10%" r="25%" fill="transparent" strokeWidth="10"
                    style={{
                        stroke: "var(--primary)",
                        filter: "drop-shadow(0.5px 0px 1px rgba(0, 0, 0, 0.25))",
                    }}
                />
                <circle cx="-12%" cy="10%" r="25%" fill="transparent" strokeWidth="10"
                    style={{
                        stroke: "var(--primary)",
                        filter: "drop-shadow(0.5px 0px 1px rgba(0, 0, 0, 0.25))",
                    }}
                />
                <circle cx="100%" cy="0%" r="15%" 
                    css={`
                    fill: var(--primary);
                    filter: blur(8px);
                    animation: float 5s ease-in-out infinite alternate;

                    @keyframes float {
                        0% {
                            transform: translateY(0);
                        }
                        100% {
                            transform: translateY(-10px);
                        }
                    }
                `}
                />
                <circle cx="100%" cy="55%" r="15%" 
                    css={`
                        fill: var(--primary);
                        filter: blur(8px);
                        animation: float 5s ease-in-out infinite alternate;

                        @keyframes float {
                            0% {
                                transform: translateY(0);
                            }
                            100% {
                                transform: translateY(-10px);
                            }
                        }
                    `}
                />
            </SaneSvg>
        </Container>
        
        <Container
           id="header-content"
           tw="relative z-[3]"
            >
            <h1 tw={"text-h1 text-secondary-700"}>
                <span tw={"block font-thin"}>Marcas Reais</span>
                <span tw={"text-primary block font-bold"}>Para Clientes Reais</span>
                <span tw={"block font-thin"}>Com Resultados Reais</span>
            </h1>

            <p tw="p-8 w-1/2 text-secondary-700">
                Queremos fazer sua marca conquistar o mundo. Mas para isso acontecer você
                precisa saber: se seu cliente vai parar para te ouvir, é melhor você ter
                algo bom para dizer.
            </p>

            <p tw="p-[0rem_2rem_0_2rem] w-1/2 text-secondary-700">
                Faz sentido, não é?
            </p>

            <div tw="ml-8">
                <Buttonx outline primary>
                    Fale agora com a gente
                </Buttonx>
            </div>

            <div tw={"text-primary flex items-center gap-3 align-baseline absolute bottom-[88px] left-1/2 translate-x-[-50%]"}>
                <Icon icon="bi:mouse" width="1.5rem" />
                <p>Role para baixo</p>
            </div>
        </Container>

        <div css={
            `
                box-sizing: border-box;
                position: absolute;
                bottom: 0px;
                height: 56px;
                left: 0px;
                width: 100%;
                background-color: white;
                border-top: 16px solid var(--primary);
                z-index: 4;
                display: flex;
                justify-content: center;
                gap: 1rem;            
            `}
        >
            <div tw='w-1/4 border-r-[16px] border-primary'/>
            <div tw='w-1/4 border-l-[16px] border-primary'/>
        </div>

    </header>
);
