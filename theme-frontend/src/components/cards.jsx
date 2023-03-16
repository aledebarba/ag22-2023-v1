import tw from 'twin.macro';

export const Card = ({ children }) => {
    return (
        <div tw={"basis-1/4 bg-white rounded-2xl pt-8 pb-10 px-8 flex flex-col justify-center text-center drop-shadow-xl"}>
            {children}
        </div>
    )
}

export const CardTitle = ({ children }) => {
    return (
        <h4 tw={"text-h4 text-primary lowercase font-medium"}>
            {children}
        </h4>
    )
}

export const CardText = ({children}) => {
    return (
        <h6 tw={"text-h6"}>
            {children}
        </h6>
    )
}

export const CardBox = ({children}) => {
    return (
        <div tw={"flex lg:flex-row md:flex-col gap-8"}>
            {children}
        </div>
    )
}