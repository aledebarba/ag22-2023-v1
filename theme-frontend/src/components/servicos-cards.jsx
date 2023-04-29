import tw from 'twin.macro';

export const CardFlex = ({ odd, children }) => {
    return (
        <div css={[
                tw`bg-white p-2 py-6 drop-shadow-lg  text-center rounded-lg transition-all duration-300 ease-in hover:scale-[1.05] cursor-default! hover:drop-shadow-xl`,
                odd && tw`w-[30%] min-w-[280px] h-[max(30vh,16rem)]`,
                !odd && tw`w-[15%] min-w-[210px] h-[max(35vh,20rem)]`
                ]} 
                className="group"
                >
            {children}
        </div>
    )
}
export const Card = ({ children }) => {
    return (
        <div tw={"bg-white p-4 py-6 drop-shadow-lg text-center rounded-lg transition-all duration-300 ease-in hover:scale-[1.05] cursor-default! hover:drop-shadow-xl"} className="group">
            {children}
        </div>
    )
}

export const CardTitle = ({ children }) => {
    return (
        <h4 css={[
            tw`text-h4 text-primary lowercase leading-[3rem] after:(bg-secondary w-10 transition-all duration-300)`,
            `
            position: relative;
            width: fit-content;
            padding: 0.2rem 0;
            margin: 0 auto;
            margin-bottom: 1.25rem;
    
            &:after {
                content: '';
                position: absolute;
                width: 0.6rem;
                height: 0.25rem;			
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);                
            }
        `]}
        >
            {children}
        </h4>
    )
}

export const CardText = ({children}) => {
    return (
        <p>{children}</p>
    )
}

export const CardBox = ({odd, children}) => {
    return (
        <div tw="
            grid auto-rows-min gap-8 m-8
            sm:(grid grid-cols-2 gap-4 mt-16 mb-12 mx-16)
            lg:(grid grid-rows-1 grid-cols-4 gap-4 mt-16 mb-12 mx-4)
            ">
            {children}
        </div>
    )
}
export const CardBoxFlex = ({children}) => {
    return (
            <div css={[
                tw`flex flex-wrap gap-4 items-center justify-center my-16 px-0`, 
            ]}>
            {children}
            </div>
    )
}
export const CardBox2 = ({children}) => {
    return (
        <div tw="
            grid auto-rows-min gap-8 m-8
            sm:(grid grid-cols-2 gap-4 mt-16 mb-12 mx-16)
            lg:(grid grid-rows-1 grid-cols-4 gap-4 mt-16 mb-12 mx-4)
            ">
            {children}
        </div>
    )
}

export const Cases = ({children}) => {
    return (
        <div tw={"grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 lg:flex-row gap-8 w-11/12 md:w-10/12"}>
            {children}
        </div>
    )
}

export const CardCase = ({children}) => {
    return (
        <figure className='group' tw={"justify-center text-center drop-shadow-lg rounded-2xl overflow-hidden first:col-span-2 not-first:col-span-1"}>
            {children}
		</figure>
    )
}

export const ServiceListItem = ({children}) => {
    return (
        <div 
            className='group' 
            tw={"justify-center gap-x-12 flex flex-row text-left overflow-hidden odd:mr-auto odd:ml-0 even:mr-0 even:ml-auto h-fit w-11/12"}>
            {children}
		</div>
    )
}

export const ServiceTitle = ({ children }) => {
    return (
        <h3 css={[
            tw`after:(bg-secondary) text-h3 text-primary lowercase font-[750] leading-[3rem]`,
            `
            position: relative;
            width: fit-content;
            padding: 0.5rem 0;
            margin-bottom: 1.25rem;
    
            &:after {
                content: '';
                position: absolute;
                width: 100%;
                height: 0.4rem;			
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
            }
        `]}
        >
            {children}
        </h3>
    )
}

export const ServiceText = ({children}) => {
    return (
        <h6 css={[ tw`text-h6 mt-10`,
                    `
                    font-stretch: 115%;
                    ` ]}>
            {children}
        </h6>
    )
}

export const ServiceImg = ({ url }) => {
    return (
        <figure tw={"basis-8/12 h-56 my-auto overflow-hidden group-odd:order-first group-odd:rounded-r-xl group-even:rounded-l-xl bg-primary"}>
            <img 
                css={[
                    tw`object-scale-down w-full`,				
                ]}
                src={ url.replace("http://", "https://") }
            />
        </figure>
    )
}

export const BoxServiceList = ({children}) => {
    return (
        <div tw={"flex flex-col gap-40 my-8"}>
            {children}
        </div>
    )
}

export const ButtonType = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded",
    secondary: "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded",
    basic: "bg-white hover:bg-gray-700 text-gray-700 font-bold rounded",
  delete: "bg-red-300 hover:bg-red-500 text-white font-bold rounded"
};
export const ButtonSize = {
  sm: "py-2 px-4 text-xs",
  lg: "py-3 px-6 text-lg"
}