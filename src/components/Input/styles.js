import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_850};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 10px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  > input {
    height: 56px;
    width: auto;
    padding: 18px 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0; 
  }

  input[type=number] {
    -moz-appearance: textfield;
    appearance: none;
  }

  > svg {
    margin-left: 16px;
  }
`;
