import tw from "twin.macro";

export const BigRedCircle = ( props ) => { 
    const { width="100vh", height="100vh", ...otherProps } = props;
    return <div 
        css={`
            width: ${width};
            height: ${height};
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 1094 1093'%3E%3Cg filter='url(%23a)'%3E%3Ccircle cx='546.58' cy='561.5' r='421.5' stroke='%23E62337' stroke-width='200' shape-rendering='crispEdges'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='a' width='1093' height='1093' x='.08' y='0' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' result='hardAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='-15'/%3E%3CfeGaussianBlur stdDeviation='12.5'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow_735_5669'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow_735_5669' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E");
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        `}
        {...otherProps}
    />
}
