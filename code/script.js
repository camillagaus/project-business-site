var sectionOne=document.getElementById("section1");
var sectionTwo=document.getElementById("section2");
var sectionThree=document.getElementById("section3");


// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which 
//will be executed when the element is clicked.


sectionOne.onclick = toggle;
sectionTwo.onclick = toggle;
sectionThree.onclick = toggle;

