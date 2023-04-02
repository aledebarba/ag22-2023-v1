import tw from 'twin.macro';
/**
 * Create a standard container for the theme
 * the container will be 100vw until the lg breakpoint, then it will remain 960px
 * 
 * @fluid - the container will take full screen width size regardless of breakpoints
 * @screen - the container will take full screen size, width and height
 * @fixed - the container will be fixed
 * @contentCenter - the container will center its content
 * any extra props will be passed to the div
 */

export const Container = React.forwardRef(( props, ref ) => {
    const { children, fluid, "full-screen":screen, "max-screen": maxScreen, "content-center":contentCenter, absolute, fixed, ...otherProps } = props;
    return <div role="container" ref={ref}
            css={[
                tw`p-0 mx-auto my-0 box-border w-fit`,
                !fixed && !absolute && tw`relative`,
                fixed && tw`fixed`,
                !fluid && tw`w-screen sm:(w-screen) md:(w-screen) lg:(w-[960px])`,
                fluid  && tw`w-screen left-0`,
                absolute && tw`absolute`,
                screen && tw`w-screen min-h-screen`, 
                maxScreen && tw`w-screen h-screen max-h-screen overflow-hidden`,               
            ]}
            {...otherProps}
        >
            { 
                contentCenter 
                ? <div role="container-centered-content" tw="grid grid-cols-1 grid-rows-1 place-items-center">{ children }</div> 
                : children 
            }
        </div>
})

export const ContainerFluidH = ( props ) => {
    return <div 
        css={`
            //width: 1200px;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0;
            height: fit-content;
        `}
         {...props}
        >
        { props.children }
    </div>
}
