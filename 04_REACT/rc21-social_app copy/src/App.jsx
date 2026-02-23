import { useState } from 'react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import './App.css'
import { ColorModeContext, getDesignTokens } from './lib/theme-config'

function App() {

  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),[]);

    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={'dark'}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
