
// function hello(name = "guest") {
//    console.log(`Hello ${name}`);
// }

// hello("Polina");
// hello("Ivan");
// hello();

// function summ(a , b) {
//     return a + b;
// }

// const result = summ(4 , 6);
// console.log(result);

// const summ2 = function(a , b) {
//     console.log(a + b);
// }

// summ2(5 , 18);

// const hello2 = function (name) {
//     console.log(`hello ${name}`);
// }

// hello2("Polina");

// const summ3 = (a , b) => {
//     console.log(a + b);
// }

// summ3(4 , 6);

// const hello3 = (name) => {
//     console.log(`Hello ${name}`);
// }

// hello3("Ivan");

// const btn = document.getElementById("btn");

// btn.addEventListener("click" , function() {
//     alert("Кнопка нажата");
// })

// btn.addEventListener("click", () => {
//     alert("Кнопка нажата 2")
// })

// function alertBtn() {
//     alert("Кнопка нажата 3");
// }

// btn.addEventListener("click" , alertBtn);



// 1 Задание
// Написать функцию isEven(number), которая возвращает true, если число чётное, и false, если нет
// (Проверку на четность делаем через % 2 === 0)
// Написать 3мя вариантами обычным через function через переменную и стрелочной

// Задание первое функции
function isEven1(number) {
    return (number  % 2 === 0);
}
 console.log(isEven1(2));

 const isEven2 = function(number) {
    return (number  % 2 === 0);
 }

  console.log(isEven2(2));

  const isEven3 = (number) => {
    return (number  % 2 === 0);
  }

console.log(isEven3(2));

const isEven4 = (number) => number % 2 === 0;

console.log(isEven4(2));

// 2 Задание 
// Написать функцию calculate(a, b, operation), где operation — это строка "+", "-", "*" или "/".
//  Функция возвращает результат. Если операция неизвестна — вернуть "Неизвестная операция". 
// Проверки делаем через if на то какой оператор и в зависимости от этого выводим результат 
// так же сделать 3 вариантами.

// Задание второе функции
function calculate(a, b, operation) {
    if (operation === "+") {
    return a + b;
  } else if (operation === "-") {
    return a - b;
  } else if (operation === "*") {
    return a * b;
  } else if (operation === "/") {
    return a / b;
  } else {
    return "Неизвестная операция";
  }
}
console.log(calculate(8 , 8 , "-"));

 const calculate1 = function(a, b, operation) {
    if (operation === "+") {
    return a + b;
  } else if (operation === "-") {
    return a - b;
  } else if (operation === "*") {
    return a * b;
  } else if (operation === "/") {
    return a / b;
  } else {
    return "Неизвестная операция";
  }
}
 console.log(calculate1(10 , 8 , "..."));

 const calculate2 = (a, b, operation) => {
if (operation === "+") {
    return a + b;
  } else if (operation === "-") {
    return a - b;
  } else if (operation === "*") {
    return a * b;
  } else if (operation === "/") {
    return a / b;
  } else {
    return "Неизвестная операция";
  }
}
console.log(calculate2(20 , 9 , "/"));

// На обработчики события
// 1 Задание 
// Кнопка с id="colorBtn". При клике поменяй цвет фона кнопки на "lightblue".

// Задание первое обработчик событий

const btn2 = document.getElementById("colorBtn");

btn2.addEventListener("click" , function(){
    btn2.classList.toggle("btn-color");
});

const btn3 = document.getElementById("colorBtn");

btn3.addEventListener("click" , () => {
    btn3.classList.toggle("btn-color");
})

// 2 Задание 
// Инпут с id="nameInput". При вводе текста выводить в консоль то, что введено (event.target.value). 
// Задание второе обработчик событий 

const nameInputEl = document.getElementById("nameInput");
nameInputEl.addEventListener('input', (event) => {
    console.log(event.target.value);
})

const nameInputEl1 = document.getElementById("nameInput");
nameInputEl1.addEventListener('input', function(event) {
    console.log(event.target.value);
})


// 3 Задание
// Кнопка с id="hideBtn". При клике скрой элемент с id="text" (свойство style.display = "none").

// Задание третье обработчик событий
const btnText = document.getElementById("hideBtn");
btnText.addEventListener("click" , () => {
    const textEl = document.getElementById("text");
    textEl.style.display = "none";
})

const btnText1 = document.getElementById("hideBtn");
btnText.addEventListener("click" , function() {
    const textEl = document.getElementById("text");
    textEl.style.display = "none";
})


