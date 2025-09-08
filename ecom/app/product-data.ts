export interface Product {
    id: string;
    name: string;
    imageURL: string;
    description: string;
    price: number;
}

export const products: Product [] = [{
    id: "100",
    name: "Seanamarena Blanket",
    imageURL: "blanket.jpeg",
    description: "The well celebrated Seanamarena-Poone blanket",
    price: 29.99
},{
    id: "101",
    name: "Asus VivoBook Go",
    imageURL: "laptop.webp",
    description: "A high-performance laptop for all your needs",
    price: 34.99
},{
    id: "102",
    name: "Black Cast Iron Pots",
    imageURL: "pots.webp",
    description: "A set of ceramic pots for your home cooked meals",
    price: 19.99
},{
    id: "103",
    name: "Apple iPhone 16 Pro",
    imageURL: "phone.webp",
    description: "The latest smartphone with cutting-edge features",
    price: 39.99
}];