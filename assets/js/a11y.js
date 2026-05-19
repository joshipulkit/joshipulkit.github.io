// Mirror `title` to `aria-label` on icon-only links so screen readers
// announce the destination instead of saying nothing for the bare <i> child.
(function () {
  function looksIconOnly(el) {
    if (el.textContent && el.textContent.trim().length > 0) return false;
    return el.querySelector("i, svg") !== null;
  }

  function applyAriaLabels(root) {
    var anchors = root.querySelectorAll("a[title]:not([aria-label])");
    for (var i = 0; i < anchors.length; i++) {
      var a = anchors[i];
      if (looksIconOnly(a)) {
        a.setAttribute("aria-label", a.getAttribute("title"));
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      applyAriaLabels(document);
    });
  } else {
    applyAriaLabels(document);
  }
})();
