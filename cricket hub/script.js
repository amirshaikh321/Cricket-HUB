// script.js

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Reset slideIndex if it exceeds the number of slides
    
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// script.js
// script.js

function setVotes(ans_id, ans_prc, vote_id, button_id){
    // Ensure the percentage does not exceed 100%
    if (ans_prc >= 100) {
        ans_prc = 100;
        document.getElementById(button_id).disabled = true; // Disable button
    }
    document.getElementById(ans_id).style.width = ans_prc + '%';
    document.getElementById(vote_id).innerText = ans_prc + '%';
}

var b1 = 0, b2 = 0, b3 = 0;

// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add1').onclick = function(){
        if(b1 < 100){
            b1 += 10;
            setVotes('bar1', b1, 'vote1', 'add1');
        }
    }

    document.getElementById('add2').onclick = function(){
        if(b2 < 100){
            b2 += 10;
            setVotes('bar2', b2, 'vote2', 'add2');
        }
    }

    document.getElementById('add3').onclick = function(){
        if(b3 < 100){
            b3 += 10;
            setVotes('bar3', b3, 'vote3', 'add3');
        }
    }
});
