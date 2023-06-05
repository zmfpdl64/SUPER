// 태그를 가져오는 방법

/**
 * 1. id
 * const timeid = document.querySelector("#time");
 * 2. class
 * const timeclass = document.querySelector(".time");
 * 3. tag
 * const timetag = document.querySelector("time");
 */
const timeclass = document.querySelector(".time");
const timeid = document.querySelector("#time");

function change() {
  timeclass.color = "orange";
  timeclass.innerText = "24:00";
}
function reset() {
  timeclass.innerText = "00:00";
}

// document.title = "안녕하세요";
//주의사항 ()를 하면 실행되기 떄문에 함수명만 정의한다.
// timeclass.addEventListener("click", change);
// timeclass.addEventListener("mouseover", change);
// timeclass.addEventListener("mouseleave", reset);
timeclass.addEventListener("mouseover", () => {
  timeclass.innerText = "24:00";
});
