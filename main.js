const items = document.querySelector(".itmes");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아온다.
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  // 2. 받아온 텍스트를 이용해서 새로운 아이템을 만듬 (텍스트 +삭제 버튼)
  const item = createItem(text);
  // 3. Items 컨테이너안에 새로 만든 아이템을 추가한다
  items.appendChild(item);
  // 4. 인풋을 초기화 한다.
  input.value = "";
  // .focus를 사용하면 자동으로 input 으로 돌아옴
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const name = document.createElement("span");
  name.setAttribute("class", "item__name");
  name.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item__delete");
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.addEventListener("click", () => {
    items.removeChild(itemrow);
  });

  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item__divider");

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
}

addBtn.addEventListener("click", () => {
  onAdd();
});

// input.addEventListener("keypress", (event) => {
//   console.log("key");
// });
