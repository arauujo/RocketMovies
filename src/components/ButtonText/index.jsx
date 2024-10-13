import { Container } from './styles';

export function ButtonText({ title, isActive = false, children, ...rest }) {
  return (
    <Container type="button" $isactive={isActive.toString()} {...rest}>
      {children}
      {title}
    </Container>
  );
}
