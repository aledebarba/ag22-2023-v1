import tw from 'twin.macro'

const Sandbox = () => {
    return (
        <StyledSandbox css={`

            opacity: 0;
            font-size: 5rem;
            animation: fadein 3s infinite linear;

            @keyframes fadein {
                0%   {opacity: 0; transform: scale(0.5); }
                50%  {opacity: 1; transform: scale(2); }
                100%  {opacity: 0; transform: scale(3);}
            }
        `}>
            Sandbox
        </StyledSandbox>
    )
}


const StyledSandbox = tw.div`
    bg-black
    h-screen
    w-screen
    grid
    place-items-center
    text-4xl
    text-white
    rounded-[100rem]
`

export default Sandbox