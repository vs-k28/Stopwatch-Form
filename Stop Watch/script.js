let seconds = 0,
  minutes = 0,
  hours = 0;
let hour_el = document.getElementById("hour");
let min_el = document.getElementById("min");
let sec_el = document.getElementById("sec");
let play_el = document.getElementById("play");
let pause_el = document.getElementById("pause");
let stop_el = document.getElementById("stop");
let timer_el = document.getElementById("timer");
let time_fun;
let updatetime;
play_el.addEventListener("click", () => {
  time_fun = setInterval(updatetime, 1000);
  play_el.disabled = true;
  pause_el.disabled = false;
});

updatetime = () => {
  seconds = seconds + 1;
  if (seconds < 10) {
    sec_el.innerText = "0" + seconds;
  } else {
    sec_el.innerText = seconds;
  }
  if (seconds >= 60) {
    minutes = minutes + 1;
    seconds = 0;
    if (minutes < 10) {
      min_el.innerText = "0" + minutes;
    } else {
      min_el.innerText = minutes;
    }

    if (minutes >= 60) {
      hours = hours + 1;
      minutes = 0;
      if (hours < 10) {
        hour_el.innerText = "0" + hours;
      } else {
        hour_el.innerText = hours;
      }
    }
  }
};

pause_el.addEventListener("click", () => {
  let mytimer = clearInterval(time_fun);
  play_el.disabled = false;
  pause_el.disabled = true;
});

stop_el.addEventListener("click", () => {
  let mytimer = clearInterval(time_fun);
  // seconds = 0;
  // minutes = 0;
  // hours = 0;
  // sec_el.textContent = "00";
  // min_el.textContent = "00";
  // hour_el.textContent = "00";
  // play_el.disabled = false;
  // pause_el.disabled = true;
  // stop_el.disabled = true;
  window.location.reload();
});
