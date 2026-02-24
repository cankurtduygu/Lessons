import { Box, IconButton, useTheme } from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useContext } from "react";
import { ColorModeContext } from "../lib/theme-config";

export default function Home() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  console.log(theme);
  return (
    <Box>
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}
