import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 223px;
  padding: 32px;
  margin-bottom: 24px;
  border: none;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.PINK_TRANSPARENT};

  > h1 {
    text-align: left;
    line-height: 32px;
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > .ratings svg {
    stroke: ${({ theme }) => theme.COLORS.PINK};
    margin-right: 6px;
  }

  > p {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_150};
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Número máximo de linhas */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis; /* Adiciona "..." no final se exceder 2 linhas */
  }

  > footer {
    width: 100%;
    display: flex;
  }
`;
