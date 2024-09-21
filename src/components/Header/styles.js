import styled from 'styled-components';

export const Container = styled.header`
  height: 116px;
  width: 100%;
  padding: 0 123px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > a img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-right: 16px;

    a {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    strong {
      white-space: nowrap;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
