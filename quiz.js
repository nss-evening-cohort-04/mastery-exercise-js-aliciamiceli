var heightInput = document.getElementById("height");
var characterInput = document.getElementById("character");
var submit = document.getElementById("submit");

heightInput.addEventListener("input", treeFunction);
characterInput.addEventListener("input", treeFunction);
submit.addEventListener("click", submitFunction);

window.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
     submitFunction();
  }
})


function treeFunction() {
  var height = heightInput.value;
  var character = characterInput.value;
  if (heightInput.value === "") {
    alert("height empty!");
   } if (characterInput.value === "") {
    alert("character empty!")
  } else {
    console.log("height is " + height);
    console.log("character is " + character);
  }
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



function submitFunction() {
  actualTreeFunction();
  treeFunction();
}












