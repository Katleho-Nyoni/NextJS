import Image from "next/image";
import { Product } from "./product-data";

export default function ProductList({products }:{products: Product[] }) {
    return (
        <div>
            {products.map(product => (
                <div key = {product.id}> 
                    <Image src={'/' + product.imageURL} width={150} height={150} alt="Product Image" />
                    <h2>{product.name}</h2>
                    <p>R{product.price}</p>
                </div>
            )

            )}
        </div>
    )
}