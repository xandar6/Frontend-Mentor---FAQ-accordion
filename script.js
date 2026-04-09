const detailsElements = document.querySelectorAll("details");

detailsElements.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      detailsElements.forEach((el) => {
        if (el !== item) {
          el.removeAttribute("open");
        }
      });
    }
  });
});
