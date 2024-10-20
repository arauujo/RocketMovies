import { Link } from 'react-router-dom';
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
    cursor: pointer;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-right: 16px;

    strong {
      white-space: nowrap;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;