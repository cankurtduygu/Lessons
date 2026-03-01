import { Box, useTheme } from "@mui/material";
import React from "react";
import OnlineFriends from "./OnlineFriends";
import RecentMessages from "./RecentMessages";

export default function RightSidebar() {
  const theme = useTheme();
  return (
    <Box position={"sticky"} top={theme.spacing(10)}>
      <OnlineFriends />
      <RecentMessages/>
    </Box>
  );
}
