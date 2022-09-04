"use strict";

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  const audioSrc = audio.getAttribute("src");
  const music = new Audio(audioSrc);

  music.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName != "transform") return;
  this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
