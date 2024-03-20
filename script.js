const minus = document.querySelector(".minusBtn");
const plus = document.querySelector(".plusBtn");
const count = document.querySelector(".count");
const apply = document.querySelector(".inc");
const reset = document.querySelector(".reset");

updateButtons();
function updateButtons() {
  const countNum = parseInt(count.innerText);
  minus.disabled = countNum <= 0;
  plus.disabled = countNum >= 100;
}

minus.addEventListener("click", () => {
  let countNum = parseInt(count.innerText);
  let changeBy = parseInt(apply.value);
  count.innerText = countNum - changeBy;
  updateButtons();
});

plus.addEventListener("click", () => {
  let countNum = parseInt(count.innerText);
  let changeBy = parseInt(apply.value);
  count.innerText = countNum + changeBy;
  updateButtons();
});

reset.addEventListener("click", () => {
  count.innerText = 0;
  apply.value = 1;
  updateButtons();
});
