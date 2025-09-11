import { MongoClient, Db, ServerApiVersion } from 'mongodb';

let cachedClient : MongoClient | null = null;
let cachedDb : Db | null = null;

export async function connectToDatabase(){
    if (cachedClient && cachedDb){
        return {client: cachedClient,db: cachedDb};
    }

    const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.rbtalbs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
    });


    await client.connect();

    cachedClient = client;
    cachedDb = client.db('ecom-nextjs');

    return {client, db: client.db('ecom-nextjs') };

}
