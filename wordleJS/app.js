let total = 0;
let index = 0;
const back = "BACKSPACE";
const enter = "ENTER";
const alphaMax = 90;
const alphaMin = 65;
const colMax = 5;

function selectDom(idx) {
  return document.querySelector(`.board-block[data-index='${idx}']`);
}
function inputAlpha(key, code, cur_idx) {
  if (alphaMin <= code && code <= alphaMax && index < colMax) {
    const domBlock = selectDom(cur_idx);
    domBlock.innerText = key;
    index++;
    return true;
  }
  return false;
}
function isEnter(key) {
  if (key === "ENTER" && index === colMax) {
    total += index;
    index = 0;
    return true;
  }
  return false;
}

function isDelete(key) {
  if (key === "BACKSPACE" && index > 0) {
    selectDom(cur_idx - 1).innerText = "";
    index -= 1;
    return true;
  }
  return false;
}

const app = () => {
  const handleKeydown = (e) => {
    const key = e.key.toUpperCase();
    const code = e.keyCode;
    let cur_idx = total + index;

    if (inputAlpha(key, code, cur_idx)) {
      return;
    }
    if (isEnter(key)) {
      return;
    }
    if (isDelete(key)) {
      return;
    }
  };
  window.addEventListener("keydown", handleKeydown);
};

app();
