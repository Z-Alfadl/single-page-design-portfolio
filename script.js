let slides = document.getElementsByClassName("slides");
let currentslide = 0

function ChangeSlide(num) {
 if (num >= slides.length) {num = 0;}
 if (num < 0) {num = slides.length - 1}

 slides[currentslide].classList.toggle("active")
 slides[num].classList.toggle("active")
}

document.getElementById("forward").addEventListener("click", () =>{
    ChangeSlide(currentslide+1)
})
document.getElementById("backward").addEventListener("click", () =>{
    ChangeSlide(currentslide-1)
})
