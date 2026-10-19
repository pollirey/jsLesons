
const countEl = document.getElementById("count");
const incBtnEl = document.getElementById("incBtn");
const resetBtnEl = document.getElementById("resetBtn");

let count = Number(localStorage.getItem("clicks")) || 0;
countEl.textContent = count;
incBtnEl.addEventListener("click" , () =>{
    count++;
    countEl.textContent = count;
    localStorage.setItem("clicks" , count);
})

resetBtnEl.addEventListener("click" , () => {
    count = 0;
    countEl.textContent = count;
    localStorage.removeItem('clicks')
})

localStorage.setItem('age' , '26');
const ageEl = localStorage.getItem('age');
console.log(ageEl);

localStorage.setItem('color' , 'pink');
const color = localStorage.getItem('color');
document.body.style.backgroundColor = color;


const cat = { name: 'Барсик', age: 3 };

localStorage.setItem("cat" , JSON.stringify(cat));
const savedCat = JSON.parse(localStorage.getItem("cat"));
console.log(savedCat.name);

localStorage.setItem('secret' , "секрет");
console.log(localStorage.getItem('secret'));
localStorage.removeItem('secret');
console.log(localStorage.getItem('secret'));


const name = prompt('Как тебя зовут?');
localStorage.setItem('name' , name);
const savedName = localStorage.getItem('name');
console.log(`Привет ${savedName}`);


// Задача 3. Сохрани объект-котика
// Сохрани объект { name: 'Барсик', age: 3 } в localStorage. Потом достань его и выведи в консоль имя котика.
// Подсказка: объект нельзя сохранить напрямую — используй JSON.stringify и JSON.parse.
// Задача 4. Удали и проверь
// Сохрани что-нибудь под ключом secret, потом удали это и проверь, что вернётся null.
// Задача 5. Сохрани имя и поздоровайся
// Спроси у пользователя имя через prompt, сохрани его в localStorage, а потом выведи в консоль Привет, <имя>!

// Подсказка по promt 
// const name = prompt('Как тебя зовут?')


// Домашнее задание:
// 1) Повторить теорию которую прислал и с прошлой дз по forEach тоже
// 2) Доделать задачу с кликами которую начали при обновлении страницы мы должны клики подставлять в p тег куда мы выводили их счетчик 
// и начинать считать новые с учетом тех что у нас уже были
// 3) Домашние задачи на localStorage
// Задача 1. Сохрани свой возраст
// Сохрани свой возраст в localStorage под ключом age, затем достань его и выведи в консоль.
// Задача 2. Сохрани любимый цвет
// Сохрани любимый цвет в localStorage под ключом color. Потом достань его и покрась в этот цвет фон страницы. красим через document.body.style

