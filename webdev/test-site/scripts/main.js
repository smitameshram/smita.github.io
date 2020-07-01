/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Tech Solution';

document.querySelector('html').onclick = function() {
    alert('we will be right back!');
}*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/helper2.jpg') {
      myImage.setAttribute ('src','images/helper3.jpg');
    } else {
      myImage.setAttribute ('src','images/helper2.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Thank You,' + ' ' + myName + '!';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Thank You,' + ' ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}