
// let check = true;
// let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   btn.textContent = check ? "Clicked!!!" : "Click me";
//   check = !check;
// });

let count = 1;
let direction = true;
let span = document.getElementById("span");
let btn2 = document.getElementById("btn");
btn2.addEventListener("click", () => {
  if (direction) {
    span.textContent = count++;
  }
  else{
    span.textContent = count--;
  }

  if (count == 10){
    direction = false;
  }
  if (count == 1){
    direction = true;
  }
  
});