import React from "react";
import Container from "@mui/material/Container";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Fab,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import { Add, Favorite, LocalActivity, LocationOn } from "@mui/icons-material";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <Container maxWidth="sm" style={{ position: "relative" }}>
      <Box sx={{ pb: 7 }}>
        <Outlet />

        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={null}
            onChange={(event, newValue) => {
              // setValue(newValue);
            }}
          >
            <BottomNavigationAction
              href="/"
              label="Activity"
              icon={<LocalActivity />}
            />
            <BottomNavigationAction label="Favorites" icon={<Favorite />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </Container>
  );
}
