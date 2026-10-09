
const users = [
    {name: "Ivan", age: 19},
    {name: "Polina", age: 30},
    {name: "Lena", age: 16},
    {name: "Alex", age: 49},
];

const listEl = document.getElementById("list");

users.forEach(user => {
    const li = document.createElement("li");
    let text = `Имя: ${user.name} , возраст: ${user.age}`;
    if(user.age < 18) {
        text += " - несовершеннолетний";
    }
    li.textContent = text;
    listEl.append(li);
})