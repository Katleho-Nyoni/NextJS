import ProductList from "../ProductList";

export default async function ProductsPage(){
  const response = await fetch('https://wmrrt5qw-3000.euw.devtunnels.ms/api/products');
  const products = await response.json();

  const response1 = await fetch('https://wmrrt5qw-3000.euw.devtunnels.ms/api/users/2/cart', {cache: 'no-store'});
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