// let StringValue = "Welcome to Tuwaiq";
let text = document.getElementById("text");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");

btn1.addEventListener("click", () => {
  text.innerText = "Welcome to JS BootCamp";
});

//========== 2 ============
btn2.addEventListener("click", () => {
  text.style.fontSize = "5em";
});

//========== 3 ============

btn3.addEventListener("click", () => {
  text.style.fontSize = "10px";
});

//========== 4 ============

btn4.addEventListener("click", () => {
  text.style.color = "pink";
});

btn5.addEventListener("click", () => {
  text.style.backgroundColor = "yellow";
});
