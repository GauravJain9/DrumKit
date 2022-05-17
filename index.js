let totalDrums = document.querySelectorAll(".drum");
for(let i = 0; i < totalDrums.length; i++)
{
  totalDrums[i].addEventListener("click", function (event) {
  makeSound(this.textContent);
  animateButton(this.textContent);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  animateButton(event.key);
});

var makeSound = (key) => {
  switch (key) {
    // below line will behind the scene actually construct an HTML audio element (look at html media element)
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();  
      break;
    case "l":
      var kick_bass = new Audio("sounds/kick-bass.mp3");
      kick_bass.play();    
      break;
    default:
      console.log(key);
  }
}

function animateButton(key) {
  var button = document.querySelector("."+key);
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
}
