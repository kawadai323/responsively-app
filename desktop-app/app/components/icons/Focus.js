import React, {Fragment} from 'react';

export default ({width, height, color, padding, margin}) => (
  <Fragment>
    <svg
      height={height}
      width={width}
      style={{padding, margin}}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="731.153 408.441 103.001 103.001"
    >
      <defs>
        <clipPath id="_clipPath_0UnFyX2qgqi5GGDxd6p0UnBBSVGla8iP">
          <rect x="731.153" y="408.441" width="103.001" height="103.001" />
        </clipPath>
      </defs>
      <g clip-path="url(#_clipPath_0UnFyX2qgqi5GGDxd6p0UnBBSVGla8iP)">
        <g>
          <path
            d=" M 757.654 503.243 C 733.755 489.445 725.555 458.84 739.353 434.942 C 753.151 411.043 783.755 402.843 807.654 416.641 C 831.553 430.438 839.753 461.043 825.955 484.942 C 812.157 508.84 781.553 517.041 757.654 503.243 Z "
            fill="none"
            vector-effect="non-scaling-stroke"
            stroke-width="1"
            stroke={color}
            stroke-linejoin="miter"
            stroke-linecap="square"
            stroke-miterlimit="3"
          />
          <path
            d=" M 757.905 459.942 L 759.673 482.923 L 782.654 484.691"
            fill="none"
            vector-effect="non-scaling-stroke"
            stroke-width="1"
            stroke={color}
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="3"
          />
          <path
            d=" M 782.654 435.193 L 805.635 436.961 L 807.403 459.942"
            fill="none"
            vector-effect="non-scaling-stroke"
            stroke-width="1"
            stroke={color}
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="3"
          />
        </g>
      </g>
    </svg>
  </Fragment>
);