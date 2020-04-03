import styled from 'styled-components';
import { rem } from '@heathmont/sportsbet-utils';

type ToggleProps = {
  topRight?: boolean;
};

const Toggle = styled.button<ToggleProps>(
  ({ theme: { space }, topRight = true }) => [
    {
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      border: 'none',
      fontSize: '1rem',
    },
    topRight && {
      position: 'absolute',
      top: rem(space.default),
      right: rem(space.default),
    },
  ]
);

export { ToggleProps };

export default Toggle;