import tw from "twin.macro";

export const Col = ( props ) => { 
    
    const {colx2, colx3, colx4, full, fill, ...otherprops } = props;

    return (
    <>
        <div 
            css={[
                tw`
                flex flex-col gap-1 w-full box-border`,
                colx2 && tw`col-span-3`,
                colx3 && tw`col-span-4`,
                colx4 && tw`col-span-5`,
                full && tw`col-span-full`,
            ]}
            {...otherprops}
            >
            { fill && <style>{`.column-settings:last-child { height: 100%; }`}</style> }
            {props.children}
        </div>
    </>
);}
