import Button from "@/components/base/Button"
import ProductsList from "@/components/productsList/ProductsList"
import { useState } from "react";
import CreateProductModal from "@/components/CreateProductModal";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { useMemo } from "react";

function ProductsPage() {
  const [openModal, setOpenModal] = useState(false);
  const { login } = useSelector((state) => state.auth);

  const isAdmin = useMemo(() => {
    if (!login.user) return false;

    return login?.user?.rol?.name === 'admin';
  }, [login])

  return (
    <div className={clsx(
      'grid grid-cols-1 h-full grid-rows-1 gap-y-4',
      {
        '!grid-rows-[auto_1fr]': isAdmin
      }
    )}>
      {isAdmin ? (
        <div className="w-full flex justify-end pr-1">
          <Button
            className="flex items-center gap-x-1"
            type="button"
            onClick={() => setOpenModal(true)}
            text
          >
            <span className="material-symbols-outlined">add_circle</span>
            <span>Agregar producto</span>
          </Button>
        </div>
      ) : null}
      <div className="px-[7%] h-full overflow-y-auto pb-6">
        <ProductsList />
      </div>

      <CreateProductModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  )
}

export default ProductsPage