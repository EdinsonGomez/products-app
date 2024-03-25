import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '@/store/productsSlice';
import { useEffect } from "react";
import ProductsItem from "./ProductsItem";

function ProductsList() {
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
      {list?.data?.map((product) => (
        <ProductsItem
          key={product.id}
          data={product}
        />
      ))}
    </div>
  )
}

export default ProductsList