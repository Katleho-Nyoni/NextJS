'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "./product-data";

export default function ProductList({products, initialCartProducts }:{products: Product[], initialCartProducts: Product[]}) {
    const [cartProducts, setCartProducts] = useState(initialCartProducts)

    async function addToCart(productID: string){
        const response = await fetch('https://wmrrt5qw-3000.euw.devtunnels.ms/api/users/2/cart',{
            method: 'POST',
            body: JSON.stringify({productID,}),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const updatedCartProducts = await response.json();
        setCartProducts(updatedCartProducts);
    }

    async function removeFromCart(productID: string){
        const response = await fetch('https://wmrrt5qw-3000.euw.devtunnels.ms/api/users/2/cart', {
            method: 'DELETE',
            body: JSON.stringify({productID}),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const updatedCartProducts = await response.json();
        setCartProducts(updatedCartProducts);
    }

    function isInCart(productID: string){
        return cartProducts.some(p => p.id === productID);
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map(product => (
                <Link key = {product.id} href=
                {"/products/" + product.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300" > 
                    <Image src={'/' + product.imageURL} width={150} height={150} alt="Product Image" />
                    <h2>{product.name}</h2>
                    <p>R{product.price}</p>
                    {isInCart(product.id)
                    ? (
                        <button onClick={(e) => {
                        e.preventDefault();
                        removeFromCart(product.id);
                    }} >- Cart</button>
                    ):(
                        <button onClick={(e) => {
                        e.preventDefault();
                        addToCart(product.id);
                    }} >+ Cart</button>
                    )}
                    
                </Link>
            )

            )}
        </div>
    )
}