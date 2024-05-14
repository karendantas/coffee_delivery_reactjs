import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${ props => props.theme['background']};
        color: ${props => props.theme['base-text']};
    }

    body, input, textarea, button{
        font-family: 'Baloo 2', sans-serif;
        font-weight: 400;
        line-height: 1.3;
        font-size: 1rem;
    }

`