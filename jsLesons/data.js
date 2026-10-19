
// const buttons = document.querySelectorAll("button");
// buttons.forEach(btn => {
//     btn.addEventListener("click" , () => {
//         document.body.style.backgroundColor = btn.dataset.color;
//     })
// })

// const profileEl = document.getElementById('profile');

// profileEl.dataset.bgColor = "red";
// profileEl.style.backgroundColor = profileEl.dataset.bgColor;

// const priceEl = document.getElementById('price');
// console.log(`Цена товара: ${priceEl.dataset.amount}`);

// const btn = document.getElementById("like");

// btn.addEventListener("click" , () => {
//     let likes = Number(btn.dataset.likes);
//     likes++;
//     btn.dataset.likes = likes;
//     btn.textContent = `❤️ Нравится (${likes})`;
// })

// const tag = document.getElementById('tag');
// delete tag.dataset.temp;
// console.log(tag.dataset.temp);

// Домашнее задание: data-атрибуты
// Задача 1. Установите data-атрибут
// Дан HTML:
// html
// <div id="profile"></div>
// Задание: через JavaScript установите этому элементу атрибут data-bg-color со значением "red". И потом задать этот цвет на фон в данный div
// Задача 2. Получите data-атрибут
// Дан HTML:
// html
// <p id="price" data-amount="1500">Цена товара</p>
// Задание: выведите в консоль значение data-amount.
// Задача 3. Измените data-атрибут
// Дан HTML:
// html
// <button id="like" data-likes="0">❤️ Нравится</button>
// Задание: при клике на кнопку увеличивайте значение data-likes на 1 и выводите новое число внутри кнопки (например: ❤️ Нравится (3)).
// Задача 4. Удалите data-атрибут
// Дан HTML:
// html
// <span id="tag" data-temp="123">Метка</span>
// Задание: удалите у элемента атрибут data-temp.