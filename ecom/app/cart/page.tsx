import ShoppingCartList from "./shoppingCartList";


export default async function CartPage(){
    const response = await fetch('https://wmrrt5qw-3000.euw.devtunnels.ms/api/users/2/cart/');
    const cartProducts = await response.json;

    return(
        <ShoppingCartList initialCartProducts={cartProducts} />
    );
}