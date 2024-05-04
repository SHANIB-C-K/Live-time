function UpdateTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = hours < 10 ? "0" : hours;
  minutes = minutes < 10 ? "0" : minutes;
  seconds = seconds < 10 ? "0" : seconds;

  let setTime = hours + ":" + minutes + ":" + seconds;

  document.getElementById("time").innerHTML = setTime;
}

setInterval(UpdateTime, 1000);

UpdateTime();
