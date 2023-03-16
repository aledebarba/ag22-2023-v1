import { Logosite } from "../../pages/assets/brand";
import tw from 'twin.macro';

export const Headermenu = ({ children }) => {
    return (
        <nav  tw={"lg:w-8/12 md:w-10/12 flex flex-row justify-between items-center"}>
            {children}
        </nav>
    )
}


export const Logo = ({children}) => {
    return (
        <Logosite/>
    )
}

export const Navul = ({children}) => {
    return (
        <ul tw={"flex gap-6 font-semibold font-sans sm:text-sm md:text-base lg:text-lg tracking-wide text-gray-800"}>
            {children}
        </ul>
    )
}
export const Li = ({children}) => {
    return (
        <li>
            {children}
        </li>
    )
}