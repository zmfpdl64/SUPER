## 선택자(selector)

- Element명으로 선택

```css
/* 태그로 찾기  */
div {
  background-color: blue;
}
```

- Class, ID로 선택
  - `.` 클래스
  - `#` ID

```css
/* 클래스로 찾기  */
.btn {
  background-color: blue;
}

/* id로 찾기  */
#btn {
  background-color: blue;
}
```

- Pseudo Selector (가상 선택자)

[pseudo selector mdn Document](https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-classes)

nth-child

```css

tag:nth-child(2)
tag:nth-child(odd)
tag:nth-child(even)
tag:nth-child(n+4)  /* 4번째 부터 그 이후*/
tag:nth-child(3n-1)
```

active, focus, hover, visited

```css
/* 클릭 누르고 있을 때 */
tag:active
/* 마우스를 올려놓았을 때 */
tag:hover
/* 방문한 링크일 떄 */
a:visited
/* input태그 선택시 */
input:focus

```
