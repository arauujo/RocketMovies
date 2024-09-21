import styled from 'styled-components';

export const Container = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  margin-top: 15px;
  margin-right: 8px;
  padding: 5px 16px;
  border-radius: 8px;
`;
