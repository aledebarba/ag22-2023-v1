import tw from 'twin.macro';

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
                
        >
            {props.children}
        </button>
    )
}