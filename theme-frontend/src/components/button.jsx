export const Button = ({ children }) => {
    return (
        <button 
            className={`
                bg-transparent
                border-2
              border-primary
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
                `}
        >
            {children}
        </button>
    )
}