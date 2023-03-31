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
import { Bottle } from "../types";

function getBottleDisplayName(bottle: Bottle): string {
  return `${bottle.brand?.name || bottle.producer.name} ${bottle.name}`;
}

export default function Search() {
  const bottles: Bottle[] = [
    {
      id: "1",
      brand: {
        id: "1",
        name: "Hibiki",
      },
      name: "12",
      producer: {
        id: "1",
        name: "Hibiki",
        country: "Japan",
      },
    },
  ];

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "flex-end", width: "100%" }}>
        <AccountCircleIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField label="Search" variant="standard" sx={{ flex: 1 }} />
      </Box>
      {bottles.map((bottle) => {
        return (
          <Card>
            <CardActionArea href={`/b/${bottle.id}/checkin`}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    L
                  </Avatar>
                }
                title={getBottleDisplayName(bottle)}
                subheader={bottle.producer.name}
              />
            </CardActionArea>
          </Card>
        );
      })}
    </Box>
  );
}
