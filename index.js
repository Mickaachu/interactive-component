const ratingSelection = document.querySelectorAll(".rating");
const tyCard = document.getElementById("ty-card");
const button = document.getElementById("button");
const ratingCard = document.getElementById("rating-card");
const ratingnumber = document.getElementById("ratingnumber");
let value;

for(let i = 0; i < ratingSelection.length; i++) {
    
    ratingSelection[i].addEventListener("click", function() {
        let count = 0;
        
        while(count<ratingSelection.length) {
            ratingSelection[count++].classList.remove("rating-on")
        }
        
        this.classList.add("rating-on")
        value = this.innerText;
        
    })
    
}

button.addEventListener("click", function() {
    ratingCard.style.display = "none";
    ratingnumber.innerText = value;
    tyCard.style.display = "flex"

})