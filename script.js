// DOM Elements
const heartCount = document.getElementById("heartCount");
const coinCount = document.getElementById("coinCount");
const copyCount = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");
const cardContainer = document.getElementById("cardContainer");

// State
let hearts = 0;
let coins = 100;
let copies = 0;

// Helper Functions

// Update counters
function updateCounters() {
  heartCount.textContent = hearts;
  coinCount.textContent = coins;
  copyCount.textContent = copies;
}

// Copy number to clipboard
function copyNumber(card) {
  const number = card.querySelector(".number").textContent;
  navigator.clipboard.writeText(number);
  alert(`✅ Number copied: ${number}`);
  copies++;
  updateCounters();
}

// Handle button click
function likeNumber() {
  hearts++;
  updateCounters();
}

// Handle call button click
function callNumber(card) {
  const number = card.querySelector(".number").textContent;
  const name = card.querySelector("h4").textContent;

  if (coins < 20) {
    alert("❌ Not enough coins to make a call!");
    return;
  }

  coins -= 20;
  updateCounters();

  alert(`📞 Calling ${name} at ${number}`);

  // Record call in history
  addToHistory(name, number);
}

// Add call record to history list
function addToHistory(name, number) {
  const time = new Date().toLocaleTimeString("en-BD", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Dhaka",
  });

  const li = document.createElement("li");
  li.innerHTML = `
    <div class="flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-2">
      <div>
        <p class="font-bold text-xl">${name}</p>
        <p class="text-gray-600 font-semibold text-xl">${number}</p>
      </div>
      <span class="text-lg text-gray-500 font-semibold">${time}</span>
    </div>
  `;
  historyList.appendChild(li);
}

// Event Listeners

// Event delegation for all buttons inside cardContainer
cardContainer.addEventListener("click", (e) => {
  const target = e.target.closest("button");
  if (!target) return;

  const card = target.closest(".card");

  if (target.classList.contains("likeBtn")) {
    likeNumber();
  } else if (target.classList.contains("copyBtn")) {
    copyNumber(card);
  } else if (target.classList.contains("callBtn")) {
    callNumber(card);
  }
});

// Clear call history
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
