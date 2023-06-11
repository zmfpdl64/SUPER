<script>
import { getDatabase, ref as database_ref, push,  } from "firebase/database";
import { getStorage, ref as storage_ref, uploadBytes, getDownloadURL} from "firebase/storage";

let title
let price
let desc
let place
let files
const storage = getStorage();
const db = getDatabase();

function writeUserData(imgurl) {
  push(database_ref(db, 'items/' ), {
    title:title,
    price: price,
    description: desc,
    place: place,
    created_at: new Date().getTime(),
    imgurl: imgurl
  });
  window.location.hash = '/';
}

const uploadfiles = async () => {
    const file = files[0];
    const img_ref = storage_ref(storage, '/images'+"/"+file.name);
    const res = await uploadBytes(img_ref, file);
    const url = await getDownloadURL(img_ref);
    return url;
}


const  handlesubmit = async () => {
    const url = await uploadfiles();
    writeUserData(url);
}
</script>

<form id="write-form" class="write-form" on:submit|preventDefault={ () => handlesubmit()}>
    <div>
      <label for="image">이미지</label>
      <input id="image" type="file" name="image" bind:files={files}/>
    </div>
    <div>
      <label for="title">제목</label>
      <input id="title" type="text" name="title" bind:value={title}/>
    </div>
    <div>
      <label for="price">가격</label>
      <input id="price" type="text" name="price" bind:value={price} />
    </div>
    <div>
      <label for="desc">설명</label>
      <input id="desc" type="text" name="desc" bind:value={desc} />
    </div>
    
    <div>
      <label for="place">장소</label>
      <input id="place" type="text" name="place" bind:value={place}/>
    </div>
    <div>
      <button type="submit">저장하기</button>
    </div>
  </form>

  <style></style>