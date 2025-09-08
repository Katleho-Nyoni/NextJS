export async function GET(){
    return new Response('Hello From Next.js route handler!',{
        status: 200,
    });

}

export async function POST(){
    return new Response('POST from Next.js Route Handler!',{
        status: 200,
    });
}


