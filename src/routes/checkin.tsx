import { Box, Card, Rating, TextField, Typography } from "@mui/material";

export default function Checkin() {
  return (
    <Box>
      <Typography variant="h4" component="h4" gutterBottom>
        Bottle Name
      </Typography>
      <TextField id="outlined-basic" label="Tasting Notes" variant="standard" />

      <textarea placeholder="Tasting Notes"></textarea>
      <Card>
        <Rating
          name="simple-controlled"
          //   value={value}
          //   onChange={(event, newValue) => {
          //     setValue(newValue);
          //   }}
        />
      </Card>
    </Box>
  );
}
