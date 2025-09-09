import { NextRequest } from "next/server";
import {products} from "@/app/product-data";

type ShoppingCart = Record<string,string[]>;

const carts: ShoppingCart = {
    '1': ['100'],
    '2': ['101', '102'],
    '3': ['103', '100', '102']
}

type Params = {id:string;}

export async function GET(req: NextRequest, { params }: { params: Params }) {    
    const userID = params.id;
    const shoppingCart = carts[userID];

    if (shoppingCart === undefined) {
        return new Response(JSON.stringify([]),{
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
    }

    const cartPrpoducts = shoppingCart.map(id => (products.find(p => p.id === id)));

    return new Response(JSON.stringify(cartPrpoducts),{
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}