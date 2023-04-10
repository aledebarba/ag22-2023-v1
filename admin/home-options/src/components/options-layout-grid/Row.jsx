import tw from "twin.macro";

export const Row = ( { children } ) => { 
    
    return (
    <>
        <div css={[
                tw`w-full grid grid-cols-1 gap-4 my-4
                sm:(grid grid-cols-2 gap-4 [grid-auto-flow: row])
                md:(grid auto-cols-fr [grid-auto-flow: column] gap-4)                
                `,
            ]}>
                {children}
        </div>
    </>
);}
 