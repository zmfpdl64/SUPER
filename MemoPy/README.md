## Python Backend

### 서버리스 플랫폼 Deta Space

[Deta Space](https://deta.space/)

[Python Site](https://woomo-1-e8884847.deta.app/memo/)

## 1번 코드

```javascript
function displayMemos(memo) {
  const ul = document.querySelector("#memo-ul");
  ul.innerHTML = "";
  const li = document.createElement("li");
  li.innerText = `id:${memo.id} ${memo.content}`;
  ul.appendChild(li);
}
async function readMemo() {
  const res = await fetch("/memos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonRes = await res.json();
  jsonRes.forEach(displayMemos); //1번 구문
}
```

## 2번 코드

```javascript
function displayMemos(memos) {
  const ul = document.querySelector("#memo-ul");
  ul.innerHTML = "";
  for (let i = 0; i < memos.length; i++) {
    const li = document.createElement("li");
    li.innerText = `id:${memos[i].id} ${memos[i].content}`;
    ul.appendChild(li);
  }
}

async function readMemo() {
  const res = await fetch("/memos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonRes = await res.json();
  displayMemos(jsonRes); //2번 구문
}
```

### 의문점

1번 코드는 forEach를 사용해서 각 인자마다 함수를 실행해 화면의 리스트를 추가하는 방식이다

2번 코드는 서버에서 데이터를 가져와 모든 메모 리스트를 함수에 전달해 한번에 처리하는 방식이다.

### 나의 생각

나는 2번 코드를 지향한다.

- 1번 코드는 매 인자마다 메소드를 호출해야 하지만 2번코드는 한번만 호출 한다.
- 2번 코드는 인자로 배열을 전달하지만 복사하는게 아닌 메모리 주소를 전달하는것이기 때문에 문제가 없다.
