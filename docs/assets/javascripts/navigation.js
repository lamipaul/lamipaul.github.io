function normalizePath(path) {
  const normalized = path.replace(/index\.html$/, "").replace(/\/+$/, "");
  return normalized || "/";
}

function updateCurrentPageIndicator() {
  const currentPath = normalizePath(window.location.pathname);

  document.querySelectorAll(".site-navigation__link").forEach((link) => {
    const linkPath = normalizePath(new URL(link.href, window.location.href).pathname);
    const isCurrent = linkPath === currentPath;

    link.classList.toggle("site-navigation__link--active", isCurrent);

    if (isCurrent) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

document.addEventListener("DOMContentLoaded", updateCurrentPageIndicator);

if (typeof document$ !== "undefined") {
  document$.subscribe(updateCurrentPageIndicator);
}
