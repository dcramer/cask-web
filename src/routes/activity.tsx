import { Add as AddIcon } from "@mui/icons-material";
import { Box, Fab, Skeleton } from "@mui/material";

export default function Activity() {
  return (
    <Box sx={{ pb: 7 }}>
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
        href="/search"
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}
