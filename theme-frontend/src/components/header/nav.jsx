export const Headermenu = ({ children }) => {
    return (
        <nav 
            css={`
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 16px 32px;
                gap: 8px;
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