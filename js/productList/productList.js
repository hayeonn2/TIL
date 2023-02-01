// // 카테고리 클릭하면 메뉴 접히게 구현하기
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

// const container = document.querySelectorAll(".top_menu");
const container = getNodes(".top_menu");

let panel = document.querySelectorAll(".list_wrapper");

for (let i = 0; i < container.length; i++) {
  container[i].addEventListener("click", function () {
    panel[i].classList.toggle("active");

    if (panel[i].style.maxHeight) {
      panel[i].style.maxHeight = null;
    } else {
      panel[i].style.maxHeight = panel[i].scrollHeight + "px";
    }
  });
}
