import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import { Paper, Typography, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import useLayoutStore from "../stores/layout-store";

export default function SideBar() {
  const { setOpen } = useLayoutStore();

  const location = useLocation();
  const theme = useTheme();

  const navItems = [
    { text: "Home", path: "/", icon: <HomeIcon /> },
    { text: "Profile", path: "/profile", icon: <PersonIcon /> },
    { text: "Friends", path: "/friends", icon: <PeopleIcon /> },
    { text: "Messages", path: "/messages", icon: <ChatIcon /> },
    // { text: "Settings", path: "/settings", icon: <SettingsIcon /> },
  ];

  return (
    <Paper
      sx={{
        p: 2,
        height: { md: "calc(100vh - 85px)", xs: "100vh" },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h6"
        sx={{ mb: 1, color: "primary.main", fontWeight: "bold" }}
      >
        App Menu
      </Typography>
      <Divider sx={{ mb: 1 }} />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{
              borderRadius: theme.shape.borderRadius,
              backgroundColor:
                location.pathname === item.path
                  ? theme.palette.action.selected
                  : "transparent",
              "&:hover": {
                backgroundColor:
                  location.pathname === item.path
                    ? theme.palette.action.selected
                    : theme.palette.action.hover,
              },
            }}
          >
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={setOpen}
            >
              <ListItemIcon
                sx={{
                  color:
                    location.pathname === item.path
                      ? theme.palette.primary.main
                      : "inherit",
                  minWidth: 45,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} /> {/* Spacer for pushing content down */}
      <Divider sx={{ mt: 2 }} />
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ pt: 2 }}
      >
        © 2026 Sth Social
      </Typography>
    </Paper>
  );
}
