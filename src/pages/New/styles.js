import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Form = styled.form`
  padding-right: 16px;
  margin: 40px auto;
  max-width: 65vw;
  max-height: 80vh;
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

  > header {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    h1 {
      margin-top: 24px;
      font-size: 36px;
      font-weight: 500;
    }
  }

  > div {
    display: flex;
    gap: 40px;
  }

  > textarea {
    margin-top: 32px;
  }

  > section {
    margin: 0;
    margin-top: 32px;

    div:first-child {
      align-items: baseline;
      flex-direction: column;
      gap: 24px;
    }

    h2 {
      font-size: 20px;
      font-weight: normal;
      color: ${({ theme }) => theme.COLORS.GRAY_150};
    } 
  }

  .tags {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
    width: 100%;
    height: 88px;
    padding: 0 16px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    border-radius: 8px;

    div:first-child {
      flex-direction: row;
      gap: 0;
      align-items: center;
    }
  }
`;
