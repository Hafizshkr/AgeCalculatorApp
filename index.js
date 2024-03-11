const dayInput = document.getElementById("day-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const submitBtn = document.getElementById("submit-btn");
// current date
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDay();

//year calculation
function yearCalculation() {
  const year = yearInput.value;
  const yearResult = currentYear - year;
  const outputYear = document.getElementById("year");
  outputYear.innerHTML = `${yearResult}`;
}

// month caluclation
function monthCalculation() {
  const month = monthInput.value;
  console.log(month)
  const monthResult = currentMonth - month;
  const outputMonth = document.getElementById("months");
  outputMonth.innerHTML = `${monthResult}`;
}

submitBtn.addEventListener("click", clickBtn);


function clickBtn() {
  yearCalculation();
  monthCalculation();
}