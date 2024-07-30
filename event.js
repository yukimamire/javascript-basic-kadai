
const Text = document.getElementById("text");

const Btn = document.getElementById("btn");

Btn.addEventListener("click",() => {
  setTimeout(() => {
    Text.textContent = "ボタンをクリックしました";
  }, 2000);
});
