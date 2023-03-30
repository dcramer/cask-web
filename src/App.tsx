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

function App() {
  return (
    <Container maxWidth="sm" style={{ position: "relative" }}>
      <Box sx={{ pb: 7 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Cask
        </Typography>

        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Fab
          color="primary"
          aria-label="add"
          style={{
            position: "absolute",
            bottom: 16,
            right: 16,
          }}
        >
          <Add />
        </Fab>

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
            <BottomNavigationAction label="Activity" icon={<LocalActivity />} />
            <BottomNavigationAction label="Favorites" icon={<Favorite />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
