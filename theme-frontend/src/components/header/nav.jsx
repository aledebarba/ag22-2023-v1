export const Headermenu = ({ children }) => {
    return (
        <nav 
            css={`
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                border: 2px solid #E62337;
                border-radius: 8px;
                color: #E62337;
                font-family: 'MartianGroteskW05-sWdxBd';
                font-style: normal;
                font-weight: 800;
                font-size: 16px;
                line-height: 16px;
                background-color: transparent;
                margin: 0 auto;
            `}
        >
            {children}
        </nav>
    )
}

export const Menuitems = ({ children }) => {
    return (
        <ul css={`
            display: flex;
            flex-direction: row;
            gap: 1em;
        `}>
        {children}
        </ul>
    )
}

export const Li = ({children}) => {
    return (
        <li css={`
            text-decoration: none;
            list-style: none;
        `}>
            {children}
        </li>
    )
}