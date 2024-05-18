import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from './styles/themes/default';

import { Router } from './routes';
import { ProductsContextProvider } from './contexts/ProductsContext';


function App() {
  
  return (
    <ThemeProvider theme={DefaultTheme} >

      <BrowserRouter>
        <ProductsContextProvider>
          <Router />
        </ProductsContextProvider>
      </BrowserRouter>

        <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
