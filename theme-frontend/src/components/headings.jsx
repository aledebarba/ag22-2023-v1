import tw from 'twin.macro';

export const H2Dash = ( {children} ) => <div
    css={[
        tw`after:(bg-primary)`,
        `
        position: relative;
        width: fit-content;
        padding: 0.2rem 0;
        margin: 0 auto;

        &:after {
            content: '';
            position: absolute;
            width: 1.5rem;
            height: 1rem;			
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }
    `]}
    >
    <h2 tw="text-secondary-800">{children}</h2>
</div>