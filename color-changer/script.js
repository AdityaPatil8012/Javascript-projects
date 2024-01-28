// console.log("hello world");


// select all the buttons;
const buttons = document.querySelectorAll(".color-container");
// console.log(buttons);

// now select the canvas;
const canvas = document.querySelector(".canvas");
// console.log(canvas);


// now add event on each button;
buttons.forEach(function(button){
  button.addEventListener("click", (e)=>{
    // console.log(e);
    console.log(e.target.id);
    if(e.target.id === "red"){
      canvas.style.backgroundColor = "red";
    } else if(e.target.id === "yellow"){
      canvas.style.backgroundColor = "yellow";
    } else if(e.target.id === "green"){
      canvas.style.backgroundColor = "green";
    } else if(e.target.id === "blue"){
      canvas.style.backgroundColor = "blue";
    } else{
      canvas.style.backgroundColor = "white";
    }
  })
})