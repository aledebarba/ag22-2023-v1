import tw from "twin.macro"

const Loader = tw.div`
    w-full
    h-screen
    overflow-hidden
    flex
    justify-center
    items-center
    bg-gradient-to-r
    from-blue-400
    to-blue-600
    text-white
    text-5xl

`

export const Loading = () => <Loader>Loading...</Loader>