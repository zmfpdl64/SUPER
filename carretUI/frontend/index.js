const fetchList = async () => {
  const res = await fetch("/items", {
    method: "GET",
  });
  const datas = await res.json();
  const items = datas.reverse();
  for (let i = 0; i < items.length; i++) {
    appendItem(items[i]);
  }
};
fetchList();
/**
 * <div class="item-list">
        <div class="item-list__img"><img src="asset/img.svg" /></div>
        <div class="item-list__info">
          <div class="item-list__info-title">게이밍 피시 팝니다.</div>
          <div class="item-list__info-meta">역삼동 19초 전</div>
          <div class="item-list__info-price">100만원</div>
        </div>
      </div>
 */
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

const appendItem = async (item) => {
  const main = document.querySelector("main");

  const item_list = document.createElement("div");
  item_list.classList.add("item-list");

  const item_img = document.createElement("div");
  const img = document.createElement("img");
  console.log(item.id);
  const res = await fetch(`/images/${item.id}`, {
    method: "GET",
  });
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  img.src = url;
  item_img.classList.add("item-list__img");
  item_img.appendChild(img);

  const item_info = document.createElement("div");
  item_info.classList.add("item-list__info");

  const item_info_title = document.createElement("div");
  item_info_title.innerText = item.title;
  item_info_title.classList.add("item-list__info-title");

  const item_info_meta = document.createElement("div");
  item_info_meta.innerText = `${item.place}  ${calcTime(item.created_at)}`;

  item_info_meta.classList.add("item-list__info-meta");

  const item_info_price = document.createElement("div");
  item_info_price.innerText = item.price;
  item_info_price.classList.add("item-list__info-price");

  main.appendChild(item_list);
  item_list.appendChild(item_img);
  item_list.appendChild(item_info);
  item_info.appendChild(item_info_title);
  item_info.appendChild(item_info_meta);
  item_info.appendChild(item_info_price);
  console.log(main.innerHTML);
};
