import ReactMarkdown from 'react-markdown'
import ProductCard from '../../components/ProductCard'
import { Flex, Box } from 'reflexbox'

const Products = ({ products, productspage }) => {
  console.log(products)
  
  return (
    <>
      <h1 className="heading bg-pink-100">{productspage.heading}</h1>
      <ReactMarkdown children={productspage.content} className="p-4 bg-red-300"/>
      <Box className="product-list flex flex-col md:flex-row">
        {products.map((product) => (
          <Box key={product.id} className="mx-6 w-full md:w-1/3">
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const { API_URL } = process.env;

  const [ProductsRes, ProductsPageRes] = await Promise.all([
    fetch(`${API_URL}/products`),
    fetch(`${API_URL}/productspage`),
  ]);

  const ProductsData = await ProductsRes.json();
  const ProductsPageData = await ProductsPageRes.json();

  return {
    props: {
      products: ProductsData,
      productspage: ProductsPageData,
    },
  };
}

export default Products;