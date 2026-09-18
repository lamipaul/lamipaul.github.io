function citationText(citation) {
  const copy = citation.cloneNode(true);
  copy.querySelectorAll(".publication-link, .citation-copy").forEach((element) => element.remove());
  copy.querySelectorAll("br").forEach((element) => element.replaceWith(" "));
  return copy.textContent.replace(/\s+/g, " ").trim();
}

async function copyCitation(button) {
  const text = button.dataset.citation;

  try {
    await navigator.clipboard.writeText(text);
    button.textContent = "Copied";
    button.classList.add("citation-copy--success");
  } catch (error) {
    console.error("Unable to copy citation:", error);
    button.textContent = "Copy failed";
    button.classList.add("citation-copy--error");
  }

  window.setTimeout(() => {
    button.textContent = "Copy citation";
    button.classList.remove("citation-copy--success", "citation-copy--error");
  }, 1800);
}

function addCitationButtons() {
  document.querySelectorAll(".publication-list h2").forEach((heading) => {
    const meta = heading.nextElementSibling;
    const summary = meta?.nextElementSibling;
    const citation = summary?.nextElementSibling;

    if (
      !meta?.classList.contains("publication-meta") ||
      !summary?.classList.contains("publication-summary") ||
      !citation ||
      citation.tagName !== "P" ||
      summary.nextElementSibling?.classList.contains("publication-controls")
    ) {
      return;
    }

    const controls = document.createElement("div");
    controls.className = "publication-controls";

    citation.querySelectorAll(".publication-link").forEach((link) => {
      controls.append(link.cloneNode(true));
    });

    const button = document.createElement("button");
    button.type = "button";
    button.className = "citation-copy";
    button.dataset.citation = citationText(citation);
    button.textContent = "Copy citation";
    button.setAttribute("aria-label", `Copy citation for ${heading.textContent.trim()}`);
    button.addEventListener("click", () => copyCitation(button));
    controls.append(button);
    citation.hidden = true;
    summary.after(controls);
  });
}

document.addEventListener("DOMContentLoaded", addCitationButtons);
document.addEventListener("DOMContentSwitch", addCitationButtons);
