function bmiCalc(){
    let inputweight=document.getElementById("weight").value;
    let inputheight=document.getElementById("height").value;
    let bmi= (inputweight/inputheight/inputheight)*10000;
    document.getElementById("bmiresult").innerHTML=`YOUR BMI IS: ${bmi}`; 
   if(bmi<18.5){
        document.getElementById("result").innerHTML="YOU ARE UNDERWEIGHT";
    }
    else if(bmi>18.5 && bmi<24.9){
        document.getElementById("result").innerHTML="YOU ARE NORMAL WEIGHT";
    }
    else if(bmi>25 && bmi<29.9){
        document.getElementById("result").innerHTML="YOU ARE OVER WEIGHT";
    }
    else{
        document.getElementById("result").innerHTML="YOU ARE IN OBESITY";
    }
   

}