import tw from 'twin.macro';

export const Container = ( props ) => {
    return <div {...props}
        css={`
            width: 1200px;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0;
            min-height: 100vh;
            display: grid;
            place-content: center;
        `}
        >
        { props.children }
    </div>
}

export const ContainerFluidH = ( props ) => {
    return <div 
        css={`
            width: 1200px;
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