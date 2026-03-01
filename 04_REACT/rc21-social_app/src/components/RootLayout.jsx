import { Box, Drawer, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import useLayoutStore from "../stores/layout-store";

export default function RootLayout() {
  const { open, setOpen } = useLayoutStore();
  // console.log(open);

  // const [open, setOpen] = React.useState(false);

  // const toggleDrawer = () => {
  //   setOpen((prev) => !prev);
  // };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <Navbar toggleDrawer={toggleDrawer} /> */}
      <Navbar />
      <Box
        component={"main"}
        sx={{ flexGrow: 1, p: { xs: 1, md: 2 }, pt: { xs: 9, md: 10 } }}
      >
        <Grid container spacing={{ xs: 2 }}>
          <Grid size={{ md: 3 }} display={{ xs: "none", md: "block" }}>
            {/* <SideBar toggleDrawer={toggleDrawer} /> */}
            <SideBar />
          </Grid>

          <Drawer
            sx={{ display: { xs: "block", md: "none" } }}
            open={open}
            onClose={setOpen}
          >
            {/* <SideBar toggleDrawer={toggleDrawer} /> */}
            <SideBar />
          </Drawer>

          <Grid size={{ xs: 12, md: 9 }}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
