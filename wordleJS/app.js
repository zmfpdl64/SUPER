/** 전체 index, row index */
let total = 0;
let index = 0;
/** 정답, 입력 정답 */
const answer = "ABCDE";
let ins = "";
/** 특수 값 */
const back = "BACKSPACE";
const enter = "ENTER";
/** 정답 확인 상수 */
const notExist = 0;
const contain = 1;
const correct = 2;
/** 정답, 보유, 보유x 색깔 */
const notExistColor = "#3A3A3C";
const containColor = "#b59f3b";
const correctColor = "#538D4E";
/** 아스키 코드 */
const alphaMax = 90;
const alphaMin = 65;
/** 해당 문제 row, col 상수 */
const maxCol = 5;
const col_len = 5;
const row_len = 6;
const maxIndex = col_len * row_len;

/**
 *
 * @param {인덱스} idx
 * @returns
 */
function selectDom(idx) {
  return document.querySelector(`.board-block[data-index='${idx}']`);
}
function selectKeyDom(key) {
  return document.querySelector(`.keyboard-block[data-key='${key}'`);
}
function inputAlpha(key, code, cur_idx) {
  if (alphaMin <= code && code <= alphaMax && index < maxCol) {
    const domBlock = selectDom(cur_idx);
    domBlock.innerText = key;
    ins += key;
    index++;
    console.log(ins);
    return true;
  }
  return false;
}
function isEnter(key) {
  if (key === "ENTER" && index === maxCol) {
    total += index;
    index = 0;
    return true;
  }
  return false;
}

function isDelete(key, cur_idx) {
  if (key === "BACKSPACE" && index > 0) {
    ins = ins.slice(0, -1);
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
  ins = "";
  console.log(result);
  return result;
}

function changeCss(result) {
  let idx = total - result.length;
  let count = 0;
  for (let i = 0; i < result.length; i++) {
    const result_v = result[i];
    const dom = selectDom(idx);
    const keyDom = selectKeyDom(dom.innerText);
    console.log(dom);
    if (result_v === contain) {
      dom.style.background = containColor;
      keyDom.style.background = containColor;
    } else if (result_v === correct) {
      dom.style.background = correctColor;
      keyDom.style.background = correctColor;
      count++;
    } else {
      dom.style.background = notExistColor;
      keyDom.style.background = notExistColor;
    }
    idx++;
  }
  if (count === result.length) {
    return true;
  }
  return false;
}
function alertMessage(bool) {
  if (bool) {
    setTimeout(() => {
      alert("정답입니다!!");
    }, 100);
    return;
  }
  setTimeout(() => {
    alert("틀렸습니다...");
  }, 100);
  return;
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
      const result = returnResult(ins);
      if (changeCss(result)) {
        alertMessage(true);
        return;
      }
      console.log(total, maxIndex);
      if (total === maxIndex) {
        alertMessage(false);
        return;
      }
    }
    if (isDelete(key, cur_idx)) {
      return;
    }
  };
  window.addEventListener("keydown", handleKeydown);
};

app();
