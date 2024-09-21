import { Container, Header, ScrollableContent } from './styles';
import React from 'react';

export function Section({ title, children }) {
  const childrenArray = React.Children.toArray(children);

  return (
    <Container>
      <Header>
        <h2>{title}</h2>
        {childrenArray[0]}
      </Header>

      <ScrollableContent>{childrenArray.slice(1)}</ScrollableContent>
    </Container>
  );
}
