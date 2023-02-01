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
const categoryTitle = getNodes(".top_menu");

const categoryList = getNodes(".list_wrapper");
const img = getNodes(".toggle_btn > svg");

for (let i = 0; i < categoryTitle.length; i++) {
  categoryTitle[i].addEventListener("click", function () {
    img[i].classList.toggle("active");

    if (categoryList[i].style.maxHeight) {
      categoryList[i].style.maxHeight = null;
    } else {
      categoryList[i].style.maxHeight = categoryList[i].scrollHeight + "px";
    }
  });
}
