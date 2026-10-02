
function hello(name = "guest") {
   console.log(`Hello ${name}`);
}

hello("Polina");
hello("Ivan");
hello();

function summ(a , b) {
    return a + b;
}

const result = summ(4 , 6);
console.log(result);

const summ2 = function(a , b) {
    console.log(a + b);
}

summ2(5 , 18);

const hello2 = function (name) {
    console.log(`hello ${name}`);
}

hello2("Polina");

const summ3 = (a , b) => {
    console.log(a + b);
}

summ3(4 , 6);

const hello3 = (name) => {
    console.log(`Hello ${name}`);
}

hello3("Ivan");

const btn = document.getElementById("btn");

btn.addEventListener("click" , function() {
    alert("Кнопка нажата");
})

btn.addEventListener("click", () => {
    alert("Кнопка нажата 2")
})

function alertBtn() {
    alert("Кнопка нажата 3");
}

btn.addEventListener("click" , alertBtn);