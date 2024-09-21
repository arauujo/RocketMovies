import { Container } from '../Tag/styles';

export function Tag({ title, ...rest }) {
  return <Container {...rest}>{title}</Container>;
}
