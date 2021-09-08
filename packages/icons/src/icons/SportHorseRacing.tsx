import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.622 13.539a.44.44 0 00-.75-.46l.75.46zm-.92 3.977l.421-.128-.003-.008-.418.136zm2.966 3.155l-.168.406h.001l.167-.406zm2.086 1.569l.376-.229a.43.43 0 00-.015-.024l-.36.253zm.377.619l-.376.228.376-.228zm.625 1.675l-.414.15a.44.44 0 00.13.187l.284-.337zm1.05.882l-.282.337a.44.44 0 00.457.067l-.174-.404zm2.717-1.174l.175.404a.44.44 0 00.265-.417l-.44.013zM23.716 9.44a.44.44 0 00-.852.217l.852-.217zm-2.888 5.108l-.282.337.282-.337zm.895-1.066l-.283.337.283-.337zm.239 7.775a.44.44 0 00-.159-.865l.159.865zm-3.891-1.35a.44.44 0 10-.437.765l.437-.764zm-1.738 6.447a.44.44 0 10.779-.41l-.779.41zm.726-6.427a.44.44 0 10-.674-.565l.674.565zm5.875-10.709a.44.44 0 00.692.543l-.692-.543zm2.136-2.013l.347.27a.44.44 0 00-.064-.607l-.283.337zM9.27 11.09l.338.283-.337-.283zm-3.575 6.806a.44.44 0 10.869.138l-.869-.138zM24.898 7.06l.283-.337-.283.337zm-.95-.52l.121-.422-.122.422zm-6.397.297a.44.44 0 00-.868.139l.868-.14zm1.33 13.884a.44.44 0 10.87-.14l-.87.14zM7.969 13.783a.44.44 0 10-.871.124l.87-.124zm7.488 8.926a.44.44 0 00.202-.856l-.202.856zm.416-9.63c-.875 1.426-1.063 3.114-.588 4.573l.836-.272c-.393-1.207-.242-2.628.502-3.841l-.75-.46zm-.59 4.565c.486 1.604 1.692 2.804 3.218 3.433l.335-.813c-1.313-.541-2.31-1.554-2.712-2.876l-.842.256zm3.22 3.434c.791.324 1.438.767 1.892 1.415l.72-.506c-.578-.824-1.383-1.357-2.28-1.723l-.333.814zm1.877 1.39l.376.62.752-.458-.377-.619-.751.458zm.376.62c.165.27.244.479.314.708.068.222.143.527.273.888l.827-.3c-.122-.336-.171-.558-.258-.845a3.74 3.74 0 00-.404-.909l-.752.457zm.718 1.783l1.051.882.565-.674-1.05-.882-.566.674zm1.508.949l2.716-1.174-.348-.807-2.717 1.173.35.808zm2.982-1.59c-.154-5.198-.951-9.689-2.247-14.79l-.852.217c1.285 5.06 2.068 9.484 2.22 14.598l.879-.026zm-5.418-9.345c.481.403 1.198.341 1.601-.14l-.674-.565a.257.257 0 01-.361.031l-.566.674zm1.601-.14c.404-.48.34-1.197-.14-1.6l-.566.674a.257.257 0 01.032.361l.674.566zm-.14-1.6a1.136 1.136 0 00-1.601.14l.674.565a.257.257 0 01.361-.031l.566-.674zm-1.601.14c-.404.48-.34 1.197.14 1.6l.566-.674a.257.257 0 01-.032-.361l-.674-.566zm1.398 7.107c-1.407.257-2.713.098-3.732-.484l-.437.764c1.242.709 2.772.87 4.328.585l-.159-.865zm-4.691 5.553c-.692-1.315-1.006-2.46-1-3.45a3.912 3.912 0 01.947-2.568l-.674-.565a4.79 4.79 0 00-1.152 3.128c-.008 1.178.365 2.467 1.1 3.864l.779-.41zM23.626 9.76l1.79-2.285-.692-.543-1.79 2.285.692.543zm1.727-2.893l-.172-.145-.566.674.173.144.565-.673zm-1.284-.75c-5.31-1.535-11.301.12-15.135 4.69l.674.565c3.606-4.298 9.236-5.85 14.217-4.41l.244-.845zm-15.135 4.69a14.59 14.59 0 00-3.239 7.088l.869.138a13.71 13.71 0 013.044-6.661l-.674-.566zM25.18 6.722a3.059 3.059 0 00-1.112-.605l-.244.845c.283.082.55.233.79.434l.566-.674zm-8.498.253l2.199 13.745.868-.14-2.199-13.744-.868.139zm-9.586 6.931c.29 2.034 1.381 3.997 2.884 5.562 1.502 1.566 3.443 2.762 5.475 3.24l.202-.856c-1.843-.434-3.64-1.531-5.043-2.993-1.404-1.463-2.388-3.263-2.647-5.077l-.871.124z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportHorseRacing =
  styled(Svg) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
    backgroundColor && {
      backgroundColor: themed('color', backgroundColor)(theme),
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    color && {
      color: themed('color', color)(theme),
    },
    circleColor && {
      circle: {
        fill: themed('color', circleColor)(theme),
      },
    },
  ]);
export default SportHorseRacing;