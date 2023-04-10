import { Icon } from '@iconify/react';
import tw from "twin.macro";

export const Section = ( props ) => {
    let { title, icon='ant-design:control-twotone', children, ...otherprops } = props;
    return (
        <section css={[         
            tw`p-4 rounded-lg bg-gray-400/40 mx-auto my-4 shadow-lg`,
            tw`duration-300 hover:(bg-gray-400/70 duration-300)`,
            tw`w-full min-w-[300px] max-w-[95%] lg:(max-w-[85%] xl:(max-w-[75%]))`,            
            `border: 3px solid white;`
            ]}
        >
            <h2 tw='w-full shrink-0 text-center justify-center text-black font-light mt-4 mb-12 flex items-center gap-4 text-3xl lowercase'>
                <Icon icon={icon} tw="text-red-500" width="40px" /> {title}
            </h2>
            { children }
        </section>
    );
};
