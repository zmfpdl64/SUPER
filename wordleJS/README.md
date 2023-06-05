## Javascript를 이용한 DOM 조작법

### DOM 선택자

```javascript
//   1. id
const timeid = document.querySelector("#time");
//   2. class
const timeclass = document.querySelector(".time");
//   3. tag
const timetag = document.querySelector("time");
```

### DOM EventListener

- 익명 함수를 활용한 이벤트 리스너

```javascript
timeclass.addEventListener("mouseover", () => {
  timeclass.innerText = "24:00";
});
```

- 함수를 활용한 이벤트 리스너

```javascript
function change() {
  timeclass.innerText = "24:00";
}
timeclass.addEventListener("mouseover", change);
```

- 주의사항 함수명만을 정의해야 하며 ()를 붙히게 되면 실행이된다.
