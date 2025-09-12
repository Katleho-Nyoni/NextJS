export default async function FetchDats(){
    const response = await fetch('/api/hello');
    const data = await response.json();
    return <h1>{data.massage} </h1>
}

