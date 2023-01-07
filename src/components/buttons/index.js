import Button from "@mui/material/Button";
import { useProduct } from "../../store/products-context";

export default function BasicButtons({ id, isFavorite }) {
  const { toggleFavourite } = useProduct();
  const toggleFavouriteHandler = () => toggleFavourite(id);

  return (
    <Button onClick={toggleFavouriteHandler} variant="outlined" color="error">
      {isFavorite ? `Un-Favorite` : `Favourite`}
    </Button>
  );
}
