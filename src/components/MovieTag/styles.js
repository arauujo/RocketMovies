import styled from 'styled-components';

export const Container = styled.div`
  height: 56px;
  padding-right: 16px;
  background-color: ${({ theme, $isnew }) => ($isnew ? 'transparent' : theme.COLORS.BACKGROUND_850)};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border: ${({ theme, $isnew }) => ($isnew ? `2px dashed ${theme.COLORS.GRAY_200}` : 'none')};
  border-radius: 10px;
  display: flex;
  align-items: center;

  > button {
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 22px;
    }
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    height: 56px;
    width: auto;
    padding: 16px 0 16px 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;
