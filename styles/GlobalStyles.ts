import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }

  @media (min-width: 769px) {
    body {
      font-size: 16px;
    }
  }
`;

export default GlobalStyles;
