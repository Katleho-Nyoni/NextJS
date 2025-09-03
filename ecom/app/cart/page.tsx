'use client';
import { useState } from "react";
import { products } from "../product-data";
import Link from "next/link";

export default function CartPage(){
    const [cartIDs] = useState(['100','101']);
    const cartProducts = cartIDs.map(id => products.find(p => p.id === id
    )!);
    return (
        <>
        <h1>Cart Page</h1>
        {cartProducts.map(product =>(
            <Link key = {product.id} href={"/products/" + product.id}>
                <h3> {product.name} </h3>
                <p>R{product.price}</p>
            </Link>
        ))}
        </>
    );
}