const numbers = document.querySelectorAll(".numbers");
const submit = document.querySelector("#submit");
const card = document.querySelector(".card");
const scoreBoard = document.querySelector("#score-board");
const thankYou = document.querySelector(".card-2");
let socre = "";
// You Selected 4 out of 5
console.log(numbers);
var myFunction = function() {
    socre = this.getAttribute("data-num");
    Array.from(numbers).forEach(function(element) {
        element.classList.remove("numbers-clicked");
        element.classList.add("hover");
    });
    this.classList.add("numbers-clicked");
    this.classList.remove("hover");

};

submit.addEventListener('click',()=>{
    card.classList.add("d-none");
    scoreBoard.innerHTML = "You Selected "+socre+" out of 5";
    thankYou.classList.remove("d-none");
});

Array.from(numbers).forEach(function(element) {
    element.addEventListener('click', myFunction);
});

// for (var i = 0; i < numbers.length; i++) {
//     numbers[i].addEventListener('click',myFunction,false);
// }