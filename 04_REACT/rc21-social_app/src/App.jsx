import { useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import AppRouter from "./router/AppRouter";
import useThemeStore, { getDesignTokens } from "./stores/theme-store";

function App() {
  const mode = useThemeStore((state) => state.mode)

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
  );
}

export default App;
