const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const miuntes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${miuntes}:${seconds}`;
}

getClock(); //로드 중 1초동안 00:00:00으로 보이는 상태를 보완하기 위함
setInterval(getClock, 1000);
