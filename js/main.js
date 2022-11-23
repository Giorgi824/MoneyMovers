window.addEventListener("DOMContentLoaded", () => {
  const removeElClass = function (select = ".active", remove = "active") {
    const actives = document.querySelectorAll(select);
    actives.forEach((item) => item.classList.remove(remove));
  };
  document.body.addEventListener("click", function () {
    const check = document.querySelector(".active") ? true : false;
    if (check) {
      removeElClass();
    }
  });
  // header events
  const headerUserLang = document.querySelectorAll(".user-lang>div");
  headerUserLang.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.stopPropagation();
      const curr = e.target;
      if (curr.closest(".static-el")) {
        const current = e.currentTarget;
        const firstClassName = current.classList[0];
        const allActives = document.querySelectorAll(
          `*.active:not(.${firstClassName})`,
        );
        allActives.forEach((item) => item.classList.remove("active"));
        const contained = current.classList.contains("active");
        contained
          ? current.classList.remove("active")
          : current.classList.add("active");
      }
    });
  });

  // copy to clipboard
  function copyToClipBoard() {
    // Get the text field
    const copyText = document.getElementById("copied-input");
    copyText.value = accNumber.textContent;
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  }
  function copiedMessage() {
    copiedPop.classList.add("active");
    setTimeout(() => {
      copyBtn.disabled = false;
      copiedPop.classList.remove("active");
    }, 1000);
  }
  const copiedPop = document.querySelector(".copied");
  const copyBtn = document.querySelector(".copy-svg");
  const accNumber = document.querySelector(".acc-nm");
  copyBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    e.currentTarget.disabled = true;
    copyToClipBoard();
    copiedMessage();
  });
  // header form events
  const headerForm = document.querySelector("header form");
  const headerInput = document.querySelector("header form input");
  const headerFormClear = document.querySelector("header form .search-exit");
  headerForm.addEventListener("click", function (e) {
    e.stopPropagation();
    headerForm.classList.add("active");
  });
  headerFormClear.addEventListener("click", function (e) {
    e.stopPropagation();
    headerInput.value = "";
    headerForm.classList.remove("active");
  });
});
