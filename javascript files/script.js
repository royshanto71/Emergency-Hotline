let heartCount = parseInt(document.getElementById("heart-count").innerText);
let coinCount = parseInt(document.getElementById("coin-count").innerText);
let copyCount = parseInt(document.getElementById("copy-count").innerText);

// console.log(heartCount, coinCount, copyCount);

let heartBtns = document.getElementsByClassName("heart-button");
// console.log(heartBtns);
for (let btn of heartBtns) {
  btn.addEventListener("click", function () {
    // console.log(btn);
    heartCount = heartCount + 1;
    document.getElementById("heart-count").innerText = heartCount;
  });
}
