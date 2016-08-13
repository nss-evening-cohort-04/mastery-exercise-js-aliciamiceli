var heightInput = document.getElementById("height");
var characterInput = document.getElementById("character");
var submit = document.getElementById("submit");

heightInput.addEventListener("input", treeFunction);
characterInput.addEventListener("input", alertFunction);
submit.addEventListener("click", submitFunction);


function treeFunction() {
  var height = heightInput.value;
  var character = characterInput.value;
  if (heightInput.value !== "") {
    console.log("height is " + height)

  } else if (heightInput.value === "") {
    alert("height is empty!")
  }
}
function alertFunction() {
 if (characterInput.value !== "") {
    console.log("character is " + characterInput.value);
  }  else if (characterInput.value === "")
    alert("character is empty!")
  }


function actualTreeFunction() {
 var rows = document.getElementById("height").value;
 var chars = document.getElementById("character").value;
 var actualNbsp = ("\u00a0");

var counter = rows;

for (var i = 0; i <= rows; i++) {
console.log(actualNbsp.repeat(counter --) + chars.repeat(i * 1.9));
  }
}

window.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
     submitFunction();
  }
})

function submitFunction() {
  actualTreeFunction();
  treeFunction();
  alertFunction();
}












