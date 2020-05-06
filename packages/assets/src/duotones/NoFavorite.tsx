import * as React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/sportsbet-themes';
import { themed } from '@heathmont/sportsbet-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 174 174"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.1}
      d="M118.204 140.94H55.999C52.345 140.94 49.387 137.982 49.387 134.328V80.707C49.387 77.053 52.345 74.095 55.999 74.095H118.204C121.858 74.095 124.816 77.053 124.816 80.707V134.328C124.816 137.982 121.858 140.94 118.204 140.94Z"
      fill="currentColor"
    />
    <path
      d="M126.701 134.067C115.884 134.067 107.097 125.28 107.097 114.463C107.097 103.646 115.884 94.859 126.701 94.859C137.518 94.859 146.305 103.646 146.305 114.463C146.305 125.28 137.518 134.067 126.701 134.067ZM126.701 97.092C117.102 97.092 109.301 104.893 109.301 114.492C109.301 124.091 117.102 131.892 126.701 131.892C136.3 131.892 144.101 124.091 144.101 114.492C144.101 104.893 136.3 97.092 126.701 97.092Z"
      fill="currentColor"
    />
    <path
      d="M118.61 123.685C118.32 123.685 118.059 123.569 117.827 123.366C117.392 122.931 117.392 122.235 117.827 121.8L134.038 105.589C134.473 105.154 135.169 105.154 135.604 105.589C136.039 106.024 136.039 106.72 135.604 107.155L119.393 123.366C119.161 123.569 118.871 123.685 118.61 123.685Z"
      fill="currentColor"
    />
    <path
      d="M134.821 123.685C134.531 123.685 134.27 123.569 134.038 123.366L117.827 107.155C117.392 106.72 117.392 106.024 117.827 105.589C118.262 105.154 118.958 105.154 119.393 105.589L135.604 121.8C136.039 122.235 136.039 122.931 135.604 123.366C135.401 123.569 135.111 123.685 134.821 123.685Z"
      fill="currentColor"
    />
    <path
      d="M51.011 118.378C50.895 118.378 50.808 118.349 50.692 118.32C46.545 117.044 43.645 113.158 43.645 108.837V66.584C43.645 58.464 50.257 51.852 58.377 51.852H108.924C113.245 51.852 117.16 54.752 118.407 58.899C118.581 59.479 118.262 60.088 117.682 60.262C117.102 60.436 116.493 60.117 116.319 59.537C115.333 56.318 112.288 54.056 108.953 54.056H58.377C51.475 54.056 45.849 59.682 45.849 66.584V108.837C45.849 112.201 48.111 115.246 51.33 116.203C51.91 116.377 52.229 116.986 52.055 117.566C51.91 118.059 51.475 118.378 51.011 118.378Z"
      fill="currentColor"
    />
    <path
      d="M45.1241 112.491C45.0081 112.491 44.9211 112.462 44.8051 112.433C40.6581 111.157 37.7581 107.271 37.7581 102.95V65.424C37.7581 54.723 46.4871 45.994 57.1881 45.994H103.037C107.358 45.994 111.273 48.894 112.52 53.041C112.694 53.621 112.375 54.23 111.795 54.404C111.215 54.578 110.606 54.259 110.432 53.679C109.446 50.46 106.401 48.198 103.037 48.198H57.1881C47.6761 48.198 39.9621 55.941 39.9621 65.424V102.95C39.9621 106.314 42.2241 109.359 45.4431 110.345C46.0231 110.519 46.3421 111.128 46.1681 111.708C46.0521 112.201 45.6171 112.491 45.1241 112.491Z"
      fill="currentColor"
    />
    <path
      d="M81.7958 82.0516L81.7958 82.0516L85.2431 75.0701C85.5931 74.3015 86.33 73.885 87.1162 73.885C87.9463 73.885 88.6312 74.312 89.0333 75.043L89.0386 75.0527L89.0435 75.0626L92.4928 82.0481C93.004 83.0426 93.9127 83.716 94.9863 83.8658L94.9897 83.8662L102.702 84.997C102.702 84.997 102.702 84.9971 102.703 84.9971C103.509 85.1125 104.119 85.6561 104.379 86.3998C104.653 87.1827 104.409 87.9887 103.855 88.5425L103.851 88.5462L98.283 93.9982L98.2809 94.0003C97.5024 94.7536 97.148 95.8633 97.3242 96.922C97.3243 96.9223 97.3243 96.9225 97.3244 96.9228L98.6291 104.606L98.6313 104.619L98.6311 104.619C98.7434 105.405 98.4403 106.165 97.8019 106.653L97.7943 106.659L97.7865 106.664C97.1464 107.116 96.3076 107.195 95.5837 106.815L81.7958 82.0516ZM81.7958 82.0516L81.7947 82.054C81.3202 83.0278 80.3929 83.6872 79.2966 83.8669L71.5885 84.997C71.5882 84.997 71.5879 84.9971 71.5877 84.9971C70.8011 85.1098 70.1435 85.6393 69.9075 86.4105C69.6395 87.19 69.8843 87.9912 70.4356 88.5425L70.4356 88.5425L70.4394 88.5462L76.0074 93.9982L76.0095 94.0003C76.7882 94.7539 77.1425 95.835 76.966 96.9229C76.9659 96.9235 76.9658 96.9241 76.9657 96.9246L75.662 104.602C75.5086 105.418 75.8668 106.178 76.4884 106.653C77.1495 107.159 77.9988 107.187 78.7067 106.815C78.7067 106.815 78.7067 106.815 78.7067 106.815C78.7068 106.815 78.7069 106.814 78.707 106.814L85.6087 103.19L85.609 103.189C86.5653 102.686 87.7251 102.686 88.6813 103.189L88.6817 103.19L95.5833 106.814L81.7958 82.0516ZM75.7844 107.594L75.7824 107.592C74.7434 106.832 74.2457 105.601 74.471 104.374L74.471 104.374L74.4721 104.368L75.7771 96.6827L75.7774 96.6812C75.8918 95.9946 75.6611 95.3118 75.1737 94.8244L75.1737 94.8244L75.17 94.8207L69.602 89.3687L69.6007 89.3675C68.6916 88.4836 68.3674 87.2044 68.7695 85.9981C69.175 84.7817 70.1812 83.9302 71.4385 83.7541L71.4385 83.7542L71.4417 83.7537L79.1557 82.6227L79.1557 82.6228L79.1654 82.6212C79.8421 82.5084 80.4145 82.0914 80.7194 81.4816L80.7205 81.4793L84.1715 74.4904L84.1724 74.4886C84.7263 73.3556 85.8567 72.652 87.1162 72.652C88.3756 72.652 89.5061 73.3556 90.06 74.4886L90.0608 74.4903L93.5118 81.4794L93.5129 81.4816C93.8179 82.0914 94.3903 82.5084 95.067 82.6212L95.0669 82.6213L95.0766 82.6227L102.791 83.7537L102.794 83.7541C104.051 83.9302 105.057 84.7817 105.463 85.9981C105.865 87.2044 105.541 88.4836 104.632 89.3675L104.63 89.3687L99.0623 94.8207L99.0623 94.8207L99.0586 94.8244C98.5712 95.3118 98.3405 95.9947 98.455 96.6812L98.4552 96.6827L99.7597 104.365C99.7598 104.365 99.7598 104.365 99.7599 104.366C99.9628 105.611 99.4782 106.865 98.4564 107.588C97.4188 108.322 96.1109 108.422 94.9735 107.842C94.9726 107.842 94.9716 107.841 94.9707 107.841L88.1034 104.219L88.1035 104.219L88.0938 104.214C87.489 103.911 86.7723 103.911 86.1676 104.214L86.1675 104.214L86.1587 104.218L79.2567 107.843L79.2563 107.844C78.7789 108.095 78.2501 108.221 77.7202 108.221C77.0363 108.221 76.3592 108.019 75.7844 107.594Z"
      fill="white"
      stroke="white"
    />
    <path
      d="M103.559 124.142H59.45C54.2451 124.142 50.032 119.929 50.032 114.724V67.657C50.032 62.4522 54.2451 58.239 59.45 58.239H114.811C120.016 58.239 124.229 62.4522 124.229 67.657V89.61C124.229 89.9429 123.96 90.212 123.627 90.212C123.294 90.212 123.025 89.9429 123.025 89.61V67.657C123.025 63.1179 119.35 59.443 114.811 59.443H59.45C54.9108 59.443 51.236 63.1179 51.236 67.657V114.724C51.236 119.263 54.9108 122.938 59.45 122.938H103.588C103.917 122.938 104.184 123.201 104.19 123.528C104.167 123.878 103.884 124.142 103.559 124.142Z"
      fill="white"
      stroke="white"
    />
  </svg>
);

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};
const NoFavorite = styled(Svg)<SvgProps>(
  ({ color, height, width, fontSize, verticalAlign, theme }) => ({
    ...(color && {
      color: themed('color', color)(theme),
    }),
    height,
    width,
    fontSize,
    verticalAlign,
  })
);
NoFavorite.defaultProps = {
  verticalAlign: 'middle',
};
export default NoFavorite;