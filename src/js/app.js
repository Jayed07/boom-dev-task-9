import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  const articleElement = document.createElement('article');
  articleElement.className = "message";
  const text = document.createTextNode("some content");
  articleElement.appendChild(text);

  const bodyElement = document.querySelector('body');

  bodyElement.addEventListener('click', function handleClick() {
    bodyElement.appendChild(articleElement);
    bodyElement.appendChild(articleElement);
    bodyElement.appendChild(articleElement);
    bodyElement.appendChild(articleElement);
    bodyElement.appendChild(articleElement);
  });
});
