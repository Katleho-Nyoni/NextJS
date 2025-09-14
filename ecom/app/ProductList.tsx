'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "./product-data";

export default function ProductList({products, initialCartProducts }:{products: Product[], initialCartProducts: Product[]}) {
    const [cartProducts, setCartProducts] = useState(initialCartProducts)

    async function addToCart(productID: string){
        const response = fetch('https://wmrrt5qw-3000.euw.devtunnels.ms/api/users/2/cart',{
            method: 'POST',
            body: JSON.stringify({productID,}),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const updatedCartProducts = await response.json();
        cartProducts(updatedCartProducts);
    }

    return (
        <div>
            {products.map(product => (
                <Link key = {product.id} href=
                {"/products/" + product.id} > 
                    <Image src={'/' + product.imageURL} width={150} height={150} alt="Product Image" />
                    <h2>{product.name}</h2>
                    <p>R{product.price}</p>
                    <button onClick={() => addToCart(product.id)} >+ Cart</button>
                </Link>
            )

            )}
        </div>
    )
}