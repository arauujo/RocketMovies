import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: ${({ theme, $isactive }) => ($isactive === 'true' ? theme.COLORS.PINK : theme.COLORS.GRAY_100)};
`;
