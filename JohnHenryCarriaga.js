// Select elements
const box = document.getElementById("box");
const btn = document.getElementById("btn");
const prevBtn = document.getElementById("prevBtn");
const titleText = document.getElementById("titleText");
const detailsText = document.getElementById("detailsText");
const locationText = document.getElementById("locationText");

// List of images
const images = [
  "photo1.jpeg",
  "photo2.jpeg",
  "photo3.jpeg",
  "photo4.jpg",
  "photo5.jpeg",
  "photo6.jpeg",
  "photo7.jpg"
];

// Titles
const titles = [
  "Maplewood Estates",
  "Sunset Ridge Villas",
  "Cedar Grove Residences",
  "Willow Creek Homes",
  "Oakwood Park Community",
  "Riverstone Heights",
  "Silver Lake Townhomes"
];

console.log("Website coded by John Henry Carriaga 🚀");



// Details
const details = [
  "🛏️ 3 Bedrooms | 🛁 2 Bathrooms | ◻️ 180 sqm",
  "🛏️ 4 Bedrooms | 🛁 2 Bathrooms | ◻️ 200 sqm",
  "🛏️ 2 Bedrooms | 🛁 1 Bathrooms | ◻️ 95 sqm",
  "🛏️ 5 Bedrooms | 🛁 4 Bathrooms | ◻️ 310 sqm",
  "🛏️ 3 Bedrooms | 🛁 2 Bathrooms | ◻️ 300 sqm",
  "🛏️ 4 Bedrooms | 🛁 3 Bathrooms | ◻️ 250 sqm",
  "🛏️ 2 Bedrooms | 🛁 2 Bathrooms | ◻️ 120 sqm"
];

// Locations
const locations = [
  "📌 New York, NY",
  "📌 Los Angeles, CA",
  "📌 Chicago, IL",
  "📌 Houston, TX",
  "📌 Seattle, WA",
  "📌 Miami, FL",
  "📌 Denver, CO"
];

let index = 0;

// Function to update all content
function updateDisplay() {
  box.style.backgroundImage = `url('${images[index]}')`;
  titleText.textContent = titles[index];
  detailsText.textContent = details[index];
  locationText.textContent = locations[index];
}

// Initialize first
updateDisplay();

// Next button
btn.addEventListener("click", () => {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  updateDisplay();
});

// Previous button
prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  updateDisplay();
});
