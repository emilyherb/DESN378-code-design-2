
let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");

// SET NAME
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName(); 
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `C0DING IS C00L, ${myName}`;
  }
}

const storedName = localStorage.getItem("name");
if (storedName) {
  myHeading.textContent = `C0DING IS C00L, ${storedName}`;
}
// FORGET NAME
const forgetButton = document.querySelector("#forget");

forgetButton.addEventListener("click", () => {
if (confirm("Forget your name?")) {
  localStorage.removeItem("name");
  myHeading.textContent = "C0DING IS C00L";
}
});


myButton.addEventListener("click", setUserName);

// IMAGE TOGGLE WITH FADE
const images = document.querySelectorAll(".image-container img");

function toggleImage() {
  images.forEach((img) => img.classList.toggle("active"));
}

// CLICK TO TOGGLE
images.forEach((img) => {
  img.addEventListener("click", toggleImage);
});

// KEYBOARD (enter or space) TO TOGGLE
images.forEach((img) => {
  img.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // prevent scrolling on Space
      toggleImage();
    }
  });
});


/*
  SUMMARY:
  This file does three things:
  1. It allows the user to change the image by clicking on it. It works by checking the current image source and toggling to the other one when clicked.
  2. Changes the heading to greet the user by name and stores it in local storage so that it sticks around even after reload!
  3. Additionally it has a forget me button to reset the name.
​
  The key pattern I learned: javascript is similar to java in that it uses dot notation to access properties and methods!
  I did already know that, but I'm not too familar with event listeners so this was good practice :)
  I did learn about focusing with tabindex!
*/