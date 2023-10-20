import works from "./works.js";
import footer from "./footer.js";

const workContent = document.getElementById("work-content");
const footerEl = document.getElementById("footerId");

function renderWorkPage() {
  const workPageHtml = works
    .map((work) => {
      const { name, descr, imgSrc, imgAlt, link } = work;

      return `
		<div class="project image-box">
            <div class="image">
              <img
                src=${imgSrc}
                alt=${imgAlt}
                class="img-fluid rounded"
              />
            </div>
            <div class="image-text">
              <a
                href=${link}
                target="_blank"
                class="image-link"
                ><h3 class="text-center m-0">${name}</h3>
                <p class="text-center text-muted">${descr}</p></a
              >
            </div>
          </div>
	`;
    })
    .join("");
  return workPageHtml;
}

workContent ? (workContent.innerHTML = renderWorkPage()) : "";
footerEl ? (footerEl.innerHTML = footer) : "";
