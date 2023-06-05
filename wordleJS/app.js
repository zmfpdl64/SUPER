function timeFormat(s) {
  return s.toString().padStart(2, "0");
}

const start_time = new Date();

function setTime() {
  const passed_time = new Date();
  const hours = timeFormat(passed_time.getHours() - start_time.getHours());
  const minute = timeFormat(passed_time.getMinutes() - start_time.getMinutes());
  const seconds = timeFormat(
    passed_time.getSeconds() - start_time.getSeconds()
  );
  const count = document.querySelector(".time");
  count.innerText = `${hours} : ${minute} : ${seconds}`;
}

setInterval(setTime, 1000);
