import ShoppingCartList from "./shoppingCartList";

export const dynamic = 'force-dynamics';

export default async function CartPage(){
    const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL+'/api/users/2/cart/');
    const cartProducts = await response.json();

    return(
        <ShoppingCartList initialCartProducts={cartProducts} />
    );
}