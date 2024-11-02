const Today = new Date();
const birthMonth = new Date();

let currentDate = Today.getDate();
let birthdayMonth = birthMonth.setMonth(11);
const birthdayMonths = birthMonth.getMonth();
let birthdayDay = birthMonth.getDate() + 16 - 1;
const currentMonth = Today.getMonth();

let calculateDaysDifference = Math.abs(birthdayDay - currentDate);
let calculateMonths = Math.abs(birthdayMonths - currentMonth - 1);
const weeks = Math.ceil(calculateDaysDifference / (1000 * 60 * 60 * 24 * 7));

const weeksCalc = Math.abs(weeks + 1);
const calDays = calculateDaysDifference;

if (Today.getMonth() < 10) {
  let calculateDaysDifference = Math.abs(birthdayDay - currentDate);
  let calculateMonths = Math.abs(birthdayMonths - currentMonth - 1);

  document.getElementById(
    "date"
  ).textContent = `You Have: ${calculateDaysDifference} Days Until Birthday`;

  document.getElementById(
    "weeks"
  ).textContent = `You Have: ${weeksCalc} Weeks Until Birthday And ${
    0 + 1
  } Day `;

  document.getElementById(
    "months"
  ).textContent = `You Have: ${calculateMonths} Months Until Birthday`;
} else {
  document.getElementById(
    "date"
  ).textContent = `You Have: ${calculateDaysDifference} Days Until Birthday`;

  document.getElementById(
    "weeks"
  ).textContent = `You Have: ${weeksCalc} Weeks Until Birthday or ${calculateDaysDifference} Days  `;

  document.getElementById(
    "months"
  ).textContent = `You Have: ${calculateMonths} Months Until Birthday`;
}
