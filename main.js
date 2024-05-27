// let StringValue = "Welcome to Tuwaiq";
let text = document.getElementById("text");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

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

btn6.addEventListener("click", () => {
  let img = document.getElementById("image");
  if (!img) {
    let image = document.createElement("img");
    let body = document.getElementById("body");
    image.setAttribute("id", "image");
    image.src = "download.png";
    image.style.height = "20vh";
    image.style.width = "20vh";
    body.appendChild(image);
  } else {
    img.parentNode.removeChild(img);
  }
});
