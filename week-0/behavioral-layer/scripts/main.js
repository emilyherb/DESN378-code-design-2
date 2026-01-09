// Store a reference to the <h1> in a variable
let myHeading = document.querySelector("h1");
// Update the text content of the <h1>
//myHeading.textContent = "Hello world!";
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/1.png") {
    myImage.setAttribute("src", "images/2.png");
  } else {
    myImage.setAttribute("src", "images/1.png");
  }
});

let myButton = document.querySelector("button");

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


myButton.addEventListener("click", () => {
  setUserName();
});

/*
  SUMMARY:
  This file does two things:
  1. It allows the user to change the image by clicking on it. It works by checking the current image source and toggling to the other one when clicked.
  2. Changes the heading to greet the user by name and stores it in local storage so that it sticks around even after reload!
​
  The key pattern I learned: javascript is similar to java in that it uses dot notation to access properties and methods! I did already know that, but I'm not too familar with event listeners so this was good practice :)
*/