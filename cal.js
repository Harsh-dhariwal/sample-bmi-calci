window.onload = () => {
	let button = document.querySelector("#btn");

	// Function for calculating BMI
	button.addEventListener("click", calculateBMI);
};
let result=document.querySelector("#result");
function calculateBMI(){
    //taking jeight from the user
    let height = parseInt(document
        .querySelector("#height").value);
    //accepting wieght
    let weight = parseInt(document
        .querySelector("#weight").value);
    
     //calculating bmi
        let bmi = (weight / ((height * height) 
        / 10000)).toFixed(2);
        if (bmi < 18.6) result.innerHTML =
            `Under Weight : <span>${bmi}</span>`;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `Normal : <span>${bmi}</span>`;
        else result.innerHTML =
            `Over Weight : <span>${bmi}</span>`;
            }

