export const Button = ({ children }) => {
    return (
        <button 
            css={`
                box-sizing: border-box;
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
            `}
        >
            {children}
        </button>
    )
}