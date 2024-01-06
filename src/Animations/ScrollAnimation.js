export const ActivateAnomation = () => {
  const scrollers = document.querySelectorAll(".scroller");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }
  function addAnimation() {
    scrollers.forEach((scrollers) => {
      scrollers.setAttribute("data-animated", true);
      // const scrollerInner = document.querySelector(".scroller__inner");
      // const scrollerInnerContent = Array.from(scrollerInner.children);
      // scrollerInnerContent.forEach((item) => {
      //   const duplicateditem = item.cloneNode(true);
      //   duplicateditem.setAttribute("aria-hidden", true);
      //   scrollerInner.appendChild(duplicateditem);
      // });
    });
    return true;
  }
  return true;
};
