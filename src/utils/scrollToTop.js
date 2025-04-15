
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "auto" });
};

const scrollToTopSmooth = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export { scrollToTopSmooth, scrollToTop };
