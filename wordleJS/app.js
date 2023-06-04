const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const div = (a, b) => {
  return a / b;
};
const mul = (a, b) => {
  return a * b;
};
const 계산기 = {
  더하기: add,
  빼기: sub,
  곱하기: mul,
  나누기: div,
};

for (let obj in 계산기) {
  console.log(계산기[obj](10, 2));
}

for (let obj in 계산기) {
  let answer = 계산기[obj](10, 2);
  if (answer < 5) {
    console.log("under 5");
  } else if (answer < 10) {
    console.log("under 10");
  } else {
    console.log("upper 10");
  }
}
