import { AccountCircle as AccountCircleIcon } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardHeader,
  TextField,
} from "@mui/material";
import { red } from "@mui/material/colors";

export default function Search() {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "flex-end", width: "100%" }}>
        <AccountCircleIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField label="Search" variant="standard" sx={{ flex: 1 }} />
      </Box>
      <Card>
        <CardActionArea>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                L
              </Avatar>
            }
            title="Lagavullen 13"
            subheader="Lagavullen"
          />
        </CardActionArea>
      </Card>
    </Box>
  );
}
