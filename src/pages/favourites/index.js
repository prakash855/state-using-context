import { useProduct } from "../../store/products-context";
import Card from "../../components/cards";

const Favourites = () => {
  const { products } = useProduct();
  const favouriteProducts = [...products].filter((p) => p.isFavorite);
  return (
    <>
      {favouriteProducts?.map((prod) => (
        <Card key={prod.id} {...prod} />
      ))}
    </>
  );
};

export default Favourites;
