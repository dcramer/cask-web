import React from "react";
import Container from "@mui/material/Container";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import { Favorite, LocationOn, Restore } from "@mui/icons-material";

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ pb: 7 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Cask
        </Typography>

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
            <BottomNavigationAction label="Recents" icon={<Restore />} />
            <BottomNavigationAction label="Favorites" icon={<Favorite />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
