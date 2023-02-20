const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// mail ai 

const form = document.querySelector('#contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const phone = form.elements.phone.value;
  const message = form.elements.message.value;

  const mailto = `mailto:skaparhyttan@outlook.com?subject=Message from ${name} (${email}) ${phone} &body=${message}`;
  window.location.href = mailto;
});
