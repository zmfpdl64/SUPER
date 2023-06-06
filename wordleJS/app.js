let total = 0;
let index = 0;
const answer = "ABCDE";

const back = "BACKSPACE";
const enter = "ENTER";
let str = "";

const notExist = 0;
const contain = 1;
const correct = 2;

const notExistColor = "#3A3A3C";
const containColor = "#b59f3b";
const correctColor = "#538D4E";

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
    str += key;
    index++;
    console.log(str);
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

function isDelete(key, cur_idx) {
  if (key === "BACKSPACE" && index > 0) {
    str = str.slice(0, -1);
    selectDom(cur_idx - 1).innerText = "";
    index -= 1;
    return true;
  }
  return false;
}
function returnResult(inputs) {
  const result = [];
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i] === answer[i]) {
      result.push(correct);
    } else if (answer.includes(inputs[i])) {
      result.push(contain);
    } else {
      result.push(notExist);
    }
  }
  str = "";
  console.log(result);
  return result;
}

/**
 * const notExist = 0;
 * const contain = 1;
 * const correct = 2;
 */

function changeCss(result) {
  let idx = total - result.length;
  for (let i = 0; i < result.length; i++) {
    const result_v = result[i];
    const dom = selectDom(idx);
    console.log(dom);
    if (result_v === contain) {
      dom.style.background = containColor;
    } else if (result_v === correct) {
      dom.style.background = correctColor;
    } else {
      dom.style.background = notExistColor;
    }
    idx++;
  }
}
/**
 * - [x] 해당 알파뱃 가질 때
 * - [x] 알파뱃 자리 일치할 때
 * - [ ] 결과를 확인하고 해당 css 변경
 */
const app = () => {
  const handleKeydown = (e) => {
    const key = e.key.toUpperCase();
    const code = e.keyCode;
    let cur_idx = total + index;
    if (inputAlpha(key, code, cur_idx)) {
      return;
    }
    if (isEnter(key)) {
      const result = returnResult(str);
      changeCss(result);
      return;
    }
    if (isDelete(key, cur_idx)) {
      return;
    }
  };
  window.addEventListener("keydown", handleKeydown);
};

app();
