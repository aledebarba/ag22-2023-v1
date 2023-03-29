import tw from 'twin.macro';

export const H2Dash = ( props ) => <div
    css={`
        ${tw`after:(bg-primary)`}
        position: relative;
            width: fit-content;
            padding: 0 0 0.2rem 0;
            margin: 0 auto;

            &:after {
                content: '';
                position: absolute;
                width: 2.5rem;
                height: 0.5rem;			
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
            }
    `}
    >
    <h2 {...props}>{props.children}</h2>
</div>

export const H2superiordash = ( props ) => <div
        css={`
            ${tw`after:(bg-primary absolute w-[40%] h-[0.7rem] top-0 left-[20%] -translate-x-1/2)`}
            position: relative;
            width: fit-content;
            padding: 1.5rem 0 0;            
        `}
    >
        <h2 {...props}>{props.children}</h2>
    </div>