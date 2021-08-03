let myHeading = document.querySelector('h1');
myHeading.textContent = 'Wink';

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/wink.jpeg') {
      myImage.setAttribute('src','images/elmo.png');
    } else {
      myImage.setAttribute('src','images/wink.jpeg');
    }
}


let myButton = document.querySelector('button');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = `Welcome to Wink, ${myName}!`
}

if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = `Welcome to Wink, ${storedName}!`;
}

myButton.onclick = function() {
    setUserName();
}

