console.log(1);


setTimeout( () => {
    console.log("Приве, мир!")
} , 0);

console.log(3);

const interval = setInterval( ()=> {
    console.log("Hello, world!");
} , 1000);

clearInterval(interval);

// Задача 1
setTimeout( () => {
    console.log("Привет!");
} , 3000);

// Задача 2
const btnEl = document.getElementById("btn");

setTimeout( () => {
    btnEl.addEventListener("click" , () => {
        console.log("Кнопка нажата!");
    } , 2000);
})

// Задача 3

setTimeout( () => {
    console.log(3)
} , 0);

setTimeout( () => {
    console.log(2)
} , 0);

setTimeout( () => {
    console.log(1)
} , 0);

setTimeout( () => {
    console.log("Поехали!")
} , 1000);


// 3) setInterval — «повторяй каждые N миллисекунд»
// Задача 1.
let counter = 0;
const intervalId = setInterval(() => {
counter++;
console.log(`Счет идет: ${counter}`);
if (counter >= 1) {
clearInterval(intervalId);
console.log("Остановлено");
}
}, 1000);

// Задача 2. Часы на странице

const title = document.getElementById('title');

  setInterval(() => {
    title.textContent = new Date().toLocaleTimeString();
  }, 1000);


  // Задача 3. Обратный отсчёт
  const counterEl = document.getElementById('counter');
  let count = 0;

  const intervalEl = setInterval(() => {
    count += 1;
    counterEl.textContent = count;

    if (count === 5) {
      clearInterval(intervalEl);
    }
  }, 1000);

// Задача 1. Привет через 3 секунды
// Выведи в консоль "Привет!" через 3 секунды после запуска скрипта.
// Задача 2. Кнопка с задержкой
// Есть кнопка. При клике на неё через 2 секунды в консоль должно выводиться "Кнопка нажата!".
// Задача 3. Обратный отсчёт
// Выведи в консоль числа 3, 2, 1, а через секунду после этого — "Поехали!".
// (Подсказка: используй несколько setTimeout с разной задержкой)

// 3) setInterval — «повторяй каждые N миллисекунд»
// Задача 1. Счётчик в консоль
// Каждую секунду выводи в консоль число, которое увеличивается на 1 (1, 2, 3, 4...). для вывода создаем переменную которую будем выводить и делаем ++
// Задача 2. Часы на странице
// Сделай так, чтобы в <p> каждую секунду обновлялось текущее время (new Date().toLocaleTimeString()).
// Задача 3. Счётчик до 5 и стоп
// Каждую секунду выводи число. Как только дойдёшь до 5 — останови интервал через clearInterval

