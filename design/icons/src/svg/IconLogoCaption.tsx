import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 157 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.412 4.92c6.54 0 11.84 5.37 11.84 11.996 0 6.625-5.3 11.996-11.84 11.996S2.572 23.54 2.572 16.916c0-6.626 5.3-11.997 11.84-11.997zm.054-2.785c7.99 0 14.467 6.577 14.467 14.69 0 8.114-6.477 14.691-14.467 14.691S0 24.94 0 16.826C0 8.712 6.477 2.135 14.466 2.135z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.503 0c5.249 0 9.504 4.32 9.504 9.646 0 5.328-4.255 9.647-9.504 9.647C4.255 19.293 0 14.974 0 9.646 0 4.32 4.255 0 9.503 0zM153.024 17.688c-.603-.554-1.352-.825-2.234-.825-.929 0-1.715.357-2.354 1.06-.58.64-.87 1.502-.87 2.586 0 1.231.374 2.18 1.111 2.857.604.542 1.328.813 2.162.813.978 0 1.787-.357 2.415-1.06.58-.652.869-1.526.869-2.635 0-1.195-.362-2.13-1.099-2.796zm1.667 7.304c-1.075.973-2.355 1.466-3.84 1.466-1.727 0-3.152-.64-4.275-1.91-1.003-1.12-1.498-2.463-1.498-4.027 0-1.515.459-2.82 1.377-3.905 1.159-1.354 2.657-2.032 4.48-2.032 1.667 0 3.068.64 4.191 1.922.99 1.12 1.485 2.45 1.485 4.003 0 1.81-.64 3.313-1.92 4.483zm-11.529 1.121h-2.464V16.04l2.464-1.11v11.184zm-5.254-.16a1.514 1.514 0 0 1-1.123.468c-.447 0-.821-.16-1.123-.468a1.605 1.605 0 0 1-.459-1.158c0-.431.157-.801.471-1.109a1.496 1.496 0 0 1 1.111-.456c.447 0 .821.16 1.123.469.302.307.459.69.459 1.12 0 .444-.157.826-.459 1.134zm-5.871-2.02c.254 0 .641-.074 1.16-.222v2.353c-.544.16-1.039.246-1.498.246-.857 0-1.545-.296-2.065-.887-.531-.603-.797-1.54-.797-2.833v-5.395h-1.171V14.93h1.171v-2.476l2.464-.997v3.473h1.739v2.266h-1.739v5.395c0 .949.217 1.343.736 1.343zm-9.231-6.122c-.52-.677-1.232-1.01-2.114-1.01-1.497 0-2.596 1.01-2.946 2.735h5.844c-.18-.703-.434-1.281-.784-1.725zm3.224 3.67h-8.284c.12.604.338 1.11.64 1.528.567.776 1.376 1.17 2.451 1.17 1.147 0 2.186-.542 2.765-1.44l.218-.358 2.125.899c-1.231 2.118-2.934 3.177-5.12 3.177-1.691 0-3.067-.615-4.142-1.86-.979-1.145-1.474-2.5-1.474-4.088 0-1.835.628-3.35 1.884-4.52 1.015-.95 2.211-1.417 3.575-1.417 1.558 0 2.862.591 3.9 1.774.532.603.931 1.354 1.184 2.278.193.69.29 1.404.29 2.143 0 .124 0 .357-.012.715zM110.269 17.8a3.096 3.096 0 0 0-2.271-.936c-.942 0-1.715.345-2.33 1.022-.58.653-.87 1.527-.87 2.624 0 1.244.374 2.204 1.111 2.882.58.53 1.28.788 2.113.788.942 0 1.727-.345 2.355-1.047.592-.653.882-1.552.882-2.673 0-1.12-.326-2.007-.99-2.66zm1.557 7.18c-1.086.986-2.294 1.479-3.634 1.479-1.148 0-2.271-.444-3.382-1.318v.973h-2.463V10.41l2.463-1.11v6.602c1.123-.874 2.246-1.318 3.382-1.318.905 0 1.787.247 2.644.752a5.845 5.845 0 0 1 2.138 2.155c.519.924.773 1.922.773 3.018 0 1.81-.64 3.3-1.921 4.47zm-15.464-8.165c-.785 0-1.34.455-1.34 1.133 0 .222.06.419.169.579.12.16.58.406 1.389.726l1.014.394c1.836.727 2.621 1.639 2.621 3.067 0 1.084-.399 1.996-1.208 2.722-.749.678-1.678 1.023-2.79 1.023-1.992 0-3.309-1.047-4.13-3.264l2.041-.85c.338.702.664 1.182.966 1.441.302.271.689.407 1.148.407.519 0 .917-.16 1.17-.48.23-.272.34-.567.34-.9 0-.222-.061-.419-.182-.591-.133-.185-.604-.444-1.4-.752l-1.124-.443c-1.582-.628-2.38-1.626-2.38-3.005 0-.998.363-1.823 1.088-2.464.736-.652 1.618-.973 2.645-.973 1.582 0 2.802.813 3.647 2.439l-1.932.998c-.592-.9-1.027-1.207-1.752-1.207zm-7.128 7.119c.254 0 .64-.074 1.16-.222v2.353c-.544.16-1.04.246-1.498.246-.858 0-1.546-.296-2.065-.887-.532-.603-.797-1.54-.797-2.833v-5.395h-1.172V14.93h1.172v-2.476l2.463-.997v3.473h1.74v2.266h-1.74v5.395c0 .949.218 1.343.737 1.343zm-7.359-6.775c-.99 0-1.654.332-2.005.998-.277.53-.41 1.38-.41 2.574v5.383h-2.464V14.929h2.464v.899c.47-.382.857-.64 1.171-.764.302-.123.7-.184 1.196-.184.242 0 .543.012.906.049v2.254c-.399-.012-.688-.025-.858-.025zm-10.134.53c-.604-.554-1.353-.825-2.234-.825-.93 0-1.715.357-2.355 1.06-.58.64-.87 1.502-.87 2.586 0 1.231.375 2.18 1.111 2.857.604.542 1.329.813 2.162.813.978 0 1.787-.357 2.416-1.06.58-.652.869-1.526.869-2.635 0-1.195-.362-2.13-1.1-2.796zm1.667 7.304c-1.075.973-2.356 1.466-3.84 1.466-1.728 0-3.153-.64-4.276-1.91-1.002-1.12-1.497-2.463-1.497-4.027 0-1.515.459-2.82 1.376-3.905 1.16-1.354 2.657-2.032 4.48-2.032 1.667 0 3.068.64 4.191 1.922.99 1.12 1.486 2.45 1.486 4.003 0 1.81-.64 3.313-1.92 4.483zm-14.675-7.316c-.604-.542-1.316-.813-2.15-.813-.93 0-1.702.345-2.318 1.022-.592.653-.882 1.54-.882 2.66 0 1.232.362 2.18 1.1 2.846.579.53 1.292.788 2.124.788.592 0 1.148-.16 1.667-.468 1.05-.653 1.57-1.712 1.57-3.178 0-1.244-.374-2.192-1.11-2.857zm1.679 7.304c-1.087.985-2.295 1.478-3.635 1.478-1.136 0-2.259-.444-3.382-1.318v5.751l-2.463 1.11V14.928h2.463v.973c1.111-.874 2.234-1.318 3.382-1.318.905 0 1.787.247 2.644.752a5.669 5.669 0 0 1 2.126 2.167c.52.924.785 1.934.785 3.03 0 1.798-.64 3.277-1.92 4.447zM45.282 12.07c-.495-.455-1.099-.677-1.811-.677-.81 0-1.45.27-1.908.813-.387.455-.58.973-.58 1.527 0 .9.7 1.626 2.089 2.18l1.57.604c1.666.653 2.79 1.453 3.37 2.402.41.652.615 1.404.615 2.253 0 1.54-.567 2.834-1.702 3.868-1.04.948-2.295 1.416-3.768 1.416-1.208 0-2.32-.267-3.2-.997-.605-.506-1.343-1.128-2.052-2.977l1.97-1.426c.181.727.878 1.57 1.168 1.94.544.677 1.268 1.01 2.15 1.01.87 0 1.582-.32 2.137-.949.471-.53.7-1.158.7-1.86 0-.456-.12-.85-.35-1.158-.325-.443-1.062-.886-2.185-1.33l-1.498-.591c-2.379-.936-3.562-2.402-3.562-4.397 0-1.392.495-2.55 1.497-3.449.978-.874 2.186-1.318 3.611-1.318 1.558 0 2.838.567 3.852 1.688.303.332.628.788.979 1.367l-2.078 1.342c-.374-.579-.712-1.01-1.014-1.28zM141.93 12.773c-.447 0-.821-.16-1.123-.48a1.54 1.54 0 0 1-.471-1.146c0-.431.157-.813.471-1.12a1.554 1.554 0 0 1 1.123-.469c.447 0 .821.16 1.135.468.302.308.459.69.459 1.133 0 .456-.157.838-.459 1.146a1.56 1.56 0 0 1-1.135.468z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconLogoCaption = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor }) => [
    {
      verticalAlign: 'middle',
    },
    backgroundColor && {
      backgroundColor,
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    circleColor && {
      circle: {
        fill: circleColor,
      },
    },
  ]
);