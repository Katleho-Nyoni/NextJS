

use('ecom-nextjs');

db.getCollection('carts').insertMany([
    { userID: "1",cartID:["100","101"] },
    { userID: "2",cartID:["102","103"] }
]);

console.log(db.getCollection('carts').find({}))

/** 
db.getCollection('products').insertMany([{
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
}]);

console.log(db.getCollection('products').find({}))
*/