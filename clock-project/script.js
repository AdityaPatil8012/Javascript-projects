const clock = document.getElementById("clock");
// console.log(clock);

// console.log(date.toLocaleTimeString());

setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString();
},1000)