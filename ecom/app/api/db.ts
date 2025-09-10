
import { MongoClient, ServerApiVersion } from 'mongodb';

export async function connectToDatabase(){

    const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.rbtalbs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
    });

    try {
        await client.connect();
    } finally {
        await client.close();
    }
}
