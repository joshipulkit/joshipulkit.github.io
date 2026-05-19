// Subtle fade-in-up for elements with class `reveal` once they enter the viewport.
// Respects prefers-reduced-motion. No dependencies.
(function () {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function showAll() {
    var els = document.querySelectorAll(".reveal");
    for (var i = 0; i < els.length; i++) els[i].classList.add("is-visible");
  }

  if (reduceMotion || !("IntersectionObserver" in window)) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", showAll);
    } else {
      showAll();
    }
    return;
  }

  function observe() {
    var io = new IntersectionObserver(
      function (entries, observer) {
        for (var i = 0; i < entries.length; i++) {
          var entry = entries[i];
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    var els = document.querySelectorAll(".reveal");
    for (var i = 0; i < els.length; i++) io.observe(els[i]);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", observe);
  } else {
    observe();
  }
})();
