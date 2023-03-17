import tw from 'twin.macro';

export const Card = ({ children }) => {
    return (
        <div tw={"bg-white p-4 py-6 drop-shadow-lg text-center rounded-lg"}>
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
        <div tw={"grid grid-cols-4 gap-8 mt-16"}>
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