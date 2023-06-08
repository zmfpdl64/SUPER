/**
 * 1. memo-form
 * 2. memo-input
 * 3. memo-submit
 * 4. memo-ul
 */
async function editMemo(event) {
  const id = event.target.dataset.id;
  const editInput = prompt("수정할 값을 입력하세요");
  await fetch(`/memos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      content: editInput,
    }),
  });
  console.log(editInput);
  readMemo();
}

async function deleteMemo(event) {
  const id = event.target.dataset.id;
  await fetch(`/memos/${id}`, {
    method: "DELETE",
  });
  readMemo();
}

function displayMemos(memos) {
  const ul = document.querySelector("#memo-ul");
  ul.innerHTML = "";
  for (let i = 0; i < memos.length; i++) {
    const li = document.createElement("li");
    const editBtn = document.createElement("button");
    editBtn.addEventListener("click", editMemo);
    editBtn.dataset.id = memos[i].id;
    editBtn.innerText = "수정하기";
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", deleteMemo);
    deleteBtn.dataset.id = memos[i].id;
    deleteBtn.innerText = "삭제하기";
    li.innerText = `id:${memos[i].id} ${memos[i].content}`;
    ul.appendChild(li);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
  }
}

async function createMemo(value) {
  const res = await fetch("/memos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: new Date(),
      content: value,
    }),
  });
  const jsonRes = await res.json();
  console.log(jsonRes);
  readMemo();
}

async function readMemo() {
  const res = await fetch("/memos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonRes = await res.json();
  console.log(jsonRes);
  displayMemos(jsonRes);
}

function handleSubmit(e) {
  e.preventDefault();
  const input = document.querySelector("#memo-input");
  createMemo(input.value);
  input.value = "";
}

readMemo();
const form = document
  .querySelector("#memo-form")
  .addEventListener("submit", handleSubmit);
