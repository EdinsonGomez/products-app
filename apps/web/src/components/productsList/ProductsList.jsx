import { useDispatch } from "react-redux";
import { fetchProducts } from '@/store/productsSlice';
import { useEffect } from "react";

function ProductsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>ProductsList</div>
  )
}

export default ProductsList