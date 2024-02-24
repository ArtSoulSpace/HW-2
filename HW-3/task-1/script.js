const container = document.getElementsByClassName("container")[0];
const textColor = document.getElementsByClassName("text")[0];

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  // console.log(color);
  return color;
}
getRandomColor();

const intervalId = setInterval(function () {
  function setRandomColor() {
    container.style.backgroundColor = getRandomColor();
    console.log(getRandomColor());
    textColor.textContent = getRandomColor();
  }
  setRandomColor();

  container.onclick = function() {
    clearInterval(intervalId);
  }
}, 100);
