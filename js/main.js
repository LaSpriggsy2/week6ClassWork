//<script src="js/myScript.js"></script>
//console.info("JavaSpript says hi");

document.getElementById("myHeading").innerHTML = "Matthew Spriggs";

document.querySelector("nav ul li").setAttribute("class","currentPage");

//document.querySelector("nav ul li a").setAttribute("href", "https:www.google.co.uk")

let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons);
// for(let i=0; i<colourButtons.length; i++){
//     colourButtons[i].style.backgroundColor = "lightGreen";
// }


document.getElementById("myTestBtn").addEventListener("click",function(){
    console.info("aaaaAAH");
});

// let redBtn = document.querySelector(".red");
// redBtn.addEventListener("click", function(){
//     document.body.setAttribute("class", "redBack");
// });

// let greenBtn = document.querySelector(".green");
// greenBtn.addEventListener("click", function(){
//     document.body.setAttribute("class", "greenBack");
// });

// let blueBtn = document.querySelector(".blue");
// blueBtn.addEventListener("click", function(){
//     document.body.setAttribute("class", "blueBack");
// });

// let defaultBtn = document.querySelector(".reset");
// defaultBtn.addEventListener("click", function(){
//     document.body.setAttribute("class", "");
// });

for(let i=0; i<colourButtons.length; i++){
    colourButtons[i].addEventListener("click", ChangeColour);
}
function ChangeColour(ev){
    console.dir(ev.target.classList[0]);
    let colourClass = ev.target.classList[0]+"Back";
    document.body.setAttribute("class", colourClass);
}

// console.dir(document);
// console.info("Hello world")
// alert('Fired from the script'); saving this for later
//onload="alert('Just a Test')"

let fruits = ["Apple", "Banana", "Cherry"];
console.dir(fruits);

let imageAr = [
    'images/view1.jpg',
    'images/view2.jpg',
    'images/view3.jpg',
    'images/view4.jpg',
    'images/view5.jpg',
    'images/view6.jpg'
  ];





let imageRotator = document.getElementById("myImages");
let imageCounter = 0;

function chgImage(){
    if(imageCounter == imageAr.length){imageCounter=0;}
    imageRotator.setAttribute("src", imageAr[imageCounter]);
    imageCounter++
    console.info(imageCounter);
}
setInterval(chgImage, 100);