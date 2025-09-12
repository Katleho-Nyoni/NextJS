import { NextRequest } from "next/server";
import {connectToDatabase} from "../../db";

type Params = {id:string;}
export async function GET(req: NextRequest, { params }: { params: Params }) {
    const {db} = await connectToDatabase();


    const productID = params.id;
    const product = db.collection('products').findOne({id: productID});

    if (!product){
        return new Response('Product Not Found', { status: 404 });
    }

    return new Response(JSON.stringify(product), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}