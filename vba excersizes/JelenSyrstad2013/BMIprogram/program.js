Office.initialize = function (reason) {
//Add any needed initialization.
}
function calculateBMI() {
    Office.context.document.getSelectedDataAsync("matrix", function (result) {
//call the calculator with the array, result.value, as the argument
		myCalculator(result.value);
	});
}

function myCalculator(data){
	var calcBMI = 0;
	var BMI="";
	calcBMI = (data[1][0] / (data[0][0] *data [0][0]))* 703

/*evaluate the calculated BMI to get a string value because we want to
evaluate range, instead of switch(calcBMI), we do switch (true) and then 
use our variable as part of the ranges */
	switch(true){
		//if the calcBMI is less than 18.5
		case (calcBMI <= 18.5) : {
			BMI = "Underweight"
			break;
			}
		//if the calcBMI is a value between 18.5 and (&&) 24.9
		case ((calcBMI > 18.5)&&(calcBMI <= 24.9)):	{
			BMI = "Normal"
			break;
			}
		case ((calcBMI > 24.9)&&(calcBMI <= 29.9)) : {
			BMI = "Overweight"
			break;
			}
		//if the calcBMI is greater than 30
		case (calcBMI > 29.9) : BMI = "Obese"
		default : {
			BMI = 'Try again'
			break;
			}
	}
	document.getElementById("results").innerText = BMI;
}
