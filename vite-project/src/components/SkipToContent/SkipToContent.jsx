import { useEffect, useRef } from "react";
import { A11yHidden } from "@/components";

export function SkipToContent({ to, ...restProps }) {
  const skipToContentRef = useRef(null); //초기값 { current : null}

  let targetElement = null;

  // 사이드 이펙트 (명령형 프로그래밍)
  useEffect(() => {
    if (targetElement) {
      targetElement = document.querySelector(to);

      if (targetElement) {
        targetElement.setAttribute("tabindex", -1);
      }

      // 이벤트 핸들링
      // 리액트의 방식 (useRef)
      // skipToContentRef.current
      skipToContentRef.current.addEventListener("click", (e) => {
        e.preventDefault();

        targetElement && targetElement.focus();
      });
    }
  });

  /* const handleJumpToArea = (e) => {
    e.preventDefault();

    if (targetElement) {
      targetElement.focus();
    }
  }; */

  return (
    <>
      {/* <a href="" ref={skipToContentRef}>
        demo
      </a> */}
      <A11yHidden
        ref={skipToContentRef}
        as="a"
        focusable
        href={to}
        //onClick={handleJumpToArea}
        {...restProps}
      />
    </>
  );
}
