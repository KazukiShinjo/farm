const toggler = document.querySelector(".toggle");
const ele = document.getElementById("deleteconpo");
let container = document.querySelectorAll(".select-item");
let cart_btn = document.querySelectorAll(".selectBtn");
let cart_cnt_icon = document.getElementById("js_cart_cnt");
let cart_cnt = 0; //カートのアイテム数
let clicked = []; //クリックされたカートアイコンのインデックス
let save_items = []; //ローカルストレージ保存用の配列
let item = JSON.parse(localStorage.getItem("select-item")); //ローカルストレージの商品データ配列

// サイドバーの開閉
window.addEventListener("click", event => {
  if (event.target.className == "toggle" || event.target.className == "toggler") {
    document.body.classList.toggle("show-nav");
    document.getElementById("deleteconpo").classList.toggle("hidden");
  } else if (event.target.className == "overlay") {
    document.body.classList.remove("show-nav");
    document.getElementById("deleteconpo").classList.remove("hidden");
  }
});

// ボタンにカーソルが当たったらオレンジ
document.addEventListener('DOMContentLoaded', function () {
  const checkOut = document.getElementById('checkOut');
  checkOut.addEventListener('mouseover', function () {
    checkOut.style.backgroundColor = '#ff9933';
  }, false);
})

//ボタンからカーソルが外れた時、ボタンの背景が黒 
document.addEventListener('DOMContentLoaded', function () {
  const checkOut = document.getElementById('checkOut');
  checkOut.addEventListener('mouseout', function () {
    checkOut.style.backgroundColor = '#000';
  }, false);
})

// 増減カウンター
document.addEventListener('DOMContentLoaded', function () {
  const downBtn = document.getElementById('down');
  const upBtn = document.getElementById('up');
  const text = document.getElementById('textBox');

  //ボタンが押されたら数値が減る
  downBtn.addEventListener('click', function () {
    if (text.value >= 1) {
      text.value--;
    }
  });

  //ボタンが押されたら数値が増える
  upBtn.addEventListener('click', function () {
    text.value++;
  })
});

//カートに商品が入っている場合
if (item) {
  let id;
  for (let i = 0; i < item.length; i++) {
    id = item[i].id;
    save_items.push(item[i]);
    clicked.push(id);
    actice_btn(id); //カートに商品を追加する処理
  }
  if (item.length != 0) {
    cart_cnt_icon.parentNode.classList.remove('hidden');
    cart_cnt_icon.innerHTML = cart_cnt;
  }
}

cart_btns.forEach(function (cart_btn, index) {
  cart_btn.addEventListener('click', function () {
    if (clicked.indexOf(index) >= 0) {
      for (let i = 0; i < clicked.length; i++) {
        if (clicked[i] == index) {
          clicked.splice(i, 1);
          save_items.splice(i, 1);
        }
      }
      inactive_btn(index);
    } else if (clicked.indexOf(index) == -1) {
      let name = cart_btn.dataset.name;
      let price = Number(cart_btn.dataset.price);
      clicked.push(index);
      save_items.push({
        id: index,
        name: name,
        price: price
      });
      actice_btn(index);
    }
    localStorage.setItem("item", JSON.stringify(save_items));
  });
});

function actice_btn(index) {
  cart_cnt++;
  if (cart_cnt >= 1) {
    cart_cnt_icon.parentNode.classList.remove('hidden');
  }
  cart_cnt_icon.innerHTML = cart_cnt;
  cart_btn[index].classList.add('item_cart_btn_active');
  cart_btn[index].innerHTML = "カートから外す";
  container[index].classList.add("select");
}

function inactivate_btn(index) {
  cart_cnt--;
  if (cart_cnt == 0) {
    cart_cnt_icon.parentNode.classList.add('hidden');
  }
  cart_cnt_icon.innerHTML = cart_cnt;
  cart_btns[index].classList.remove('item_cart_btn_active');
  cart_btns[index].innerHTML = "カートに入れる";
  container[index].classList.remove("selected");
}
const prices = document.querySelectorAll(".item_price");
prices.forEach(function (price) {
  let num = Number(price.innerHTML).toLocaleString();//金額を3桁区切りに
  price.innerHTML = num;
})