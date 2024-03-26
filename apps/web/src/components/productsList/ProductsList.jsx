import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '@/store/productsSlice';
import { useEffect } from "react";
import ProductsItem from "./ProductsItem";
import Loader from "../base/Loader";

function ProductsList() {
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state.products);

  const onRequest = () => {
    dispatch(fetchProducts());
  }

  useEffect(() => {
    dispatch(fetchProducts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {list.status === 'succeeded' && list.data?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
          {list?.data?.map((product) => (
            <ProductsItem
              key={product.id}
              data={product}
            />
          ))}
        </div>
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          {list.status === 'loading' && <Loader />}

          {list.status === 'failed' && !!list.error && (
            <div className="flex flex-col justify-center items-center">
              <p className="text-rose-500">{list.error ?? ''}</p>
              <span
                className="material-symbols-outlined text-black/50 hover:cursor-pointer"
                onClick={onRequest}
              >
                refresh
              </span>
            </div>

          )}

          {list.status === 'succeeded' && list.data?.length === 0 && (
            <div className="flex flex-col items-center">
              <p>No hay productos que mostrar en este momento</p>
              <span
                className="material-symbols-outlined text-black/50 hover:cursor-pointer"
                onClick={onRequest}
              >
                refresh
              </span>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default ProductsList