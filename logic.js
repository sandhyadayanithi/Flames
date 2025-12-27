const name1Input = document.getElementById('name1');
const name2Input = document.getElementById('name2');
const calculateBtn = document.querySelector('.calculate-btn');
const resetBtn = document.querySelector('.reset-btn');
const flameItems = document.querySelectorAll('.flame-item');
const tooltip = document.getElementById('tooltip');
const resultDisplay = document.getElementById('result-display');
const resultText = document.querySelector('.result-text');
const inputSection = document.querySelector('.input-section');

let isAnimating = false;

// FLAMES Mapping
const flamesMap = {
  'F': "Friends 🤝",
  'L': "Love 💖",
  'A': "Affection 🤗",
  'M': "Marriage 💍",
  'E': "Enemies 😈",
  'S': "Siblings 🐾"
};

calculateBtn.addEventListener('click', startFlames);
resetBtn.addEventListener('click', resetGame);

function startFlames() {
  if (isAnimating) return;

  const n1 = name1Input.value.trim().toLowerCase();
  const n2 = name2Input.value.trim().toLowerCase();

  if (!n1 || !n2) {
    alert("Please enter both names!");
    return;
  }

  // Calculate Count
  const count = calculateFlamesCount(n1, n2);

  if (count <= 0) {
    startAnimation(1);
    return;
  }

  startAnimation(count);
}

function calculateFlamesCount(name1, name2) {
  // Combine strings, ignore spaces
  const combined = (name1 + name2).replace(/\s/g, '').toLowerCase();

  // Count unique characters
  const uniqueChars = new Set(combined);

  return uniqueChars.size;
}

async function startAnimation(stepCount) {
  isAnimating = true;
  inputSection.classList.add('disabled');
  calculateBtn.disabled = true;

  // Reset visual state
  flameItems.forEach(item => {
    item.classList.remove('active', 'eliminated', 'winner');
  });
  resultDisplay.classList.remove('show');
  resultText.innerHTML = ''; // Clear old result

  let activeIndices = [0, 1, 2, 3, 4, 5];
  let currentIndex = -1;

  tooltip.classList.remove('hidden');
  tooltip.textContent = `Target count: ${stepCount}`;

  // Speed calculation
  let speed = 400; // Slower base speed
  if (stepCount > 6) speed = 300;
  if (stepCount > 12) speed = 200; // significantly slower than 150
  if (stepCount > 20) speed = 100;

  // Outer loop: Eliminate until 1 remains
  while (activeIndices.length > 1) {

    // Jump 'stepCount' times
    for (let s = 0; s < stepCount; s++) {
      let jumps = 1;
      while (jumps > 0) {
        currentIndex = (currentIndex + 1) % 6;
        if (!flameItems[currentIndex].classList.contains('eliminated')) {
          jumps--;
          highlightItem(currentIndex);
          await wait(speed);
        }
      }
    }

    eliminateItem(currentIndex);

    // Update active check
    activeIndices = Array.from(flameItems).map((el, i) => i).filter(i => !flameItems[i].classList.contains('eliminated'));

    await wait(500);
  }

  // Winner found
  const winnerIndex = activeIndices[0];
  const winnerItem = flameItems[winnerIndex];
  winnerItem.classList.add('winner');

  const resultKey = winnerItem.dataset.value; // e.g. "F"
  const resultFull = winnerItem.dataset.full; // e.g. "Friends"
  const resultEmoji = flamesMap[resultKey].split(' ')[1] || '✨';

  showResult(resultKey, resultFull, resultEmoji);
  isAnimating = false;
}

function highlightItem(index) {
  // Clear previous active highlights first? 
  // No, we want the "jump" effect. 
  flameItems.forEach(i => i.classList.remove('active'));
  flameItems[index].classList.add('active');
}

function eliminateItem(index) {
  flameItems[index].classList.remove('active');
  flameItems[index].classList.add('eliminated');

  // Add subtle sound effect? (Optional, skipping for now)
}

function showResult(letter, meaning, emoji) {
  tooltip.classList.add('hidden');

  // Hide the circle container to "remove that E"
  document.querySelector('.circle-container').classList.add('hidden');

  // Format: "Enemies 😈" (Big and clear)
  resultText.innerHTML = `<div style="font-size: 3rem; color: #ff4757; margin-bottom: 20px;">${meaning}</div><div style="font-size: 4rem;">${emoji}</div>`;

  resultDisplay.classList.add('show');
}

function resetGame() {
  inputSection.classList.remove('disabled');
  calculateBtn.disabled = false;

  // Show circle again
  document.querySelector('.circle-container').classList.remove('hidden');

  flameItems.forEach(item => {
    item.classList.remove('active', 'eliminated', 'winner');
  });
  resultDisplay.classList.remove('show');

  name1Input.value = '';
  name2Input.value = '';
  currentIndex = -1;
  tooltip.textContent = '';
  tooltip.classList.add('hidden');
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
