(function () {
  const galleries = document.querySelectorAll(".gallery");
  galleries.forEach((gallery) => {
    const photo = gallery.querySelector(".gallery-photo");
    const prev = gallery.querySelector(".gallery-arrow--prev");
    const next = gallery.querySelector(".gallery-arrow--next");
    const list = (gallery.getAttribute("data-images") || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    let index = 0;

    function render() {
      if (!list.length) return;
      if (photo) photo.src = list[index];
      const disabled = list.length <= 1;
      if (prev) prev.disabled = disabled;
      if (next) next.disabled = disabled;
    }

    prev?.addEventListener("click", () => {
      if (list.length <= 1) return;
      index = (index - 1 + list.length) % list.length;
      render();
    });

    next?.addEventListener("click", () => {
      if (list.length <= 1) return;
      index = (index + 1) % list.length;
      render();
    });

    render();
  });

  const textGalleries = document.querySelectorAll(".text-gallery");
  textGalleries.forEach((tg) => {
    const prev = tg.querySelector(".gallery-arrow--prev");
    const next = tg.querySelector(".gallery-arrow--next");
    const cards = Array.from(tg.querySelectorAll(".article-card"));
    let index = Math.max(
      0,
      cards.findIndex((c) => c.classList.contains("active"))
    );

    function render() {
      cards.forEach((c, i) => {
        c.classList.toggle("active", i === index);
      });
      const disabled = cards.length <= 1;
      if (prev) prev.disabled = disabled;
      if (next) next.disabled = disabled;
    }

    prev?.addEventListener("click", () => {
      if (cards.length <= 1) return;
      index = (index - 1 + cards.length) % cards.length;
      render();
    });

    next?.addEventListener("click", () => {
      if (cards.length <= 1) return;
      index = (index + 1) % cards.length;
      render();
    });

    render();
  });
})();
