
const listEl = document.querySelector("#list");
const summEl = document.querySelector("#summ");

const numbers = [3 , 8 , 1 , 12 , 5 , 20 , 7];
let summ = 0;

numbers.forEach(number => {
    const li = document.createElement("li");
    li.textContent = number;
    li.className = number % 2 === 0 ? "even" : "odd";
    listEl.append(li);
    summ += number;
})

summEl.textContent = `Сумма всех чисел: ${summ}`;