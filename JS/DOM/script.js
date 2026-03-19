const title = document.querySelector("#title");
const button = document.querySelector(".btn-change");

button.addEventListener("click", () => {
  title.textContent = "JS DOM testing";

  const list = document.querySelector(".my-List");
});


const box = document.querySelector("#box");
box.addEventListener("click", () => {
    box.classList.toggle("activate")
    console.log("Ban vua click vao Box")
})