import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_950};
    color: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
  }

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

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  button.secondary:hover {
    filter: brightness(1.2);
  }
`;
