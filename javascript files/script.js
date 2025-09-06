// Get counters
const heartCount = document.getElementById("heart-count");
const coinCount = document.getElementById("coin-count");
const copyCount = document.getElementById("copy-count");

// Get containers
const cardContainer = document.getElementById("card-container");
const historyContainer = document.getElementById("history-container");
const clearHistoryBtn = document.getElementById("history-clear");

// Track values
let hearts = 0;
let coins = 100;
let copies = 0;

// copy count
let copyButtons = document.querySelectorAll(".copy-button");

for (let button of copyButtons) {
  button.addEventListener("click", function () {
    let card = button.closest(".bg-white.shadow-xl");

    let numberEl = card.querySelector(".phone-number");
    let number = numberEl.textContent;

    navigator.clipboard.writeText(number).then(function () {
      // success message
      alert("✅ Copied: " + number);

      // iincrease the counter
      copies = copies + 1;
      copyCount.textContent = copies;
    });
  });
}

// card container
cardContainer.addEventListener("click", function (event) {
  const target = event.target;

  //Like Button
  if (target.classList.contains("heart-button")) {
    hearts++;
    heartCount.textContent = hearts;
  }

  // Call Button
  const callBtn = target.closest(".call-button");
  if (callBtn) {
    const card = callBtn.closest(".bg-white");
    const numberElement = card.querySelector(".phone-number");
    const nameElement = card.querySelector("h2");

    if (!numberElement || !nameElement) return;

    const number = numberElement.textContent;
    const name = nameElement.textContent;

    if (coins < 20) {
      alert("❌ Not enough coins to make a call!");
      return;
    }

    coins -= 20;
    coinCount.textContent = coins;

    alert(`📞 Calling ${name} at ${number}`);

    // Add to history
    const time = new Date().toLocaleTimeString();

    const div = document.createElement("div");
    div.className =
      "flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-2";
    div.innerHTML = `
      <div>
        <p class="font-bold text-xl">${name}</p>
        <p class="text-gray-600 font-semibold text-xl">${number}</p>
      </div>
      <span class="text-lg text-gray-500 font-semibold">${time}</span>
    `;
    historyContainer.appendChild(div);
  }
});

// Clear History
clearHistoryBtn.addEventListener("click", function () {
  historyContainer.innerHTML = "";
});
