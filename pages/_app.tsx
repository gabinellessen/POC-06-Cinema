import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import lightTheme from '../styles/lightTheme';
import darkTheme from '../styles/darkTheme';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* Passamos o toggleTheme como prop global, se necessário */}
      <Component {...pageProps} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}
