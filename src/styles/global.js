import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background-color: ${(props) => props.theme['gray-100']};
        color: ${(props) => props.theme['red-700']}
    }

    body, button {
        font-weight: 400;
        font-size: 1rem;
}`