let heartCount = parseInt(document.getElementById("heart-count").innerText);
let coinCount = parseInt(document.getElementById("coin-count").innerText);
let copyCount = parseInt(document.getElementById("copy-count").innerText);

// heart counter
let heartBtns = document.getElementsByClassName("heart-button");
for (let btn of heartBtns) {
  btn.addEventListener("click", function () {
    heartCount = heartCount + 1;
    document.getElementById("heart-count").innerText = heartCount;
  });
}

// copy counter
let copyBtns = document.getElementsByClassName("copy-button");
for (let btn of copyBtns) {
  btn.addEventListener("click", function () {
    copyCount = copyCount + 1;
    document.getElementById("copy-count").innerText = copyCount;
  });
}

//call feature
let callBtns = document.getElementsByClassName("call-button");
for (let btn of callBtns) {
  btn.addEventListener("click", function () {
    callCount = callCount + 1;
    document.getElementById("call-count").innerText = callCount;
  });
}

//clear history
document.getElementById("history-clear").addEventListener("click", function () {
  document.getElementById("history-container").innerHTML = "";
});
