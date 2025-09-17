import ProductList from "../ProductList";

export const dynamic = 'force-dynamics';

export default async function ProductsPage(){
  const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL+'/api/products');
  const products = await response.json();

  const response1 = await fetch(process.env.NEXT_PUBLIC_SITE_URL+'/api/users/2/cart', {cache: 'no-store'});
  const cartProducts = await response1.json();



  return (
        <>
        <div className="container mx-auto p-8"> 
          <h1 className="text-4xl font-bold mb-8">Products</h1> 
          <ProductList products={products} initialCartProducts={cartProducts} />
        </div>
        </>
    );
}