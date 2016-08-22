var heightInput = document.getElementById("height");
var characterInput = document.getElementById("character");
var submit = document.getElementById("submit");

submit.addEventListener("click", submitFunction);

function actualTreeFunction() {
  var height = heightInput.value;
  var character = characterInput.value;

    if (character !== "" && height !== ""){
      var actualNbsp = ("\u00a0");
      var counter = height;
      for (var i = 1; i <= height; i++) {
        console.log(actualNbsp.repeat(counter --) + character.repeat(i * 1.9));
     }
   } else {
      if (character === "") {
        alert("character is empty!")
      }
      if (height === "") {
        alert("height is empty!")
      }
    }
  }

window.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    submitFunction();
  }
})

function submitFunction() {
  actualTreeFunction();
}



