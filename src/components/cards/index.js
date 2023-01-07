import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "../buttons";

export default function BasicCard({ id, title, description, isFavorite }) {
  return (
    <Card sx={{ minWidth: 275, border: "1px solid", margin: "1rem" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button id={id} isFavorite={isFavorite} />
      </CardActions>
    </Card>
  );
}
