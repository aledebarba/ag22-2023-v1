import tw from "twin.macro";

export const Panel = ( props ) => { 
    const { children, ...otherprops } = props;
    return <div 
                css={[
                    tw`relative w-full box-border -ml-2`,
                ]}
                {...otherprops}
                >
                {children}
            </div>
}
