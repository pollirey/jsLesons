
const inputEl = document.getElementById("input");
const addBtnEl = document.getElementById("addBtn");
const listEl = document.getElementById("list");

addBtnEl.addEventListener("click" , function() {
    const text = inputEl.value.trim();
    if (!text) {
        return;
    } 
    const li = document.createElement("li");
    li.textContent = text;
    li.addEventListener("click" , () => {
        li.remove();
    })
    listEl.append(li);
    inputEl.value = "";
})

inputEl.addEventListener("keydown" , (e) => {
    if (e.key === "Enter"){
        addBtnEl.click();
    }
})
