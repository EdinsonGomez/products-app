import Card from "../base/Card/Card"
import CardContent from "../base/Card/CardContent";

const formatPrice = (price) => {
  if (!price || price === 0) return '$ 0,00';

  const formatedPrice = price.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP'
  });

  return formatedPrice;
}

function ProductsItem({ data }) {
  return (
    <div>
      <Card>
        <CardContent>
          <div className="flex flex-col gap-2 h-full">
            <p className="text-2xl font-bold">{data?.name ?? ''}</p>
            <p className="mt-5 text-md text-black/60 max-h-28 line-clamp-4 overflow-hidden">{data?.description ?? ''}</p>
            <div className="flex mt-auto items-center gap-x-1">
              <span className="mt-3 text-2xl font-semibold">{formatPrice(data?.price)}</span>
              <small className="self-center">COP</small>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductsItem