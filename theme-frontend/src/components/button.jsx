import tw from 'twin.macro';


export const Buttonx = (props) => {
    const { secondary, danger, link, large, small, outline, icon, left, right, center, tertiary, children, ...otherProps } = props;
    return ( <button
        css={[
            tw`flex justify-center rounded-lg gap-4 box-border items-center hover:duration-200 w-fit`,
            outline && tw`border-2`,
            outline && !secondary && tw`border-primary text-primary hover:bg-primary hover:text-white`,
            outline && secondary && tw`border-secondary text-secondary hover:bg-secondary hover:text-white`,
            outline && tertiary && tw`border-secondary-400 text-primary-600 bg-gray-50 hover:bg-white hover:text-primary-700 drop-shadow-lg hover:scale-[1.01]`,
            !outline && !secondary && tw`bg-primary text-white hover:bg-primary-700`,
            !outline && secondary && tw`bg-secondary-700 text-white hover:bg-secondary-700`,
            !large && !small && tw`py-4 px-8 mt-8`,
            large && tw`py-6 px-10 mt-8`,
            small && tw`py-2 px-4 text-sm font-semibold tracking-wide`,
            danger && tw`bg-red-500 text-white`,
            link && tw`bg-transparent text-primary border-b-primary border-b-2 m-0 p-0 text-lg hover:(scale-110 duration-300)`,
            left && tw`ml-0 mr-auto`,
            right && tw`mr-0 ml-auto`,
            center && tw`mx-auto`,
            icon && tw`py-0`,
        ]}
        {...otherProps}
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
