import Button from "@/components/base/Button"
import ProductsList from "@/components/productsList/ProductsList"
import { useState } from "react";
import CreateProductModal from "@/components/CreateProductModal";

function ProductsPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="w-full mb-4 flex justify-end pr-3">
        <Button
          type="button"
          onClick={() => setOpenModal(true)}
        >
          Crear producto
        </Button>
      </div>
      <div className="px-[7%]">
        <ProductsList />
      </div>

      <CreateProductModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  )
}

export default ProductsPage