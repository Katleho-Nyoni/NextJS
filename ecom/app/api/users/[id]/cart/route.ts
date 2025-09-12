import { NextRequest } from "next/server";
import {products} from "@/app/product-data";
import { connectToDatabase } from "@/app/api/db";

type ShoppingCart = Record<string,string[]>;

const carts: ShoppingCart = {
    '1': ['100'],
    '2': ['101', '102'],
    '3': ['103', '100', '102']
}

type Params = {id:string;}

export async function GET(request: NextRequest, { params }: { params: Params }) {    
    const { db } = await connectToDatabase(); 
    const userID = params.id;
    const userCart = await db.collection('carts').findOne({ userID });

    if (!userCart) {
        return new Response(JSON.stringify([]),{
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
    }

    const cartIDs = userCart.cartIDs;
    const cartProducts = await db.collection('products').find({id: {$in: cartIDs} }).toArray();

    return new Response(JSON.stringify(cartProducts),{
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}

type cartBody = { productID: string;}

export async function POST(request: NextRequest,{ params }:{params : Params}){
    const userID = params.id;
    const body: cartBody = await request.json();
    const productID = body.productID;

    carts[userID] = carts[userID] ? carts[userID].concat(productID) : [productID];

    const cartProducts = carts[userID].map(id => (products.find(p => p.id === id)));

    return new Response(JSON.stringify(cartProducts),{
        status:201,
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export async function DELETE(request: NextRequest, { params }: { params: Params }) { 
    const userID = params.id;
    const body: cartBody = await request.json();
    const productID = body.productID;

    carts[userID] = carts[userID] ? carts[userID].filter(pID => pID !== productID) : [];

    const cartProducts = carts[userID].map(id => (products.find(p => p.id === id)));

    return new Response(JSON.stringify(cartProducts),{
        status: 202,
        headers: {
            "Content-Type": "application/json"
        }
    });
 }
