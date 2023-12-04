const button = document.querySelector("button");
// const section = document.querySelector("section");
const icon_angry2 = document.querySelector("icon-angry2 icoo");
const input = document.querySelector("input");
const form = document.querySelector("form");
const container = document.getElementById("container");

form.addEventListener("submit", (eo) => {
  eo.preventDefault();

  const task = `
    <div class="task">
        <span class="icon-star-full icoo"></span>
        <p lang="ar" class="task-text">  ${input.value}     </p>
        <div>
            <span id="bin" class="icon-bin icoo"></span>
            <span class="icon-angry2 icoo"></span>
        </div>
    </div>`;

  container.innerHTML += task;
  input.value = "";
});

container.addEventListener("click", (eo) => {
  // if (eo.target.className == "icon-bin icoo") {
  //   eo.target.parentElement.parentElement.remove();
  // } else if (eo.target.className == "icon-angry2 icoo") {
  //   eo.target.classList.add("dn");

  //   const heart = `<span class="icon-heart"></span>`;

  //   eo.target.parentElement.parentElement
  //     .getElementsByClassName("task-text")[0]
  //     .classList.add("finish");

  //   eo.target.parentElement.innerHTML += heart;
  // } else if (eo.target.className == "icon-heart") {
  //   eo.target.parentElement.parentElement
  //     .getElementsByClassName("task-text")[0]
  //     .classList.remove("finish");

  //   eo.target.classList.add("dn");

  //   const add_angry = `
  //   <span class="icon-angry2 icoo"></span>

  //   `;
  //   eo.target.parentElement.innerHTML += add_angry;
  // } else if (eo.target.className == "icon-star-full icoo") {
  //   eo.target.classList.add("orange");

  //   container.prepend(eo.target.parentElement);
  // } else if (eo.target.className == "icon-star-full icoo orange") {
  //   eo.target.classList.remove("orange");
  // }
  switch (eo.target.className) {
    case "icon-bin icoo":
      eo.target.parentElement.parentElement.remove();

      break;
    case "icon-angry2 icoo":
      eo.target.classList.add("dn");

      const heart = `<span class="icon-heart"></span>`;

      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.add("finish");

      eo.target.parentElement.innerHTML += heart;
      break;
    case "icon-heart":
      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.remove("finish");

      eo.target.classList.add("dn");

      const add_angry = `
          <span class="icon-angry2 icoo"></span>
      
          `;
      eo.target.parentElement.innerHTML += add_angry;
      break;
    case "icon-star-full icoo":
      eo.target.classList.add("orange");

      container.prepend(eo.target.parentElement);
      break;
    case "icon-star-full icoo orange":
      eo.target.classList.remove("orange");

      break;

    default:
      break;
  }
});
