// 手機規格資料清單
const phones = [
  {
    color: "sliver",
    humanColor: "銀河灰",
    price: 36800
  },
  {
    color: "pink",
    humanColor: "繽紛粉",
    price: 46800
  },
  {
    color: "lightblue",
    humanColor: "天空藍",
    price: 25800
  },
  {
    color: "blue",
    humanColor: "深海藍",
    price: 33333
  },
  {
    color: "red",
    humanColor: "純粹紅",
    price: 51200
  }
];

// 選出必要的網頁元素
const app = document.querySelector("#app");
const phone = document.querySelector(".phone");
const camera = document.querySelector(".camera");
const selectBtn = document.querySelector(".select-btn");
const submitBtn = document.querySelector("#submit");

/////////////// 請繼續完成 ///////////////

function createDropDown(e) {
  let menu = document.querySelector(".select-menu");

  // please continue .....
  const menuDropDown = document.createElement("div");
  menuDropDown.className = "select-menu";
  phones.forEach(spec => {
    menuDropDown.innerHTML += `<div class='select-item color-${spec.color}'> ${spec.humanColor} </div>`;
  });

  if (menu === null) {
    e.target.parentElement.appendChild(menuDropDown);
    event.stopPropagation();
  } else {
    menu.remove();
  }
}

function changeColor(e) {
  let menu = document.querySelector(".select-menu");
  if (e.target.classList.contains("select-item")) {
    const selectItem = e.target.innerText;
    phones.forEach(spec => {
      if (selectItem === spec.humanColor) {
        phone.classList = `phone color-${spec.color} shadow-dark`;
        phone.dataset.color = `${spec.color}`;
        price.innerText = `${spec.price}`;
      }
    });
  }
  if (menu !== null) {
    menu.remove();
  }
}

function shopAlert(e) {
  let price = document.querySelector("#price").innerText;
  const color = phone.dataset.color;
  phones.forEach(spec => {
    if (color === spec.color) {
      alert(`您購買的是aphone 11 5G(512G)[${spec.humanColor}]
總金額 ： ${price}`);
    }
  });
}
// 從這行 code 開始思考⋯⋯

selectBtn.addEventListener("click", createDropDown);

submitBtn.addEventListener("click", shopAlert);

app.addEventListener("click", changeColor);
