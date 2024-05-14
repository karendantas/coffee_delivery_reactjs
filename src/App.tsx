import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from './styles/themes/default';

import { Router } from './routes';


function App() {
  
  return (
    <ThemeProvider theme={DefaultTheme} >

      <BrowserRouter>
        <Router />
      </BrowserRouter>

        <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
