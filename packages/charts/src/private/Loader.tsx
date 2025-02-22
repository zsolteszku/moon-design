import React from 'react';
import { Text } from '@heathmont/moon-core';
import { ColorNames } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Title = styled(Text)({
  marginTop: rem(16),
});

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

type Props = {
  icon: React.ReactNode;
  title: string | React.ReactNode;
  color?: ColorNames;
};

export const Loader: React.FC<Props> = ({
  icon,
  title,
  color = 'trunks.100',
}) => (
  <Container>
    {icon}
    <Title size={14} color={color}>
      {title}
    </Title>
  </Container>
);
