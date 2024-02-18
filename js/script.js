// main button
function buttonClick() {
  triketSecthionShow();
}

// tricker secsiton show display
function triketSecthionShow() {
  const show = document.getElementById("tricket-section");
  show.classList.remove("hidden");
}

// shit on clik
const seclets = document.getElementsByTagName("li");
let count = 0;
let counts = 40;
let tricketPrice = 0;
for (const seclet of seclets) {
  seclet.addEventListener("click", function () {
    count = count + 1;
    counts = counts - 1;
    tricketPrice = tricketPrice + 550;
    shitPositiveCount("total-price", tricketPrice);
    shitPositiveCount("positve-shit", count);
    avibleShit("Available-shit",counts)
    const value = seclet.innerText;
    showsShit("shit", value);
    setClass("set-class");
    money("set-money");
    seclet.classList.add("bg-amber-200");
    
  });
}
// submit bidiable 
const number =document.getElementById('number').addEventListener('keyup',function(){
    const numberValue=number.value
console.log(number)
})

// tricketPriceTotal

//   shit count
function shitPositiveCount(id, values) {
  const element = document.getElementById(id);
  element.innerText = values;
}
// avible avibe shit
function avibleShit(id, value) {
  const avible = document.getElementById(id);
  const number = parseInt(avible);
  number.innerText = value;
  avible.innerText = value;
  return number;
}
// set background color
function setBackground(elements) {
  const element = document.getElementById(elements);
  element.classList.add("bg-amber-200");
  return element;
}

// set shows display
function showsShit(id, name) {
  const selector = document.getElementById(id);
  const h4 = document.createElement("h4");
  h4.innerText = name;
  selector.appendChild(h4);
}
// set class
function setClass(name) {
  const selector = document.getElementById(name);
  const h4 = document.createElement("h4");
  h4.innerText = "Economoy";
  selector.appendChild(h4);
}
// set money
function money(name) {
  const selector = document.getElementById(name);
  const h4 = document.createElement("h4");
  h4.innerText = "550";
  selector.appendChild(h4);
}
