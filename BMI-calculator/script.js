const form = document.querySelector("form");
// console.log(form);
console.log(document.querySelector(".ans"));

form.addEventListener("submit", function(e){
  e.preventDefault();

  const heightInNumber = parseInt(document.querySelector("#height").value);
  const weightInNumber = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector(".ans");

  if(heightInNumber === "" || heightInNumber < 0 || isNaN(heightInNumber)){
    result.innerHTML = "please give valid height";
  }else if(weightInNumber === "" || weightInNumber < 0 || isNaN(weightInNumber)){
    result.innerHTML = "please give valid weight";
  }else {
    const bmi = (weightInNumber / ((heightInNumber*heightInNumber)/10000)).toFixed(2);
    result.innerHTML = bmi;
  }

})