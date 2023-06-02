## 색상과 애니메이션

- transition
  - roatate (회전)
  - translate (이동)
  - scale (크기)

```css
div:hover img {
  width: 200px;
  transform: all 2s rotateX(360deg); /* 해당 객체 360도 회전 */
}
div:hover img {
  width: 200px;
  transform: translateX(100px); /* 100px 이동 */
}
div:hover img {
  width: 200px;
  transform: scale(2); /*2배로 커짐*/
}
```

- animation

```css
img {
  animation: move;
}

@keyframes move {
  25% {
    transform: scale(1);
  }
  50% {
    transform: scale(3);
  }
  100% {
    transform: scale(1);
  }
}
```

animation 인자에 변수를 넣어주면 태그에 애니메이션이 적용된다.

- 반응형 미디어 쿼리

[media query mdn document](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_media_queries/Using_media_queries)

```css
@media screen and (max-width: 800px) {
  div {
    opacity: 0;
  }
  #info-msg {
    opacity: 1;
  }
}
```
