
export const SectionEnding = (props) => {
  const { bgColor, ...otherProps } = props;
  return (
    <div tw="
            box-border
            absolute 
            flex justify-center gap-4
            -bottom-[8px] left-0 
            w-screen h-[64px]
            bg-secondary-50
            [z-index: 2]
          "
      css={`
            border-top: 16px solid red;
            box-shadow: 0px 0px 4px 1px #0004;
          `}

      style={{ backgroundColor: bgColor ? bgColor : '' }}

      {...otherProps}

    >
      <div tw='border-r-[16px] border-primary' />
      <div tw='border-l-[16px] border-primary' />
    </div>
  );
};
