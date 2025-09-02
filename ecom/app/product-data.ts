export interface Product {
    id: string;
    imageURL: string;
    description: string;
    price: number;
}

export const products: Product [] = [{
    id: "100",
    imageURL: "blanket.jpeg",
    description: "The well celebrated Seanamarena-Poone blanket",
    price: 29.99
},{
    id: "101",
    imageURL: "laptop.webp",
    description: "A high-performance laptop for all your needs",
    price: 34.99
},{
    id: "102",
    imageURL: "pots.webp",
    description: "A set of ceramic pots for your plants",
    price: 19.99
},{
    id: "103",
    imageURL: "phone.webp",
    description: "The latest smartphone with cutting-edge features",
    price: 39.99
}];