// Write your code here!
document.querySelector("main#main").remove();

const main = document.getElementById("main")

const header = document.createElement("h1");
const newHeader = document.createElement("h1")
newHeader.id="victory"

newHeader.innerHTML="Flatiron School is the champion!";

newHeader.classList.add("victory")