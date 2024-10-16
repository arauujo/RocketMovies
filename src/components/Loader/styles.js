import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .loader-circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 10px solid;
    border-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-top-color: ${({ theme }) => theme.COLORS.PINK};
    animation: loader-circle 1s linear infinite;
  }

  span {
    font-size: 24px;
    font-weight: bold;
    margin-top: 16px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  @keyframes loader-circle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
