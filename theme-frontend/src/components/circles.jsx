import tw from "twin.macro";

export const BigRedCircle = ( props ) => { 
    const { width="100vh", height="100vh", ...otherProps } = props;
    return <div 
        css={`
            width: ${window.innerHeight}px;
            height: ${window.innerHeight}px;
            background-image: url("data:image/svg+xml,%3Csvg width='1043' height='1043' viewBox='0 0 1043 1043' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M521.5 1043C809.516 1043 1043 809.516 1043 521.5C1043 233.484 809.516 0 521.5 0C233.484 0 0 233.484 0 521.5C0 809.516 233.484 1043 521.5 1043ZM521.5 833C693.537 833 833 693.537 833 521.5C833 349.463 693.537 210 521.5 210C349.463 210 210 349.463 210 521.5C210 693.537 349.463 833 521.5 833Z' fill='%23E62337'/%3E%3C/svg%3E");
            }
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            position: relative;
            transform-origin: center;
            transform: scale(0.85);
        `}
        {...otherProps}
    />}