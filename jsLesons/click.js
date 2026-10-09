
const countEl = document.getElementById("count");
const incBtnEl = document.getElementById("incBtn");
const resetBtnEl = document.getElementById("resetBtn");

let count = 0;
incBtnEl.addEventListener("click" , () =>{
    count++;
    countEl.textContent = count;
})

resetBtnEl.addEventListener("click" , () => {
    count = 0;
    countEl.textContent = count;
})