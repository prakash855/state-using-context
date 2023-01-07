import { useProduct } from "../../store/products-context";
import Card from "../../components/cards";
const Products = () => {
  const { products } = useProduct();
  return (
    <>
      {products.map((prod) => (
        <Card key={prod.id} {...prod} />
      ))}
    </>
  );
};

export default Products;
