
// const boxEl = document.querySelector("#box");

// boxEl.dataset.color = "red";
// boxEl.setAttribute("data-background-color" , "yellow");

// const btnEl = document.querySelector("#btn");
// console.log(btnEl.dataset.userId);
// btnEl.dataset.userId = "70";
// console.log(btnEl.getAttribute("data-user-id"));
// btnEl.removeAttribute("data-user-id");
// console.log(btnEl.getAttribute("data-user-id"));

// const card = document.getElementById("card");
// const data = { ...card.dataset};
// console.log(data);

const list = document.getElementById("list");
list.addEventListener("click" , (e) => {
    const action = e.target.dataset.action;
    if(!action) {
        return;
    }
    console.log(` Действие: ${action}`);
})