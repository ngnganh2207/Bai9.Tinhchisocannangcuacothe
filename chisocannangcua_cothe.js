let weight= parseFloat(prompt("Nhập cân nặng: "));
let height=parseFloat(prompt("Nhập Chiều cao: "));
let bmi= weight / (height**2) ;
if (bmi<18.5){
    document.getElementById("result").innerHTML="Underweight";
}
if((bmi>=18.5) && (bmi<25.0)){
    document.getElementById("result").innerHTML="Nomal";
}
if((bmi>=25.0) && (bmi<30.0)){
    document.getElementById("result").innerHTML="Overweight";
}
if(bmi>=30){
    document.getElementById("result").innerHTML="Obese";
}