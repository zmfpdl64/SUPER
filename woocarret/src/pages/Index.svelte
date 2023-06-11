<script>
    let time = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    const flowTime = () => {
    time = new Date().getHours();
    minutes = new Date().getMinutes();
    seconds = new Date().getSeconds();
    };
    setInterval(flowTime, 1000);
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
  <main></main>
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