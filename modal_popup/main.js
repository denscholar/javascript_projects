"use strict";

const showButton = document.getElementsByClassName("show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModdal = document.querySelector(".close-modal");

const arr = Array.from(showButton);

// open the modal
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let id = 0; id < arr.length; id++) {
  const el = arr[id];
  el.addEventListener("click", openModal);
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal
closeModdal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
