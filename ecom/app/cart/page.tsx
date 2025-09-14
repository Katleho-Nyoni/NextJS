import ShoppingCartList from "./shoppingCartList";


export default async function CartPage(){
    const response = await fetch('http://localhost:3000/api/user/2/cart/');
    const cartProducts = await response.json;

    return(
        <ShoppingCartList initialCartProducts={cartProducts} />
    );
}