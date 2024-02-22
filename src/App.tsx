import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './routes'
import {GlobalStyle, theme } from './styles/global'
import { AuthContextProvider } from './contexts/Auth'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthContextProvider>
        <AppRoutes />
      </AuthContextProvider>
    </ThemeProvider>
  );
}
