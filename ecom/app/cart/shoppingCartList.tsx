"use client";

import { useState } from "react";
import { Product } from "../product-data";
import Link from "next/link";

export default function ShoppingCartList({ initialCartProducts }: {initialCartProducts: Product[] }) {
    const [cartProducts, setCartProducts] = useState(initialCartProducts);

    async function removeFromCart(productID: string){
        const response = await fetch('https://wmrrt5qw-3000.euw.devtunnels.ms/api/users/2/cart', {
            method: 'DELETE',
            body: JSON.stringify({productID}),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const updatedCartProducts = await response.json();
        setCartProducts(updatedCartProducts);
    }

    return (
        <>
        <h1>Cart Page</h1>
        {cartProducts.map(product =>(
            <Link key = {product.id} href={"/products/" + product.id}>
                <h3> {product.name} </h3>
                <p>R{product.price}</p>
                <button onClick={(e) => {
                        e.preventDefault();
                        removeFromCart(product.id);
                    }} >- Cart
                </button>
            </Link>
        ))}
        </>
    );
}