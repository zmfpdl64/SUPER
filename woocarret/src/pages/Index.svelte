<script>

import { getDatabase, ref, onValue} from "firebase/database";
  import { onMount } from "svelte";

const db = getDatabase();
const starCountRef = ref(db, 'items/');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  items = Object.values(data);
});
    
    let time = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    $: items = [];

    onMount(() => onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  items = Object.values(data).reverse();
}));

    const flowTime = () => {
    time = new Date().getHours();
    minutes = new Date().getMinutes();
    seconds = new Date().getSeconds();
    };
    setInterval(flowTime, 1000);
const calcTime = (created_at) => {
  const curTime = new Date().getTime() - 9 * 60 * 60 * 1000;
  const time = new Date(curTime - created_at);
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  if (hour > 0) {
    return `${hour}시간 전`;
  } else if (minutes > 0) {
    return `${minutes}분 전`;
  } else if (seconds > 0) {
    return `${seconds}초 전`;
  }
  return "방금 전";
};
    
</script>


<header>
    <div class="info-bar">
      <div class="info-bar__time">{time}:{minutes}:{seconds}</div>
      <div class="info-bar__icons">
        <img src="asset/chart-bar.svg" alt="char-bar" />
        <img src="asset/wifi.svg" alt="wifi" />
        <img src="asset/battery.svg" alt="battery" />
      </div>
    </div>
    <div class="menu_bar">
      <div class="menu-bar__location">
        <div>구로1동 <img src="/asset/arrow.svg" alt="image1"/></div>
      </div>
      <div class="menu-bar__icons">
        <img src="/asset/search.svg" alt="image2"/>
        <img src="/asset/menu.svg" alt="image3"/>
        <img src="/asset/alert.svg" alt="image4"/>
      </div>
    </div>
  </header>
  <main>
    {#each items as item}
    <div class="item-list">
        <div class="item-list__img">
            <img src={item.imgurl} alt="lists"/>
        </div>
        <div class="item-list__info">
            <div class="item-list__info-title">{item.title}</div>
            <div class="item-list__info-meta">{item.place} {calcTime(item.created_at)}</div>
            <div class="item-list__info-price">{item.price}</div>
            <div class="item-list__info-description">{item.description}</div>
        </div>
    </div>
    {/each}
  </main>
  <footer>
    <div class="navbar-element">
      <img src="/asset/home.svg" alt="image5"/>
      <span>홈</span>
    </div>
    <div class="navbar-element">
      <img src="/asset/document.svg" alt="image6"/>
      <span>동네생활</span>
    </div>
    <div class="navbar-element">
      <img src="/asset/location.svg" alt="image7" />
      <span>내근처</span>
    </div>
    <div class="navbar-element">
      <img src="/asset/chat.svg" alt="image8"/>
      <span>채팅</span>
    </div>
    <div class="navbar-element">
      <img src="/asset/my.svg" alt="image9"/>
      <span>나의 당근</span>
    </div>
  </footer>
  <a class="write-btn" href="#/write">+글쓰기</a>
  <div class="media-info-msg">화면을 줄여주세요.</div>

  <style>
    
  </style>