import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  const articleElement = document.createElement('article');
  articleElement.className = "message";
  articleElement.innerHTML = "some content";

  const bodyElement = document.body;

  bodyElement.addEventListener('click', () => {

    for (let i = 0; i < 3; i++) {
    bodyElement.appendChild(articleElement.cloneNode(1));
    }
  });
});
