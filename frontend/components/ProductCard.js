import Link from 'next/link'
import AddToCart from './AddToCart'

function ProductCard ({ product }) {
    const { API_URL } = process.env

    return (
      <div className="product-card w-full my-4 border-2">
        <div className="flex justify-center">
          <img
            src={API_URL + product.image.url}
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div>
          <span>
            <p className="font-bold text-3xl">{product.title}</p>
            <p className="italic text-xl">{product.price}</p>
            <p className="">{product.description}</p>
          </span>
        </div>
        <AddToCart />
      </div>
    );
}

export default ProductCard