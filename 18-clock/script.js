const secondHand = document.querySelector(".second");
const minuteHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  //   html.classList.add("dark");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "light mode";
  }
});

function clock() {
  const newDate = new Date();
  const second = newDate.getSeconds();
  const minute = newDate.getMinutes();
  const hour = newDate.getHours();
  const day = newDate.getDay();
  const date = newDate.getDate();
  const month = newDate.getMonth();
  const amPm = hour <= 12 ? "AM" : "PM";

  console.log(day, date, month);

  const s_deg = 6 * second;
  const m_deg = 6 * minute + (6 * second) / 60;
  const h_deg = 30 * hour + (30 * minute) / 60;
  //   console.log(s_deg, m_deg, h_deg);

  secondHand.style.transform = `rotate(${s_deg + 180}deg)`;
  minuteHand.style.transform = `rotate(${m_deg + 180}deg)`;
  hourHand.style.transform = `rotate(${h_deg + 180}deg)`;

  timeEl.innerHTML = `${hour}:${minute < 10 ? `0${minute}` : minute} ${amPm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]}`;
}

setInterval(clock, 1000);
