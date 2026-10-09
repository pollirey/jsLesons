
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const loginBtnEl = document.getElementById("loginBtn");
const resultEl = document.getElementById("result");

loginBtnEl.addEventListener("click" , () => {
    const nameText = nameInput.value.trim();
    const ageNumber = ageInput.value.trim();
    if (!nameText || !ageNumber) {
        resultEl.textContent = "Введите все поля";
        return;
    }
    resultEl.textContent = `Привет ${nameText} , тебе ${ageNumber} лет`;
})