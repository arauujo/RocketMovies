import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_950};
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 85vw;

  span {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
`;

export const Button = ({ icon: Icon, title, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {Icon && <Icon size={20} />}
      {title}
    </StyledButton>
  );
};

export const StyledButton = styled.button`
  width: auto;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  height: 48px;
  border: 0;
  padding: 0 32px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 6px;
  }
`;
