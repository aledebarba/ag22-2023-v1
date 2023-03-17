import tw from 'twin.macro';


export const Buttonx = ({ secondary, danger, link, large, small, outline, children, icon }) => {
    return ( <button
        css={[
            tw`flex justify-center rounded-lg gap-4`,
            outline && tw`border-2`,
            outline && !secondary && tw`border-primary-100 text-secondary-100`,
            outline && secondary && tw`border-primary text-primary`,
            !outline && !secondary && tw`bg-primary text-white`,
            !outline && secondary && tw`bg-secondary-700 text-white`,
            !large && !small && tw`py-4 px-8`,
            large && tw`py-6 px-10`,
            small && tw`py-2 px-4`,
            danger && tw`bg-red-500 text-white`,
            link && tw`bg-transparent text-primary border-b-primary border-b-2 m-0 p-0 text-lg hover:(scale-110 duration-300)`,
        ]}
    >{children}</button>)
}

export const Button = (props) => {
    return (
        <button            
            
            css={tw`
                bg-transparent
                border-2
                border-primary
                box-border
                flex
                justify-center
                items-center
                py-4
                px-8
                gap-2
                rounded-lg
                text-button
                text-primary
                w-fit
                my-1
                `}

                {...props}
                
        >
            {props.children}
        </button>
    )
}

export const ButtonSecondary = (props) => {
    return (
        <button            
            
            css={tw`
                bg-transparent
                border-2
                border-primary
                box-border
                flex
                justify-center
                items-center
                py-4
                px-8
                gap-2
                rounded-lg
                text-button
                text-primary
                w-fit
                my-1
                `}
                
        >
            {props.children}
        </button>
    )
}

export const ButtonPrimary = (props) => {
    return (
        <button 
            className={`
                bg-primary
                box-border
                flex
                flex-row
                justify-center
                items-center
                py-4
                px-8
                gap-2
                rounded-lg
                font-sans
                text-button
                text-primary
                text-white
                `}
        >
            {props.children}
        </button>
    )
}
