const deadline = new Date("17 Nov, 2021 00:00:00");
const daysHtml = document.querySelector(".days");
const hoursHtml = document.querySelector(".hours");
const minutesHtml = document.querySelector(".minutes");
const secondsHtml = document.querySelector(".seconds");

const interval = setInterval(function updateDate() {
  const now = new Date();
  const total = deadline - now;
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((total % (1000 * 60)) / 1000);

  if (total <= 0) {
    clearInterval(interval);
  } else {
    daysHtml.innerText = days;
    hoursHtml.textContent = hours;
    minutesHtml.textContent = minutes;
    secondsHtml.textContent = seconds;
  }
}, 1000);
