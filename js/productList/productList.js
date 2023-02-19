// // 카테고리 클릭하면 메뉴 접히게 구현하기
import { invisibleElement } from "../../lib/dom/controlElement.js";
import { toggleClass } from "../../lib/dom/css.js";
import { getNode, getNodes } from "../../lib/dom/getNode.js";

// // 1. 클릭 이벤트 만들기

// const categoryTitle = document.querySelectorAll(".toggle_btn");
// const categoryList = document.querySelector(".list_wrapper");

// function toggleA() {
//   categoryList.classList.toggle("active");

//   console.log(categoryList.nextElementsSibling);

//    if (categoryList.style.maxHeight) {
//    categoryList.style.maxHeight = null;
//    } else {
//      categoryList.style.maxHeight = categoryList.scrollHeight + "px";
//    }
//  }

// for (let i = 0; i < categoryTitle.length; i++) {
//   categoryTitle[i].addEventListener("click", toggleA);
// }

// 리스트 클릭했을 때 버튼 활성화
const categoryTitle = getNodes(".top_menu");

const categoryList = getNodes(".list_wrapper");
const img = getNodes(".toggle_btn > svg");
const list = getNodes(".category_list");
const checked = getNodes(".check_btn");

// for (let i = 0; i < categoryTitle.length; i++) {
//   categoryTitle[i].addEventListener("click", function (e) {
//     img[i].classList.toggle("active");

//     if (categoryList[i].style.maxHeight) {
//       categoryList[i].style.maxHeight = null;
//     } else {
//       categoryList[i].style.maxHeight = categoryList[i].scrollHeight + "px";
//     }
//   });
// }

// if (checked.style.background) {
//   checked.style.background =
//     "url(../assets/icons/list/checked.svg) no-repeat";
// } else {
//   checked.style.background =
//     "url(../assets/icons/list/none_checked.svg) no-repeat";
// }

// function activeBtn(e) {
//   let iconBtn = e.target.closest(".category_list > a");
//   if (!iconBtn) return;

//   toggleClass(".check_btn", "none_btn");
// }

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function (e) {
    e.preventDefault();
    let iconBtn = e.target.closest(".category_list > a");
    if (!iconBtn) return;

    checked[i].classList.toggle("none_btn");
    //toggleClass(".check_btn", "none_btn");
  });
}

// function handler(e) {
//   let toggleBtn = e.target.closest(".toggle_btn");
//   if (!toggleBtn) return;

//   img.classList.toggle("active");

//   if (categoryList.style.maxHeight) {
//     categoryList.style.maxHeight = null;
//   } else {
//     categoryList.style.maxHeight = categoryList.scrollHeight + "px";
//   }
//   console.log(123);
// }

for (let i = 0; i < categoryTitle.length; i++) {
  categoryTitle[i].addEventListener("click", function (e) {
    let toggleBtn = e.target.closest(".toggle_btn");
    if (!toggleBtn) return;

    img[i].classList.toggle("active");

    if (categoryList[i].style.maxHeight) {
      categoryList[i].style.maxHeight = null;
    } else {
      categoryList[i].style.maxHeight = categoryList[i].scrollHeight + "px";
    }
  });
}
