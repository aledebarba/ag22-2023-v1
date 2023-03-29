import * as React from "react";

function BigRedCircle(props) {
  return (
    <svg
      width={1094}
      height={1094}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d_735_5669)">
        <circle
          cx={546.894}
          cy={562}
          r={421.5}
          stroke="#E62337"
          strokeWidth={200}
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_735_5669"
          x={0.394}
          y={0.5}
          width={1093}
          height={1093}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={-15} />
          <feGaussianBlur stdDeviation={12.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_735_5669"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_735_5669"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default BigRedCircle;