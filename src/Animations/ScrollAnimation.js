export const ActivateAnomation = () => {
  const scrollers = document.querySelectorAll(".scroller");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  } else {
    return false;
  }
  function addAnimation() {
    scrollers.forEach((scrollers) => {
      scrollers.setAttribute("data-animated", true);
    });
    return true;
  }
  return true;
};
