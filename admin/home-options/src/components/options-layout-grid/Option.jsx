import tw from 'twin.macro';
import { Icon } from '@iconify/react';

export const Option = ({ label, children }) => 
<>
    <div css={[
        tw`flex flex-col gap-2 px-2 pt-2 pb-4`,
        tw`bg-white/80 rounded-md shadow-md duration-300`,
        tw`hover:(bg-white/100 duration-300)`,
        ]}
        className="column-settings"
    >
            <div tw="flex w-full items-center gap-1 mb-2">
                <Icon icon="fa:cog" tw="text-red-400" width="24px" /><p tw="text-red-400 font-bold uppercase">{label}</p>
            </div>
            {children}
    </div>
</>


