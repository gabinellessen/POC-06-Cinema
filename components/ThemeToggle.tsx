import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const ThemeToggle: React.FC<{ toggleTheme: () => void }> = ({ toggleTheme }) => (
  <Button onClick={toggleTheme}>Trocar Tema</Button>
);

export default ThemeToggle;
