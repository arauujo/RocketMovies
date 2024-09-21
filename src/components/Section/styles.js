import styled from 'styled-components';

export const Container = styled.section`
  margin: 47px 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;

  > h2 {
    font-size: 32px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > button {
    width: auto;
    margin-top: 0;
    margin-left: 16px;
  }
`;

export const ScrollableContent = styled.div`
  max-height: 65vh;
  margin-top: 16px;
  padding-right: 8px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px; 
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    cursor: n-resize;
  }
`;
