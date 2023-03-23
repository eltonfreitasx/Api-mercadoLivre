import { ThemeProvider } from "styled-components"
import { Router } from "../Router"

import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/dafault"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <Router />      
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
