
localStorage.setItem("userName" , "Alex");

const name = localStorage.getItem("userName");
console.log(name);
localStorage.setItem("score" , 42);
const score = Number(localStorage.getItem("score"));
console.log(score);
const score2 = localStorage.getItem("score");
console.log(typeof score2);
console.log(typeof score);

const user = {
    name: "Anna",
    age: 16,
}

localStorage.setItem("user" , JSON.stringify(user));
const user2 = JSON.parse(localStorage.getItem("user"));
console.log(user);

localStorage.removeItem("user");
