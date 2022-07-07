function checkOddEven(num) {
  if (typeof num === "string") {
    throw new Error("n must be a number");
  }
  return num % 2 === 0 ? "even" : "odd";
}

function sum(a, b) {
  return a + b;
}

function getZero() {
  return 0;
}

function getCurrentYear() {
  return new Date().getFullYear();
}

function is21Century() {
  const year = getCurrentYear();
  return year >= 2000 && year < 2100;
}

function getCurrentDays() {
  return new Date().getDay();
}

function checkWeekend() {
  const day = getCurrentDays();
  return day === 6 || day === 0;
}

function checkLeapYear() {
  const kab = new Date();
  return kab.getMonth() == 1;
}

module.exports = {
  checkOddEven,
  sum,
  getZero,
  is21Century,
  getCurrentYear,
  getCurrentDays,
  checkWeekend,
  checkLeapYear,
};
