import Image from "next/image";
import Link from "next/link";
import { Product } from "./product-data";

export default function ProductList({products }:{products: Product[] }) {
    return (
        <div>
            {products.map(product => (
                <Link key = {product.id} href="/product-detail"> 
                    <Image src={'/' + product.imageURL} width={150} height={150} alt="Product Image" />
                    <h2>{product.name}</h2>
                    <p>R{product.price}</p>
                </Link>
            )

            )}
        </div>
    )
}