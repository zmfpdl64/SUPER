const rows = {};
let total = 0;
let index = 0;
function selectDom(idx) {
  return document.querySelector(`.board-block[data-index='${idx}']`);
}

const app = () => {
  const handleKeydown = (e) => {
    const key = e.key.toUpperCase();
    const code = e.keyCode;
    let sum = total + index;
    const domBlock = selectDom(sum);
    /**
     * 1. 문자열 입력받기
     */
    if (65 <= code && code <= 90 && index < 5) {
      domBlock.innerText = key;
      index++;
      return;
    }
    if (key === "ENTER" && index === 5) {
      total += index;
      index = 0;
      return;
    }
    if (key === "BACKSPACE" && index > 0) {
      selectDom(sum - 1).innerText = "";
      index -= 1;
    }
  };
  window.addEventListener("keydown", handleKeydown);
};

app();
