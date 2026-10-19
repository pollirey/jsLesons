
const products = [
    {title: "Ноутбук" , price: 50000},
    {title: "Мышь" , price: 500},
    {title: "Клавиатура" , price: 100},
    {title: "Монитор" , price: 25332},
]

const container = document.getElementById("container");

products.forEach( product =>  {
    const card = document.createElement("div");
    card.classList.add("card");
    const title = document.createElement("h3");
    title.textContent = product.title;
    const price = document.createElement("p");
    price.textContent = `Цена: ${product.price} рублей `;
    card.append(title , price);
    container.append(card);
})