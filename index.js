function updateDateTime() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()];
  const currentUTCTime = currentDate.getTime();

  document.querySelector('[data-testid="currentDayOfTheWeek"]').innerText =
    currentDay;
  document.querySelector('[data-testid="currentUTCTime"]').innerText =
    currentUTCTime;
}

updateDateTime();
setInterval(updateDateTime, 1);
