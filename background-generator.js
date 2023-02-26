// color1.addEventListener("input", function(){
//     body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
// })
// color2.addEventListener("input", function(){
    //     body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    // })
    
    
    let css = document.querySelector('h5');
    let color1 = document.querySelector('.color1');
    let color2 = document.querySelector('.color2');
    let color3 = document.querySelector('.color3');
    let color4 = document.querySelector('.color4');
    let body = document.getElementById('gradient');
    
    color1.addEventListener("input", SetGradient);
    color2.addEventListener("input", SetGradient);
    color3.addEventListener("input", SetGradient);
    color4.addEventListener("input", SetGradient);
    


function SetGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + "," + color3.value + "," + color4.value + ")";
    css.textContent = body.style.background + ";";
    console.log("function is running");
};
































// var css = document.querySelector("h5");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient")



// function setGradient() {
//     body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
//     css.textContent = body.style.background + ";";
// }



// color1.addEventListener("input", setGradient)
// color2.addEventListener("input", setGradient)

