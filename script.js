"use strict"; // Opt into stricter JS mode to catch common mistakes early

/* =========================
   TYPEWRITER TITLE EFFECT
   ========================= */
// Grab the H1 element where we’ll display the typing effect
const titleEl = document.getElementById("title"); // <h1 id="title" ...>
// The full string to type out, one character at a time
const titleText = "Welcome to Evan’s Site"; // Change this to customize your greeting
// How long to wait between each typed character (in milliseconds)
const typeDelay = 70; // Lower = faster typing

/**
 * Step through the string and reveal one more character each call.
 * @param {number} i - current character index (defaults to 0 on first call)
 */
function typeWriter(i = 0) { // Provide default so we can call typeWriter() without args
  if (i <= titleText.length) { // Continue until we’ve typed every character
    titleEl.textContent = titleText.slice(0, i); // Show substring from 0 up to i
    setTimeout(() => typeWriter(i + 1), typeDelay); // Schedule the next character
  }
}
// Kick off the typing when the script loads (the DOM is already parsed since script is at bottom)
typeWriter();

/* =========================
   SCROLL REVEAL WITH OBSERVER
   ========================= */
// Select every element that should animate in when scrolled into view
const revealEls = document.querySelectorAll(".reveal"); // NodeList of .reveal elements

/**
 * IntersectionObserver runs callback whenever observed el*
