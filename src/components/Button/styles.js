import styled from 'styled-components';

export const Container = styled.button`
  margin-top: 16px;
  width: 100%;
  height: 56px;
  padding: 0 32px;
  border: 0;
  border-radius: 10px;
  background-color: ${({ className, theme }) => (className === 'secondary' ? theme.COLORS.BACKGROUND_1000 : theme.COLORS.PINK)};
  color: ${({ className, theme }) => (className === 'secondary' ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_800)};
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.5;
  }
`;
