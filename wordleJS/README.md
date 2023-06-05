## javascript 비동기 함수

- setInterval(function, millisecond)
- setTimeout(function, millisecond)

### Date 객체 다루기

```javascript
new Date().getDay();
new Date().getMinutes();
new Date().getHours();
```

### 유용한 문법

- 백틱 `\``
- padStart(length, fillChar)
- padEnd(length, fillchar)

### 현재 시간 카운터

```javascript
function timeFormat(s) {
  return s.toString().padStart(2, "0");
}

function setTime() {
  const hours = timeFormat(new Date().getHours());
  const minutes = timeFormat(new Date().getMinutes());
  const seconds = timeFormat(new Date().getSeconds().toString());
  const cur_time = document.querySelector(".time");
  cur_time.innerText = `${hours} : ${minutes} : ${seconds}`;
}

setInterval(setTime, 1000);
```

### 타이머

```javascript
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
```

### 주의 사항

```javascript
const passed_time = new Date(cur_time - start_time);
```

위의 방식을 이용해 시, 분, 초를 구하려 했지만 new Date()객체를 생성하는 방식이
2개의 시간 차이를 0시0분0초 기준으로 생성하는게 아니라
9시 0분 0초를 기준으로 생성하기 때문에 -9시를 해주거나 시, 분, 초를 다 따로 계산해야 한다.
