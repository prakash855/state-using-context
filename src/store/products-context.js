import { createContext, useContext, useState } from "react";
import data from "../products.json";

const ProductsContext = createContext({
  products: [],
  toggleFavourite: (id) => {}
});

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(data);

  const toggleFavourite = (id) => {
    const newState = (currentProduct) => {
      const currentIndex = currentProduct.findIndex((p) => p.id === id);
      const newFavouriteStatus = !currentProduct[currentIndex].isFavorite;
      const updatedProducts = [...currentProduct];
      updatedProducts[currentIndex] = {
        ...currentProduct[currentIndex],
        isFavorite: newFavouriteStatus
      };
      return updatedProducts;
    };
    setProducts(newState);
  };

  return (
    <ProductsContext.Provider value={{ products, toggleFavourite }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProduct = () => useContext(ProductsContext);

export { useProduct, ProductProvider };
