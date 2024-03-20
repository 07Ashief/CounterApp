const minus = document.querySelector(".minusBtn");
const plus = document.querySelector(".plusBtn");
const count = document.querySelector(".count");
const apply = document.querySelector(".inc");
const reset = document.querySelector(".reset");


minus.addEventListener("click", () => {
  let countNum = parseInt(count.innerText);
  let changeBy = parseInt(apply.value);
  count.innerText = countNum - changeBy;
});
plus.addEventListener("click", () => {
  let countNum = parseInt(count.innerText);
  let changeBy = parseInt(apply.value);
  count.innerText = countNum + changeBy;
});
reset.addEventListener("click", () => {
  count.innerText = 0;
  apply.value = 1;
});

